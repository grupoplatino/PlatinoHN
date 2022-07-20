import React, { useEffect, useState, Fragment } from "react";
import platino_hn from "../assets/images/companies/phn.png";
import { AiOutlineAppstore, AiOutlineHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Disclosure } from '@headlessui/react';
import { Menu, Transition } from '@headlessui/react'

import { platino_capital, platino_ferreteria, platino_inmobiliaria, platino_logistics, platino_motors, platino_repuestos, platino_software, platino_usados } from "../assets";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
    const [show, setShow] = useState(false);
    const [navIndex, setNavIndex] = useState("");
    const [navColor] = useState("bg-blackCustom-900");

    const companies = [
        {
            logo: platino_motors,
            url: ""
        },
        {
            logo: platino_capital,
            url: ""
        },
        {
            logo: platino_ferreteria,
            url: ""
        },
        {
            logo: platino_inmobiliaria,
            url: ""
        },
        {
            logo: platino_logistics,
            url: ""
        },
        {
            logo: platino_repuestos,
            url: ""
        },
        {
            logo: platino_software,
            url: ""
        },
        {
            logo: platino_usados,
            url: ""
        },
    ]

    const navItems = [
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
        let checkPath = window.location.hash.split("#")[1];
        if(checkPath !== undefined || checkPath !== "" || checkPath !== null){
            setNavIndex(checkPath);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.outerWidth > 767) {
            return setShow(window.pageYOffset > 10);
        }
        if (window.outerWidth < 767) {
            if(window.pageYOffset > 20){
                return setShow(window.outerWidth < 767);
            }else{
                return setShow(false);
            }
        }
    };

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
                                <Link to="/" onClick={() => setNavIndex("")}>
                                    <img className="block h-10 w-auto" src={platino_hn} alt="Workflow" />
                                </Link>
                            </div>
                            <div className="hidden lg:block sm:ml-6">
                                <div className="flex space-x-4">
                                    {navItems.map(function (item, index) {
                                        return (
                                            <Link key={index} to={item.uri} className={
                                                navIndex === item.uri ? "bg-blackCustom-700 text-grayCustom-300 hover:bg-blackCustom-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                                    : "text-grayCustom-300 hover:bg-blackCustom-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                            }
                                                onClick={() => setNavIndex(item.uri)}
                                                aria-current="page">{item.title}</Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:flex pr-16 lg:right-0 lg:inset-y-0 lg:items-center lg:pl-4 lg:pr-5">
                            <div className="mr-3 relative">
                                <div>
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="bg-grayCustom-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grayCustom-800 focus:ring-white">
                                                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div>
                                                    <div className="bg-gray-100 flex justify-between px-4 py-2 text-black">
                                                        <div>
                                                            <p className="font-semibold">Tu Cuenta</p>
                                                        </div>
                                                        <div>
                                                            <Menu.Item>
                                                                <IoMdClose size={20} />
                                                            </Menu.Item>
                                                        </div>
                                                    </div>
                                                    <div className="py-2 px-4 bg-gray-50 flex items-center">
                                                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                                        <div>
                                                            <p className="ml-3 font-semibold">Jose Issac</p>
                                                        </div>
                                                    </div>
                                                    <Menu.Item>
                                                        <div className="py-2 px-4 flex">
                                                            <AiOutlineHome size={20} />
                                                            <p className="ml-3">Portal</p>
                                                        </div>
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        <div className="py-2 px-4 flex">
                                                            <BiLogOut size={20} />
                                                            <p className="ml-3">Cerrar Sesión</p>
                                                        </div>
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="bg-grayCustom-800 p-2 rounded-full text-blackCustom-900 hover:text-blackCustom-600">
                                        <AiOutlineAppstore size={20} />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2  w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div>
                                            <div className="bg-gray-100 flex justify-between px-4 py-2 text-black">
                                                <div className="flex">
                                                    <AiOutlineAppstore size={20} />
                                                    <p className="mx-4 font-semibold">Aplicaciones</p>
                                                </div>
                                                <div>
                                                    <Menu.Item>
                                                        <IoMdClose size={20} />
                                                    </Menu.Item>
                                                </div>
                                            </div>
                                            {companies.map(function (item, index) {
                                                return (
                                                    <Menu.Item key={index}>
                                                        <div className="py-2 px-4">
                                                            <img src={item.logo} className="h-9" alt="" />
                                                        </div>
                                                    </Menu.Item>
                                                )
                                            })}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
                <Disclosure.Panel className="bg-blackCustom-900">
                    <div className="text-white">
                        {navItems.map((item, index) => (
                            <div className="w-full text-center" key={index}>
                                <hr className="opc-snall" />
                                <Link
                                    to={item.uri}
                                    className="block px-3 py-3 rounded-md text-base font-medium">
                                    {item.title}
                                </Link>
                            </div>
                        ))}
                        <hr className="w-full opc-snall" />
                        <div className="py-4 flex justify-center">
                            <div className="mr-8 relative">
                                <div>
                                <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="bg-grayCustom-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grayCustom-800 focus:ring-white">
                                                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute -right-20 sm:right-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="text-neutral-900">
                                                    <div className="bg-gray-100 flex justify-between px-4 py-2 text-black">
                                                        <div>
                                                            <p className="font-semibold">Tu Cuenta</p>
                                                        </div>
                                                        <div>
                                                            <Menu.Item>
                                                                <IoMdClose size={20} />
                                                            </Menu.Item>
                                                        </div>
                                                    </div>
                                                    <div className="py-2 px-4 bg-gray-50 flex items-center">
                                                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                                        <div>
                                                            <p className="ml-3 font-semibold">Jose Issac</p>
                                                        </div>
                                                    </div>
                                                    <Menu.Item>
                                                        <div className="py-2 px-4 flex">
                                                            <AiOutlineHome size={20} />
                                                            <p className="ml-3">Portal</p>
                                                        </div>
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        <div className="py-2 px-4 flex">
                                                            <BiLogOut size={20} />
                                                            <p className="ml-3">Cerrar Sesión</p>
                                                        </div>
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="bg-grayCustom-800 p-2 rounded-full text-blackCustom-900 hover:text-blackCustom-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grayCustom-800 focus:ring-white">
                                        <AiOutlineAppstore size={20} />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="origin-top-right absolute -right-36 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div>
                                            <div className="bg-gray-100 flex justify-between px-4 py-2 text-black">
                                                <div className="flex">
                                                    <AiOutlineAppstore size={20} />
                                                    <p className="mx-4 font-semibold">Aplicaciones</p>
                                                </div>
                                                <div>
                                                    <Menu.Item>
                                                        <IoMdClose size={20} />
                                                    </Menu.Item>
                                                </div>
                                            </div>
                                            {companies.map(function (item, index) {
                                                return (
                                                    <Menu.Item key={index}>
                                                        <div className="py-2 px-4">
                                                            <img src={item.logo} className="h-9" alt="" />
                                                        </div>
                                                    </Menu.Item>
                                                )
                                            })}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </Disclosure.Panel>
            </Disclosure>
        </nav>
    );
}

export default NavBar;