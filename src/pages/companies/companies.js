import React, { useState, useEffect } from "react";
import bg_item from "../../assets/images/categories/landing_nosotros.jpg";
import arrow_orange from "../../assets/images/icons/right_arrow_orange.svg"
import {
    platino_capital,
    platino_ferreteria,
    platino_inmobiliaria,
    platino_logistics,
    platino_motors,
    platino_repuestos,
    platino_software,
    platino_usados
} from "../../assets/index";
import ScrollToTop from "../../utils/scroll-to-top";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Companies = () => {
    const [companyIndex, setCompanyIndex] = useState(0);
    const companies = [
        {
            title: "Platino Motors",
            logo: platino_motors,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            fromColor: "from-red-600",
            toColor: "to-red-900",
            bg: bg_item
        },
        {
            title: "Platino Software",
            logo: platino_software,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            fromColor: "from-cyan-600",
            toColor: "to-cyan-900",
            bg: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            title: "Platino Capital",
            logo: platino_capital,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            fromColor: "from-emerald-600",
            toColor: "to-emerald-900",
            bg: "https://images.pexels.com/photos/11742808/pexels-photo-11742808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            title: "Platino Ferreteria",
            logo: platino_ferreteria,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            fromColor: "from-orange-400",
            toColor: "to-orange-600",
            bg: "https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            title: "Trasportes Platino",
            logo: platino_logistics,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            fromColor: "from-yellow-300",
            toColor: "to-yellow-500",
            bg: bg_item
        },
        {
            title: "Platino Makerplace",
            logo: platino_usados,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            fromColor: "from-green-600",
            toColor: "to-green-900",
            bg: "https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            title: "Platino Repuestos",
            logo: platino_repuestos,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            fromColor: "from-blue-600",
            toColor: "to-blue-900",
            bg: bg_item
        },
        {
            title: "Inmobiliaria Platino",
            logo: platino_inmobiliaria,
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            fromColor: "from-purple-600",
            toColor: "to-purple-900",
            bg: "https://images.pexels.com/photos/2111763/pexels-photo-2111763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
    ]
    useEffect(() => {
        ScrollToTop();
    }, []);
    return (
        <div>
            <div className="py-8 bg-blackCustom-900"></div>
            <div className="container mx-auto">
                <div className="flex flex-row w-full text-center overflow-x-auto py-4 2xl:justify-center">
                    {companies.map(function (item, index) {
                        return (
                            <div key={index} onClick={() => setCompanyIndex(index)}>
                                <p className={`ease-linear ${companyIndex === index ? "font-bold" : "font-semibold"}  w-max cursor-pointer transition-all duration-150 md:p-1 font-light mx-2 py-2 bg-transparent hover:font-semibold`}>
                                    {item.title}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={`py-1 bg-gradient-to-r ${`${companies[companyIndex].fromColor + " " + companies[companyIndex].toColor}`}`}></div>
            <div className="hidden lg:block">
                <img src={companies[companyIndex].bg} alt="Platno HN" className="w-screen" style={{ "height": "85vh" }} />
            </div>
            <div className="block lg:hidden">
                <img src={companies[companyIndex].bg} alt="Platno HN" className="w-screen" />
            </div>
            <div className="container mx-auto px-8 py-5 block md:block lg:hidden">
                <LazyLoadImage effect="blur" src={companies[companyIndex].logo} alt="Motors" className="mt-4" />
                <p className="my-4 leading-6">{companies[companyIndex].desc}</p>
                <button className="mb-4 mt-2 inline-flex items-center justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-orange-600 border-orange-600">
                    Visita {companies[companyIndex].title}
                    <span>
                        <img src={arrow_orange} alt="Platino HN" className="h-4 ml-2" />
                    </span>
                </button>
            </div>

            <div className="h-screen items-center absolute hidden lg:block lg:top-1/4 xl:top-1/3 left-0">
                <div className="flex justify-around items-center">
                    <div className="bg-white px-10 py-5 my-auto rounded-lg w-1/3 lg:w-2/4 xl:w-2/5 2xl:w-1/3">
                        <LazyLoadImage effect="blur" src={companies[companyIndex].logo} alt="Motors" className="mt-4 2xl:w-3/5" />
                        <p className="my-4 leading-6">{companies[companyIndex].desc}</p>
                        <button className="mb-4 mt-2 inline-flex items-center justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-orange-600 border-orange-600">
                            Visita {companies[companyIndex].title}
                            <span>
                                <img src={arrow_orange} alt="Platino HN" className="h-4 ml-2" />
                            </span>
                        </button>
                    </div>
                    <div>
                        <div className="bg-transparent">
                            <div>
                                {companies.map(function (item, index) {
                                    return (
                                        <div key={index} onClick={() => setCompanyIndex(index)} className={`cursor-pointer border ${companyIndex === index ? "bg-white" : "bg-transparent"} border-white h-2 p-1 my-6`}></div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Companies;