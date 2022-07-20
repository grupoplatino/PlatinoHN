import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  logo_grupo_platino,
  platino_capital_white,
  platino_ferreteria_white,
  platino_inmobiliaria_white,
  platino_logistics_white,
  platino_motors_white,
  platino_repuestos_white,
  platino_software_white,
  platino_usados_white
} from "../assets/index";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import arrow_white from "../assets/images/icons/right_arrow_white.svg"

function Footer() {
  const listItems = [
    {
      logo: platino_capital_white,
      url: "https://www.grupoplatino.hn/",
      alt: ""
    },
    {
      logo: platino_ferreteria_white,
      url: "https://www.grupoplatino.hn/",
      alt: ""
    },
    {
      logo: platino_usados_white,
      url: "https://www.grupoplatino.hn/",
      alt: ""
    },
    {
      logo: platino_repuestos_white,
      url: "https://www.grupoplatino.hn/",
      alt: ""
    },
    {
      logo: platino_logistics_white,
      url: "https://www.grupoplatino.hn/",
      alt: ""
    },
    {
      logo: platino_software_white,
      url: "https://www.grupoplatino.hn/",
      alt: ""
    },
    {
      logo: platino_inmobiliaria_white,
      url: "https://www.grupoplatino.hn/",
      alt: ""
    },
    {
      logo: platino_motors_white,
      url: "https://www.grupoplatino.hn/",
      alt: ""
    },
  ]
  return (
    <footer className="bg-blackCustom-900">
      <div className="container px-5 py-12 mx-auto lg:px-5">
        <div className="container mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
          <div className="grid items-center grid-cols-12 gap-3">
            <div className="mb-0 md:mb-6 col-span-12 md:pb-0 md:col-span-12 lg:col-span-5">
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
            <div className="col-span-12 text-center md:text-left md:col-span-12 lg:col-span-7">
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form>
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="py-5">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label className="text-start block mb-2 text-sm font-medium text-white">
                            Nombre
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="FNombre"
                            autoComplete="given-name"
                            className="py-3 text-white px-4 bg-transparent border block w-full shadow-sm sm:text-sm border-gray-300"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label className="text-start block mb-2 text-sm font-medium text-white">
                            Apellido
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            placeholder="Apellido"
                            autoComplete="family-name"
                            className="py-3 text-white px-4 bg-transparent border block w-full shadow-sm sm:text-sm border-gray-300"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label className="text-start block mb-2 text-sm font-medium text-white">
                            Correo electrónico
                          </label>
                          <input
                            type="text"
                            name="email-address"
                            id="email-address"
                            placeholder="Correo electrónico"
                            autoComplete="email"
                            className="py-3 text-white px-4 bg-transparent border block w-full shadow-sm sm:text-sm border-gray-300"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label className="text-start block mb-2 text-sm font-medium text-white">
                            Número de teléfono
                          </label>
                          <div className="flex">
                          <input
                            type="text"
                            name="phone-number"
                            id="phone-number"
                            placeholder="+504"
                            autoComplete="phone-number"
                            className="py-3 w-20 mr-2 text-white px-4 bg-transparent border block shadow-sm sm:text-sm border-gray-300"
                          />
                          <input
                            type="text"
                            name="phone-number"
                            id="phone-number"
                            placeholder="0000-0000"
                            autoComplete="phone-number"
                            className="py-3 text-white px-4 bg-transparent border block w-full shadow-sm sm:text-sm border-gray-300"
                          />
                          </div>
                        </div>

                        <div className="col-span-6">
                          <label className="text-start block mb-2 text-sm font-medium text-white">
                            Mensaje
                          </label>
                          <textarea
                            type="text"
                            name="message"
                            rows={4}
                            id="message"
                            placeholder="Mensaje"
                            autoComplete="message"
                            className="py-1 text-white px-4 bg-transparent pt-2 border block w-full shadow-sm sm:text-sm border-gray-300"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pt-1 mb-8 text-center md:text-left">
                      <button
                        type="submit"
                        className="py-4 md:py-3 px-20 md:px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none"
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
        <div className="flex justify-center w-full">
          <div className="flex flex-col">
            <div className="mx-auto">
              <LazyLoadImage effect="blur" src={logo_grupo_platino} width="250" className="p-2" />
            </div>
            <p className="text-white text-center text-2xl md:text-lg font-semibold">¿Quieres formar parte de nuestro equipo?</p>
            <div className="w-full flex justify-center items-center">
              <button
                type="button"
                className="mb-6 mt-4 px-4 py-3 border text-white outline-none font-semibold focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex">
                <span className="mr-1">Ver Oportunidades Laborales</span>
                <span>
                <img src={arrow_white} alt="Platino HN" className="h-4 ml-2 mt-1"/>
                </span>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="w-full px-5 py-5">
          <div className="md:text-center">
            <div>
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {listItems.map(function (item, index) {
                  return (
                    <div key={index}>
                      <a href={item.url} target="text">
                        <LazyLoadImage effect="blur" className="h-10 object-contain mx-2"
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