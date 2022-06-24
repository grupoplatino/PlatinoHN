import React from 'react';
import platino_hn from '../assets/images/phn.png';
import { AiOutlineAppstore } from 'react-icons/ai';

function NavBar() {
    return (
        <nav className="bg-blackCustom-900">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-grayCustom-400 hover:text-white hover:bg-grayCustom-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>

                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="block lg:hidden h-8 w-auto" src={platino_hn} alt="Workflow" />
                            <img className="hidden lg:block h-8 w-auto" src={platino_hn} alt="Workflow" />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a href="/#" className="bg-blackCustom-700 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Sobre Nosotros</a>

                                <a href="/#" className="text-grayCustom-300 hover:bg-blackCustom-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Compañias</a>

                                <a href="/#" className="text-grayCustom-300 hover:bg-blackCustom-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Financiamiento</a>

                                <a href="/#" className="text-grayCustom-300 hover:bg-blackCustom-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contacto</a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="mr-3 relative">
                            <div>
                                <button type="button" className="bg-grayCustom-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grayCustom-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </button>
                            </div>
                        </div>
                        <button type="button" className="bg-grayCustom-800 p-1 rounded-full text-blackCustom-400 hover:text-blackCustom-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grayCustom-800 focus:ring-white">
                            <AiOutlineAppstore size={20}/>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default NavBar;