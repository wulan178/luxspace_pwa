import React from "react";
import { Arrived, AsideMenu, Browser, Clients, Header, Hero } from "./components";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Browser />
            <Arrived />
            <Clients />
            <AsideMenu />
        </>
    );
}

export default App;
