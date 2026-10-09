import React, {
    useEffect,
    useState
} from "react";

import Header from "./components/Header";

import AcaiCarousel
    from "./AcaiCarousel";

import Menu
    from "./components/Menu";

import Customization
    from "./components/Customization";

import Complements
    from "./components/Complements";

import Highlights
    from "./components/Highlights";

import About
    from "./components/About";

import Contact
    from "./components/Contact";

import Footer
    from "./components/Footer";

import {
    useLenis
} from "./hooks/useLenis";
import { supabase } from "./supabaseClient";


export default function Home() {

    useLenis();

        const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const { data, error } = await supabase
                .from("products")
                .select("*");

            if (error) {
                console.error("Erro ao buscar produtos:", error);
                return;
            }

            console.log("Produtos do Supabase:", data);
            setProducts(data);
        };

        loadProducts();
    }, []);

    useEffect(() => {

        const id =
            window.location.hash.slice(1);


        requestAnimationFrame(() => {

            const element =
                id &&
                !id.startsWith("/")
                    ? document.getElementById(
                          id
                      )
                    : null;


            if (element) {

                element.scrollIntoView();

            } else {

                window.scrollTo(
                    0,
                    0
                );

            }

        });

    }, []);


    return (

        <div className="home">

            <Header />


            <main>

                <AcaiCarousel />


                <Menu />

                <Customization />

                <Complements />

                <Highlights />

                <About />

                <Contact />

            </main>


            <Footer />

        </div>

    );
}