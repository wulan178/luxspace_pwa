import React, { useEffect, useState } from "react";
import { Arrived, AsideMenu, Browser, Clients, Header, Hero } from "./components";

function App() {
    const [items, setItems] = useState([]);

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
        })();
    }, []);

    return (
        <>
            <Header />
            <Hero />
            <Browser />
            <Arrived items={items} />
            <Clients />
            <AsideMenu />
        </>
    );
}

export default App;
