import React, {useEffect} from "react";
import {
    iso_all,
    iso_motors,
    iso_capital,
    iso_ferreteria,
    iso_repuestos,
    iso_usados,
    iso_software,
    iso_inmobiliaria,
    iso_logistics
  } from "../../assets/index";
import Head from "./components/head";
import Services from "./components/services";
import Companies from "./components/companies";
import Faq from "./components/faq";
import ScrollToTop from "../../utils/scroll-to-top";

function AboutUs() {
    const list_companies = [
        {
            logo: iso_motors,
            title: "Renta y Venta de Maquinaria",
            subTitle: "Platino Motors"
        },
        {
            logo: iso_ferreteria,
            title: "Ferreteria en Linea",
            subTitle: "Ferreteria Platino"
        },
        {
            logo: iso_software,
            title: "Software de Construcción",
            subTitle: "Platno Software"
        },
        {
            logo: iso_usados,
            title: "Clasificados de Equipos",
            subTitle: "Platino Maketplace"
        },
        {
            logo: iso_capital,
            title: "Platino Capital",
            subTitle: "Platino Capital"
        },
        {
            logo: iso_inmobiliaria,
            title: "Inmobiliaria",
            subTitle: "Inmobiliaria Platino"
        },
        {
            logo: iso_repuestos,
            title: "Repuestos",
            subTitle: "Repuestos Platino"
        },
        {
            logo: iso_logistics,
            title: "Gestión de Carga",
            subTitle: "Platino Logistics"
        },
    ]

    const list_faq = [
        {
            title: "¿Pregunta frecuente va aqui?",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            title: "¿Pregunta frecuente va aqui?",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            title: "¿Pregunta frecuente va aqui?",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            title: "¿Pregunta frecuente va aqui?",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
    ]
    useEffect(() => {
        ScrollToTop();
      }, []);
    return (
        <div>
            <Head/>
            <Services icon={iso_all}/>
            <Companies companies={list_companies}/>
            <Faq faq={list_faq}/>
        </div>
    );
}

export default AboutUs;