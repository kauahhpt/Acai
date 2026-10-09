import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import Home from "./Home";
import Pedido from "./Pedido";
import Admin from "./Admin";
import Login from "./Login";
import Register from "./Register";

import "./styles/site.css";
import "./styles/sections.css";

const getRoute = () => {
    const hash = window.location.hash
        .slice(1)
        .replace(/^\/+/, "")
        .toLowerCase();

    if (hash.startsWith("pedido")) return "pedido";
    if (hash.startsWith("admin")) return "admin";
    if (hash.startsWith("login")) return "login";
    if (hash.startsWith("inscricao")) return "inscricao";

    return "home";
};

function Root() {
    const [route, setRoute] = useState(getRoute);

    useEffect(() => {
        const onHashChange = () => {
            setRoute(getRoute());
        };

        window.addEventListener("hashchange", onHashChange);

        return () => {
            window.removeEventListener("hashchange", onHashChange);
        };
    }, []);

    useEffect(() => {
        const target = sessionStorage.getItem("after-login");

        if (!target) return;

        sessionStorage.removeItem("after-login");

        // Uma rota administrativa aberta explicitamente tem prioridade.
        if (getRoute() === "admin") return;

        if (!target.startsWith("#")) return;

        window.location.hash = target;
    }, []);

    if (route === "pedido") {
        return <Pedido />;
    }

    if (route === "admin") {
        return <Admin />;
    }

    if (route === "login") {
        return <Login />;
    }

    if (route === "inscricao") {
        return <Register />;
    }

    return <Home />;
}

createRoot(document.getElementById("root")).render(<Root />);