import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home";
import Pedido from "./Pedido";
import "./styles/site.css";

const getRoute = () => (window.location.hash.startsWith("#/pedido") ? "pedido" : "home");

function Root() {
    const [route, setRoute] = useState(getRoute);

    useEffect(() => {
        const onHash = () => setRoute(getRoute());
        window.addEventListener("hashchange", onHash);
        return () => window.removeEventListener("hashchange", onHash);
    }, []);

    useEffect(() => {
        if (route === "pedido") window.scrollTo(0, 0);
    }, [route]);

    return route === "pedido" ? <Pedido /> : <Home />;
}

createRoot(document.getElementById("root")).render(<Root />);