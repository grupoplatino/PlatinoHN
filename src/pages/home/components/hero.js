import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import clasificados from '../../../assets/images/categories/clasificados.svg';
import ferreteria from '../../../assets/images/categories/ferreteriia.svg';
import financiera from '../../../assets/images/categories/financiera.svg';
import marketplace from '../../../assets/images/categories/marketplace.svg';
import motors from '../../../assets/images/categories/motors.svg';
import realestate from '../../../assets/images/categories/realestate.svg';
import repuestos from '../../../assets/images/categories/repuestos.svg';
import transporte from '../../../assets/images/categories/transporte.svg';
import financiamiento from '../../../assets/images/categories/sany.jpeg';
import bg_item from '../../../assets/images/categories/landing_nosotros.jpg';

import {
    platino_capital_white_letter,
    platino_ferreteria_white_letter,
    platino_inmobiliaria_white_letter,
    platino_logistics_white_letter,
    platino_motors_white_letter,
    platino_repuestos_white_letter,
    platino_software_white_letter,
    platino_usados_white_letter
} from '../../../assets/index';
function Hero() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    console.log(nav1);
    console.log(nav2);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const categories = [
        {
            title: "Clasificados",
            logo: clasificados,
            url: "https://www.grupoplatino.hn/",
            alt: "Clasificados",
            company: "Platino Usados",
            logo_company: platino_usados_white_letter,
            bg_company: bg_item,
            desc_company: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            fromColor: "from-green-600",
            toColor: "to-green-900"
        },
        {
            title: "Ferreteria",
            logo: ferreteria,
            url: "https://www.grupoplatino.hn/",
            alt: "Ferreteria",
            company: "Platino Ferreteria",
            logo_company: platino_ferreteria_white_letter,
            bg_company: financiamiento,
            desc_company: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            fromColor: "from-orange-400",
            toColor: "to-orange-600"
        },
        {
            title: "Financiera",
            logo: financiera,
            url: "https://www.grupoplatino.hn/",
            alt: "Financiera",
            company: "Platino Capital",
            logo_company: platino_capital_white_letter,
            bg_company: financiamiento,
            desc_company: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            fromColor: "from-emerald-600",
            toColor: "to-emerald-900"
        },
        {
            title: "Sofware",
            logo: marketplace,
            url: "https://www.grupoplatino.hn/",
            alt: "Sofware",
            company: "Platino Software",
            logo_company: platino_software_white_letter,
            bg_company: financiamiento,
            desc_company: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            fromColor: "from-cyan-600",
            toColor: "to-cyan-900"
        },
        {
            title: "Equipo",
            logo: motors,
            url: "https://www.grupoplatino.hn/",
            alt: "Equipo",
            company: "Platino Motors",
            logo_company: platino_motors_white_letter,
            bg_company: financiamiento,
            desc_company: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            fromColor: "from-red-600",
            toColor: "to-red-900"
        },
        {
            title: "Inmobiliaria",
            logo: realestate,
            url: "https://www.grupoplatino.hn/",
            alt: "Inmobiliaria",
            company: "Inmobiliaria Platino",
            logo_company: platino_inmobiliaria_white_letter,
            bg_company: financiamiento,
            desc_company: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            fromColor: "from-purple-600",
            toColor: "to-purple-900"
        },
        {
            title: "Repuestos",
            logo: repuestos,
            url: "https://www.grupoplatino.hn/",
            alt: "Repuestos",
            company: "Platino Repeuestos",
            logo_company: platino_repuestos_white_letter,
            bg_company: financiamiento,
            desc_company: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            fromColor: "from-cyan-600",
            toColor: "to-cyan-900"
        },
        {
            title: "Transporte",
            logo: transporte,
            url: "https://www.grupoplatino.hn/",
            alt: "Transporte",
            company: "Transporte Platino",
            logo_company: platino_logistics_white_letter,
            bg_company: financiamiento,
            desc_company: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            fromColor: "from-yellow-300",
            toColor: "to-yellow-500"
        },
    ]
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <div>
            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                {categories.map(function (item, index) {
                    return (
                        <div key={index}>
                            <div>
                                <img className="h-screen w-screen absolute -z-20" src={item.bg_company} alt="Platino HN" />
                            </div>
                            <div className="container h-screen w-6/12 items-center flex text-white mx-auto">
                                <div className="mb-36">
                                    <img src={item.logo_company} alt="Motors" className="mt-4" />
                                    <div className="text-center mt-6">
                                        <p>{item.desc_company}</p>
                                    </div>
                                    <div className="flex mt-4 justify-center">
                                        <button className={`mb-4 mt-2 mx-2 inline-flex items-center justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md 
                            text-white bg-gradient-to-r ${item.fromColor + " " + item.toColor}`}>
                                            Visitar {item.company}
                                        </button>
                                        <button className="mb-4 mt-2 mx-2 inline-flex items-center justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md 
                            text-white border-white">
                                            Más Información
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
            <div className="container absolute bottom-10 left-0 right-0 mx-auto px-5 py-5">
                <div className="text-center">
                    <div className="px-5">
                        <Slider asNavFor={nav1} focusOnSelect={true}
                            ref={(slider2) => setNav2(slider2)} {...settings} className="w-full">
                            {categories.map(function (item, index) {
                                return (
                                    <div className="text-center" key={index}>
                                        <img className="h-24 w-20 mx-auto"
                                            src={item.logo}
                                            alt={item.alt} />
                                        <p className="text-white font-semibold mt-2">
                                            {item.title}
                                        </p>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;