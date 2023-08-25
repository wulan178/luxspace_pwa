import React, { useEffect, useState } from "react";
import { Arrived, AsideMenu, Browser, Clients, Header, Hero, Offline } from "./components";
import { Splash } from "./pages";

function App() {
    const [items, setItems] = useState([]);
    const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine);
    const [isLoading, setIsLoading] = useState(true);

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

            // Carousel
            const script = document.createElement("script");
            script.src = "/carousel.js";
            script.async = false;
            document.body.appendChild(script);
        })();

        handleOfflineStatus();
        window.addEventListener("online", handleOfflineStatus);
        window.addEventListener("offline", handleOfflineStatus);

        setTimeout(() => {
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
                    <Header />
                    <Hero />
                    <Browser />
                    <Arrived items={items} />
                    <Clients />
                    <AsideMenu />
                </>
            )}
        </>
    );
}

export default App;
