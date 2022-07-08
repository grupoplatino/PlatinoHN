import React, { useEffect, useState } from "react";
import platino_hn from "../assets/images/companies/phn.png";
import { AiOutlineAppstore } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [show, setShow] = useState(false);
    const [navIndex, setNavIndex] = useState(0);
    let typeNav = "bg-blackCustom-900";

    const navItems = [
        {
            title: "Inicio",
            uri: "/"
        },
        {
            title: "Sobre Nosotros",
            uri: "/aboutUs"
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
        <nav className={`${show && typeNav} fixed left-0 right-0 z-20`}>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-grayCustom-400 focus:outline-none focus:ring-2 focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
                            <svg className="block h-6 w-6 md:h-9 md:w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6 md:h-9 md:w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center ml-4 sm:ml-0 sm:items-stretch sm:justify-between">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/">
                                <img className="block lg:hidden h-8 w-auto" src={platino_hn} alt="Workflow" />
                                <img className="hidden lg:block h-8 w-auto" src={platino_hn} alt="Workflow" />
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
                    <div className="flex pr-16 lg:right-0 lg:inset-y-0 lg:items-center lg:pl-4 lg:pr-5">
                        <div className="mr-3 relative">
                            <div>
                                <button type="button" className="bg-grayCustom-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grayCustom-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </button>
                            </div>
                        </div>
                        <button type="button" className="bg-grayCustom-800 p-1 rounded-full text-blackCustom-400 hover:text-blackCustom-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grayCustom-800 focus:ring-white">
                            <AiOutlineAppstore size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default NavBar;