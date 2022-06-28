import React, { useState } from "react";
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

function Hero() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    const settings = {
        asNavFor: nav1,
        ref: (slider2) => setNav2(slider2),
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,
        focusOnSelect: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
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
    return (
        <div>
            <div className="static h-100">
                <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                    <div>
                    <img className="object-cover" src={financiamiento} alt="Platino HN"/>
                    </div>
                </Slider>
            </div>
            <div className="container absolute bottom-10 left-0 right-0 mx-auto px-5 py-5">
                <div className="text-center">
                    <div className="mx-auto">
                        <Slider asNavFor={nav1}
                            ref={(slider2) => setNav2(slider2)}
                            slidesToShow={8}
                            swipeToSlide={true}
                            focusOnSelect={true}>
                            {categories.map(function (item, index) {
                                return (
                                    <div className="text-center" key={index}>
                                        <img className="h-24 w-20 mx-auto"
                                            src={item.logo}
                                            alt={item.alt} />
                                        <p className="text-white font-semibold">
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