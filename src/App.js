import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Arrived, AsideMenu, Browser, Clients, Footer, Header, Hero, Offline } from "./components";
import { Cart, Details, Profile, Splash } from "./pages";

function App({ cart }) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine);

    function handleOfflineStatus() {
        setOfflineStatus(!navigator.onLine);
    }

    useEffect(() => {
        (async function () {
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await fetch(`${apiUrl}/items`, {
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json",
                },
            });

            const { nodes } = await response.json();
            setItems(nodes);

            if (!document.querySelector('script[src="/carousel.js"]')) {
                const script = document.createElement("script");
                script.src = "/carousel.js";
                script.async = false;
                document.body.appendChild(script);
            }
        })();

        handleOfflineStatus();
        window.addEventListener("online", handleOfflineStatus);
        window.addEventListener("offline", handleOfflineStatus);

        setTimeout(function () {
            setIsLoading(false);
        }, 1500);

        return function () {
            window.removeEventListener("online", handleOfflineStatus);
            window.removeEventListener("offline", handleOfflineStatus);
        };
    }, [offlineStatus]);

    return (
        <>
            {isLoading === true ? (
                <Splash />
            ) : (
                <>
                    {offlineStatus && <Offline />}
                    <Header mode="light" cart={cart} />
                    <Hero />
                    <Browser />
                    <Arrived items={items} />
                    <Clients />
                    <AsideMenu />
                    <Footer />
                </>
            )}
        </>
    );
}

export default function AppRoutes() {
    const cachedCart = window.localStorage.getItem("cart");
    const [cart, setCart] = useState([]);

    function handleAddToCart(item) {
        const currentIndex = cart.length;
        const newCart = [...cart, { id: currentIndex + 1, item }];
        setCart(newCart);
        window.localStorage.setItem("cart", JSON.stringify(newCart));
    }

    function handleRemoveCartItem(event, id) {
        const revisedCart = cart.filter((item) => item.id !== id);
        setCart(revisedCart);
        window.localStorage.setItem("cart", JSON.stringify(revisedCart));
    }

    useEffect(() => {
        if (cachedCart !== null) {
            setCart(JSON.parse(cachedCart));
        }
    }, [cachedCart]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App cart={cart} />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/details/:id" element={<Details handleAddToCart={handleAddToCart} cart={cart} />} />
                <Route path="/cart" element={<Cart cart={cart} handleRemoveCartItem={handleRemoveCartItem} />} />
            </Routes>
        </BrowserRouter>
    );
}
