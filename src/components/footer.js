import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import grupo_platino from '../assets/images/Grupo_Platino.png';
import platino_capital from '../assets/images/logo_capital_white.svg';
import platino_ferreteria from '../assets/images/logo_ferreteria_white.svg';
import platino_usados from '../assets/images/logo_usados_white.svg';
import platino_repuestos from '../assets/images/logo_repuestos_white.svg';
import platino_logistics from '../assets/images/logo_logistics_white.svg';
import platino_software from '../assets/images/logo_software_white.svg';
import platino_inmobiliaria from '../assets/images/logo_imobiliaria_white.svg';
import { ImFacebook2 } from 'react-icons/im';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaInstagramSquare, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


function Footer() {
  const listItems = [
    {
      logo: platino_capital,
      url: "https://www.grupoplatino.hn/",
      alt: ""
    },
    {
      logo: platino_ferreteria,
      url: "https://www.grupoplatino.hn/",
      alt: ""
    },
    {
      logo: platino_usados,
      url: "https://www.grupoplatino.hn/",
      alt: ""
    },
    {
      logo: platino_repuestos,
      url: "https://www.grupoplatino.hn/",
      alt: ""
    },
    {
      logo: platino_logistics,
      url: "https://www.grupoplatino.hn/",
      alt: ""
    },
    {
      logo: platino_software,
      url: "https://www.grupoplatino.hn/",
      alt: ""
    },
    {
      logo: platino_inmobiliaria,
      url: "https://www.grupoplatino.hn/",
      alt: ""
    },
  ]
  return (
    <footer className="bg-blackCustom-900">
      <div className="container px-5 py-12 mx-auto lg:px-5">
        <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
          <div className="grid items-center grid-cols-12 gap-3">
            <div className="mb-0 md:mb-6 col-span-12 md:pb-0 md:col-span-5">
              <p className="text-white text-3xl font-semibold">Contáctanos</p>
              <p className="text-white my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex py-2 text-white">
                <MdEmail size={20} className="mr-2" color="white" />

                <span className="ml-3">
                  email@email.com
                </span>
              </div>
              <div className="flex py-2 text-white">
                <FaPhoneAlt size={20} className="mr-2" color="white" />

                <span className="ml-3">
                  +504 3312-3312
                </span>
              </div>
              <div className="flex py-2 text-white">
                <FaMapMarkerAlt size={20} className="mr-2" color="white" />
                <span className="ml-3">
                  San Pedro Sula, Cortés, Honduras
                </span>
              </div>
              <div className="flex">
                <ImFacebook2 size={20} className="mr-4 my-4" color="white" />
                <IoLogoWhatsapp size={22} className="mr-4 my-4" color="white" />
                <FaInstagramSquare size={20} className="mr-4 my-4" color="white" />
              </div>
            </div>
            <div className="col-span-12 text-center md:text-left md:col-span-7">
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-0 md:px-4 lg:px-6 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="first-name" className="text-start block mb-2 text-sm font-medium text-white">
                            First name
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="First name"
                            autoComplete="given-name"
                            className="py-1 px-2 bg-transparent pt-2 border block w-full shadow-sm sm:text-sm border-gray-300"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="last-name" className="text-start block mb-2 text-sm font-medium text-white">
                            Last name
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            placeholder="Last name"
                            autoComplete="family-name"
                            className="py-1 px-2 bg-transparent pt-2 border block w-full shadow-sm sm:text-sm border-gray-300"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="email-address" className="text-start block mb-2 text-sm font-medium text-white">
                            Email address
                          </label>
                          <input
                            type="text"
                            name="email-address"
                            id="email-address"
                            placeholder="Email"
                            autoComplete="email"
                            className="py-1 px-2 bg-transparent pt-2 border block w-full shadow-sm sm:text-sm border-gray-300"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="phone-number" className="text-start block mb-2 text-sm font-medium text-white">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            name="phone-number"
                            id="phone-number"
                            placeholder="Phone Number"
                            autoComplete="phone-number"
                            className="py-1 px-2 bg-transparent pt-2 border block w-full shadow-sm sm:text-sm border-gray-300"
                          />
                        </div>

                        <div className="col-span-6">
                          <label htmlFor="message" className="text-start block mb-2 text-sm font-medium text-white">
                            Message
                          </label>
                          <textarea
                            type="text"
                            name="message"
                            rows={4}
                            id="message"
                            placeholder="Message"
                            autoComplete="message"
                            className="py-1 px-2 bg-transparent text-white pt-2 border block w-full shadow-sm sm:text-sm border-gray-300"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-4 pt-1 mb-8 text-left sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Enviar Mensaje
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <br />
        <div class="flex justify-center w-full">
          <div className="flex flex-col">
            <div className="mx-auto">
              <LazyLoadImage effect="blur" src={grupo_platino} width="180" className="p-2" />
            </div>
            <p className="text-white text-center text-lg font-semibold">¿Quieres formar parte de nuestro equipo?</p>
            <div className="w-full flex justify-center">
              <button
                type="button"
                className="mb-6 mt-4 px-4 py-3 border text-white outline-none font-semibold focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex">
                <span className="ml-2">Ver Oportunidades Laborales</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="w-full px-5 py-5">
          <div className="text-center">
            <div>
              <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
                {listItems.map(function (item, index) {
                  return (
                    <div key={index}>
                      <a href={item.url} target="text">
                        <img className="h-24 object-contain md:object-scale-down mx-2 lg:h-14 xl:h-24 2xl:h-32"
                          src={item.logo}
                          alt={item.alt} />
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <br />
        <div className="px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-16">
          <div className="flex justify-center flex-wrap items-baseline lg:justify-center">
            <span className="mt-2 text-center md:text-start text-sm font-light text-gray-500">Copyright © 2022
              <a href="/#" className="mx-2 hover:text-gray-500" rel="noopener noreferrer">
                Distribuidora Platino.
              </a>
              Todos los derechos reservados.
            </span>
          </div>
          <div className="flex justify-center flex-wrap items-baseline lg:justify-center">
            <span className="mt-2 text-sm font-light text-gray-500">Platino Software</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;