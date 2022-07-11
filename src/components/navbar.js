import React, { useEffect, useState } from "react";
import platino_hn from "../assets/images/companies/phn.png";
import { AiOutlineAppstore } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Disclosure } from '@headlessui/react';
// import { platino_capital, platino_ferreteria, platino_inmobiliaria, platino_logistics, platino_motors, platino_repuestos, platino_software, platino_usados } from "../assets";

const NavBar = () => {
    const [show, setShow] = useState(false);
    const [navIndex, setNavIndex] = useState(0);
    const [navColor] = useState("bg-blackCustom-900");

    const navItems = [
        {
            title: "Inicio",
            uri: "/"
        },
        {
            title: "Compañias",
            uri: "/companies"
        },
        {
            title: "Financiamiento",
            uri: "/financing"
        },
        {
            title: "Sobre Nosotros",
            uri: "/aboutUs"
        },
        {
            title: "Contacto",
            uri: "/contact"
        },
    ]

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.outerWidth > 767) {
            return setShow(window.pageYOffset > 10);
        }
        if (window.outerWidth < 767) {
            return setShow(window.outerWidth < 767)
        }
    };

    const ChangePositionNav = (index) => {
        setNavIndex(index);
    }

    return (
        <nav className={`${show && navColor} fixed left-0 right-0 z-20`}>
            <Disclosure as="nav">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                            <Disclosure.Button onClick={() => setShow(true)} className="inline-flex items-center justify-center p-2 rounded-md text-grayCustom-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
                                <svg className="block h-9 w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className="hidden h-9 w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </Disclosure.Button>
                        </div>
                        <div className="flex-1 flex items-center ml-4 sm:ml-0 sm:items-stretch sm:justify-between">
                            <div className="flex-shrink-0 flex items-center">
                                <Link to="/">
                                    <img className="block h-10 w-auto" src={platino_hn} alt="Workflow" />
                                </Link>
                            </div>
                            <div className="hidden lg:block sm:ml-6">
                                <div className="flex space-x-4">
                                    {navItems.map(function (item, index) {
                                        return (
                                            <Link key={index} to={item.uri} className={
                                                navIndex === index ? "bg-blackCustom-700 text-grayCustom-300 hover:bg-blackCustom-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                                    : "text-grayCustom-300 hover:bg-blackCustom-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            }
                                                onClick={() => ChangePositionNav(index)}
                                                aria-current="page">{item.title}</Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex pr-16 lg:right-0 lg:inset-y-0 lg:items-center lg:pl-4 lg:pr-5">
                            <div className="mr-3 relative">
                                <div>
                                    <button type="button" className="bg-grayCustom-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grayCustom-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </button>
                                </div>
                            </div>
                            <button type="button" className="bg-grayCustom-800 p-1 rounded-full text-blackCustom-900 hover:text-blackCustom-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grayCustom-800 focus:ring-white">
                                <AiOutlineAppstore size={20} />
                            </button>
                        </div>
                    </div>
                </div>
                <Disclosure.Panel className="bg-blackCustom-900">
                    {({ close }) => (
                        <div className="text-white">
                            {navItems.map((item, index) => (
                                <div className="w-full text-center">
                                    <hr className="opc-snall" />
                                    <Link
                                        key={index}
                                        to={item.uri}
                                        className="block px-3 py-3 rounded-md text-base font-medium"
                                        onClick={() => {
                                        }}
                                    >
                                        {item.title}
                                    </Link>
                                </div>
                            ))}
                            <hr className="w-full opc-snall" />
                            <div className="py-4 flex justify-center">
                                <div className="mr-8 relative">
                                    <div>
                                        <button type="button" className="bg-grayCustom-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grayCustom-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                            <img className="h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                        </button>
                                    </div>
                                </div>
                                <button type="button" className="bg-grayCustom-800 p-2 rounded-full text-blackCustom-900 hover:text-blackCustom-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grayCustom-800 focus:ring-white">
                                    <AiOutlineAppstore size={20} />
                                </button>
                            </div>
                        </div>
                    )}
                </Disclosure.Panel>
            </Disclosure>
        </nav>

    );
}

export default NavBar;