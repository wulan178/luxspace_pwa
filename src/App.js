import React, { useEffect, useState } from "react";
import { Arrived, AsideMenu, Browser, Clients, Header, Hero } from "./components";

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async function () {
            const response = await fetch("https://bwacharity.fly.dev/items", {
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json",
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
