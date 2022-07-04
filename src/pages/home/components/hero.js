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
import {
    platino_motors,
} from '../../../assets/index';
function Hero() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
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
            alt: "Clasificados"
        },
        {
            title: "Ferreteria",
            logo: ferreteria,
            url: "https://www.grupoplatino.hn/",
            alt: "Ferreteria"
        },
        {
            title: "Financiera",
            logo: financiera,
            url: "https://www.grupoplatino.hn/",
            alt: "Financiera"
        },
        {
            title: "Marketplace",
            logo: marketplace,
            url: "https://www.grupoplatino.hn/",
            alt: "Marketplace"
        },
        {
            title: "Equipo",
            logo: motors,
            url: "https://www.grupoplatino.hn/",
            alt: "Equipo"
        },
        {
            title: "Inmobiliaria",
            logo: realestate,
            url: "https://www.grupoplatino.hn/",
            alt: "Inmobiliaria"
        },
        {
            title: "Repuestos",
            logo: repuestos,
            url: "https://www.grupoplatino.hn/",
            alt: "Repuestos"
        },
        {
            title: "Transporte",
            logo: transporte,
            url: "https://www.grupoplatino.hn/",
            alt: "Transporte"
        },
    ]
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <div>
            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                <div>
                <img className="h-screen w-screen absolute -z-20" src={financiamiento} alt="Platino HN" />
                    <div className="container h-screen w-6/12 items-center flex text-white mx-auto">
                        <div className="mb-36">
                        <img src={platino_motors} alt="Motors" className="mt-4" />
                            <div className="text-center mt-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        <div className="flex mt-4 justify-center">
                            <button className="mb-4 mt-2 mx-2 inline-flex items-center justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-white bg-gradient-to-r from-red-500 to-red-800">
                                Visitar Platino Motors
                            </button>
                            <button className="mb-4 mt-2 mx-2 inline-flex items-center justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-white border-white">
                                Más Información
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="h-screen w-screen absolute -z-20" src="https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Platino HN" />
                    <div className="container h-screen w-6/12 items-center flex text-white mx-auto">
                        <div className="mb-36">
                        <img src={platino_motors} alt="Motors" className="mt-4" />
                            <div className="text-center mt-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        <div className="flex mt-4 justify-center">
                            <button className="mb-4 mt-2 mx-2 inline-flex items-center justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-white bg-gradient-to-r from-red-500 to-red-800">
                                Visitar Platino Motors
                            </button>
                            <button className="mb-4 mt-2 mx-2 inline-flex items-center justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-white border-white">
                                Más Información
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="h-screen w-screen absolute -z-20" src={financiamiento} alt="Platino HN" />
                    <div className="container h-screen w-6/12 items-center flex text-white mx-auto">
                        <div className="mb-36">
                        <img src={platino_motors} alt="Motors" className="mt-4" />
                            <div className="text-center mt-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        <div className="flex mt-4 justify-center">
                            <button className="mb-4 mt-2 mx-2 inline-flex items-center justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-white bg-gradient-to-r from-red-500 to-red-800">
                                Visitar Platino Motors
                            </button>
                            <button className="mb-4 mt-2 mx-2 inline-flex items-center justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-white border-white">
                                Más Información
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="h-screen w-screen absolute -z-20" src="https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Platino HN" />
                    <div className="container h-screen w-6/12 items-center flex text-white mx-auto">
                        <div className="mb-36">
                        <img src={platino_motors} alt="Motors" className="mt-4" />
                            <div className="text-center mt-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        <div className="flex mt-4 justify-center">
                            <button className="mb-4 mt-2 mx-2 inline-flex items-center justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-white bg-gradient-to-r from-red-500 to-red-800">
                                Visitar Platino Motors
                            </button>
                            <button className="mb-4 mt-2 mx-2 inline-flex items-center justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-white border-white">
                                Más Información
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="h-screen w-screen absolute -z-20" src={financiamiento} alt="Platino HN" />
                    <div className="container h-screen w-6/12 items-center flex text-white mx-auto">
                        <div className="mb-36">
                        <img src={platino_motors} alt="Motors" className="mt-4" />
                            <div className="text-center mt-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        <div className="flex mt-4 justify-center">
                            <button className="mb-4 mt-2 mx-2 inline-flex items-center justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-white bg-gradient-to-r from-red-500 to-red-800">
                                Visitar Platino Motors
                            </button>
                            <button className="mb-4 mt-2 mx-2 inline-flex items-center justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-white border-white">
                                Más Información
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="h-screen w-screen absolute -z-20" src="https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Platino HN" />
                    <div className="container h-screen w-6/12 items-center flex text-white mx-auto">
                        <div className="mb-36">
                        <img src={platino_motors} alt="Motors" className="mt-4" />
                            <div className="text-center mt-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        <div className="flex mt-4 justify-center">
                            <button className="mb-4 mt-2 mx-2 inline-flex items-center justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-white bg-gradient-to-r from-red-500 to-red-800">
                                Visitar Platino Motors
                            </button>
                            <button className="mb-4 mt-2 mx-2 inline-flex items-center justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-white border-white">
                                Más Información
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="h-screen w-screen absolute -z-20" src={financiamiento} alt="Platino HN" />
                    <div className="container h-screen w-6/12 items-center flex text-white mx-auto">
                        <div className="mb-36">
                        <img src={platino_motors} alt="Motors" className="mt-4" />
                            <div className="text-center mt-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        <div className="flex mt-4 justify-center">
                            <button className="mb-4 mt-2 mx-2 inline-flex items-center justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-white bg-gradient-to-r from-red-500 to-red-800">
                                Visitar Platino Motors
                            </button>
                            <button className="mb-4 mt-2 mx-2 inline-flex items-center justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-white border-white">
                                Más Información
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="h-screen w-screen absolute -z-20" src="https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Platino HN" />
                    <div className="container h-screen w-6/12 items-center flex text-white mx-auto">
                        <div className="mb-36">
                        <img src={platino_motors} alt="Motors" className="mt-4" />
                            <div className="text-center mt-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        <div className="flex mt-4 justify-center">
                            <button className="mb-4 mt-2 mx-2 inline-flex items-center justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-white bg-gradient-to-r from-red-500 to-red-800">
                                Visitar Platino Motors
                            </button>
                            <button className="mb-4 mt-2 mx-2 inline-flex items-center justify-center py-3 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-white border-white">
                                Más Información
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
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