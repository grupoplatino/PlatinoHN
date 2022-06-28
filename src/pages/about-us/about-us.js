import React from 'react';
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
  } from '../../assets/index';
import arrow from '../../assets/images/icons/right_arrow.svg'

function AboutUs() {
    const companies = [
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

    const faq = [
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
    return (
        <div>
            <section className="w-full pt-24 pb-15 text-white bg-img-contact-header">
                <div className="flex items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-4xl">
                    <div className="flex flex-col w-full mx-auto text-center">
                        <div className="relative items-center w-full mx-auto align-middle">
                            <div className="pb-12">
                                <h1 className="max-w-4xl text-4xl font-semibold leading-none tracking-tighter text-white md:text-4xl lg:text-5xl lg:max-w-7xl">
                                    Sobre Nosotros
                                </h1>
                                <p className="mt-5 text-base leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container px-5 py-12 mx-auto lg:px-5 w-full">
                <div className="grid items-center justify-between grid-cols-12 gap-3">
                    <div className="mb-0 md:mb-6 col-span-12 md:pb-0 md:col-span-7">
                        <p className="text-3xl">Los <span className="font-bold">productos</span> y <span className="font-bold">servicios</span> de calidad
                            que necesitas, eficientemente a tu alcance.
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <br />
                        <button className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-white bg-orange-600 hover:bg-orange-700">
                            Registro/Iniciar Sesión
                        </button>
                    </div>
                    <div className="mb-0 md:mb-6 col-span-12 md:pb-0 md:col-span-5">
                        <img className="w-100" src={iso_all} alt="Platino HN" />
                    </div>
                </div>
            </section>
            <section className="container px-5 py-12 mx-auto lg:px-5 w-full mt-10">
                <div className="grid grid-cols-3">
                    {/* opacity-50 hover:opacity-100 */}
                    {companies.map(function (item, index) {
                        return (
                            <div key={index} className="border p-4">
                                <div className="flex items-center">
                                    <div className="mx-3">
                                        <img className="w-100 h-20" src={item.logo} alt="Platino Capital" />
                                    </div>
                                    <div className="mx-2">
                                        <p className="font-semibold">{item.title}</p>
                                        <div className="flex items-center">
                                            <p className="text-gray-600 mr-3">
                                                Visita {item.subTitle}
                                            </p>
                                            <img className="w-100 h-3" src={arrow} alt="Platino HN" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="container mx-auto mt-10 text-center">
                    <button className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-white bg-orange-600 hover:bg-orange-700">
                        Más Información
                    </button>
                </div>
            </section>
            <section className="container px-6 py-32 mx-auto lg:px-10 w-full h-iso-gray">
                <div className="grid items-center justify-between grid-cols-12 gap-3">
                    <div className="mb-0 md:mb-6 col-span-12 md:pb-0 md:col-span-6">
                        <p className="text-5xl">Mantén el control con <span className="font-semibold">Platino ID</span></p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <br />
                        <p className="text-2xl">Asegurado con <span className="font-semibold">Stripe</span></p>
                        <br />
                        <button className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-white bg-orange-600 hover:bg-orange-700">
                            Registrarme con Platino.hn
                        </button>
                    </div>
                    <div className="mb-0 md:mb-6 col-span-12 md:pb-0 md:col-span-6">
                        <div class="tabs">
                            {faq.map(function (item, index) {
                                return (
                                    <div class="border tab mt-3">
                                        <div class="border-l-2 border-transparent relative">
                                            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                                            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck1">
                                                <span class="text-lg">
                                                    {item.title}
                                                </span>
                                                <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 plus" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 minus" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                                    </svg>
                                                </div>
                                            </header>
                                            <div class="tab-content">
                                                <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                                                    <p>
                                                        {item.message}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;