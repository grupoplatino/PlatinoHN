import React from 'react';
import bg_item from '../../assets/images/categories/landing_nosotros.jpg';
import logo_motors from '../../assets/images/companies/one_line_motors.png';

const Companies = () => {
    const companies = [
        {
            title: "Platino Motors",
        },
        {
            title: "Platino Software",
        },
        {
            title: "Platino Capital",
        },
        {
            title: "Platino Ferreteria",
        },
        {
            title: "Trasportes Platino",
        },
        {
            title: "Platino Makerplace",
        },
        {
            title: "Platino Repuestos",
        },
        {
            title: "Inmobiliaria Platino",
        },
    ]
    return (
        <div>
            <div className="py-8 bg-blackCustom-900"></div>
            <div className="container mx-auto">
                <div className="flex flex-row w-full overflow-x-auto py-4 justify-center">
                    {companies.map(function (item, index) {
                        return (
                            <p key={index} className={`ease-linear ${index === 0 ? "font-bold" : "font-semibold"} transition-all duration-150 mx-1 md:p-1 font-light px-6 py-2 bg-transparent hover:font-semibold`}>
                                {item.title}
                            </p>
                        )
                    })}
                </div>
            </div>
            <div className="py-1 bg-gradient-to-r from-red-600 to-red-900"></div>
            <div>
                <img src={bg_item} alt="Platno HN" className="w-screen" />
            </div>
            <div className="bg-white px-10 py-5 absolute w-4/12 left-36 bottom-8 rounded-lg">
                <img src={logo_motors} alt="Motors" className="mt-4" />
                <p className="my-4 leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.</p>
                <button className="mb-4 mt-2 inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md 
                        text-orange-600 border-orange-600">
                    Registro/Iniciar Sesión
                </button>
            </div>
            <div className="bg-transparent flex items-center absolute w-1/12 h-3/5 right-16 bottom-5 rounded-lg">
                <div>
                <div className="cursor-pointer border bg-white border-white h-2 p-1 my-6"></div>
                <div className="cursor-pointer border border-white h-2 p-1 my-6"></div>
                <div className="cursor-pointer border border-white h-2 p-1 my-6"></div>
                <div className="cursor-pointer border border-white h-2 p-1 my-6"></div>
                <div className="cursor-pointer border border-white h-2 p-1 my-6"></div>
                <div className="cursor-pointer border border-white h-2 p-1 my-6"></div>
                <div className="cursor-pointer border border-white h-2 p-1 my-6"></div>
                <div className="cursor-pointer border border-white h-2 p-1 my-6"></div>
                </div>
            </div>
        </div>
    );
}

export default Companies;