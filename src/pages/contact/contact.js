import React from "react";
// import { OpenNewTabIcon, LinkedinIcon } from "../../assets/index"

function Contact() {
    // const openInNewTab = url => {
    //     window.open(url, "_blank", "noopener,noreferrer");
    // };

    return (
        <div>
            <div className="bg-blackCustom-900 py-3"></div>
            {/* <section className="container mx-auto">
                <div className="grid grid-cols-2">
                    <div className="flex flex-col py-12 px-5 items-center justify-center">
                        <div className="flex p-2 mb-2 space-x-6">
                            <a href="https://www.linkedin.com/company/grupo-empresarial-platino-hn/" target="_blank" rel="noreferrer" className="flex text-black items-end space-x-1 hover:text-gray-500">
                                <img src={LinkedinIcon} alt="linkeding icon" />
                                <span className="text-3xl font-pop font-semibold">Linkedin</span>
                            </a>
                        </div>
                        <div className="flex justify-center w-full">
                            <p className="text-base font-light font-pop text-gray-400 text-center">
                                Buscanos en nuestra red social oficial y encuentra nuestras plazas disponibles.
                            </p>
                        </div>
                        <div className="pt-10">
                            <button type="button" onClick={() => openInNewTab("https://www.linkedin.com/company/grupo-empresarial-platino-hn/mycompany/")} className="text-white font-pop bg-blue-700 w-full rounded-3xl pr-6 pl-6 focus:ring-4 
                                    focus:outline-none focus:ring-blue-300  border-none font-medium text-sm px-5 py-4 sm:py-2 text-center mr-2 mb-2">
                                <div className="flex justify-center">
                                    <p>Aplica a tu trabajo ideal...</p>
                                    <img className="h-5 md:h-4 ml-2" src={OpenNewTabIcon} alt="Cotizar" />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.grupoplatino.hn/static/media/DSC_0815.079b73e7.png" className="w-4/6 mx-auto" />
                    </div>
                </div>
            </section> */}
        </div>
    );
}

export default Contact;