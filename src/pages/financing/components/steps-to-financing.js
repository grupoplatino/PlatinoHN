import { DownArrow, RightArrowBlack } from "../../../assets";

function StepsToFinancing() {
    return (
        <div className="bg-white py-5 md:py-10 md:px-5">
            <div className="container mx-auto">
                <div className="flex flex-wrap mx-2 my-5 justify-center md:justify-start">
                    <div className="flex justify-center md:justify-start">
                        <p className="font-pop text-center font-bold text-black text-xl md:text-2xl">¡Inicia tu Solicitud ahora!</p>
                    </div>
                </div>
                <div className="flex mx-4 my-2 justify-center">
                    <div className="grid grow grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-2">
                        <div className="rounded-xl border relative border-lightPlaceHolder bg-white py-4 md:py-10 my-1 px-4">
                            <div className="flex justify-start mb-2">
                                <p className="text-primary mr-2 font-pop font-semibold">1.</p>
                                <p className="font-pop text-black">Identificación</p>
                            </div>
                            <div className="flex">
                                <p className="font-pop leading-4 font-light">Consulta nuestros servicios disponibles.</p>
                                <div className="absolute invisible sm:visible  -right-3 lg:top-14">
                                    <div className="pt-3 sm:pt-1 flex justify-center">
                                        <img src={RightArrowBlack} className="h-4 z-10 sm:h-6" alt="arrow icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center sm:hidden">
                                <div className="po absolute pt-3 flex justify-center">
                                    <img src={DownArrow} className="h-4 z-10" alt="arrow icon" />
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl border relative border-lightPlaceHolder md:py-10  bg-white py-4 my-1 px-4">
                            <div className="flex justify-start mb-2">
                                <p className="text-primary mr-2 font-pop font-semibold">2.</p>
                                <p className="font-pop text-black">Selección</p>
                            </div>
                            <div className="flex">
                                <p className="font-pop leading-4 font-light">Elije el plan que se adapte mejor a tus necesidades.</p>
                                <div className="absolute invisible sm:visible -right-3 lg:top-14">
                                    <div className="pt-3 sm:pt-1 flex justify-center">
                                        <img src={RightArrowBlack} className="h-4 z-10 sm:h-6" alt="arrow icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center sm:hidden">
                                <div className="po absolute pt-3 flex justify-center">
                                    <img src={DownArrow} className="h-4 z-10" alt="arrow icon" />
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl border relative border-lightPlaceHolder md:py-10 bg-white py-4 my-1 px-4">
                            <div className="flex justify-start mb-2">
                                <p className="text-primary mr-2 font-pop font-semibold">3.</p>
                                <p className="font-pop text-black">Registro</p>
                            </div>
                            <div className="flex">
                                <p className="font-pop leading-4 font-light">Completa la solicitud electronica del plan que elegiste.</p>
                                <div className="absolute invisible sm:visible -right-3 lg:top-14">
                                    <div className="pt-3 sm:pt-1 flex justify-center">
                                        <img src={RightArrowBlack} className="h-4 z-10 sm:h-6" alt="arrow icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center sm:hidden">
                                <div className="po absolute pt-3 flex justify-center">
                                    <img src={DownArrow} className="h-4 z-10" alt="arrow icon" />
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl border relative md:py-10 border-lightPlaceHolder bg-white py-4 my-1 px-4">
                            <div className="flex justify-start mb-2">
                                <p className="text-primary mr-2 font-pop font-semibold">4.</p>
                                <p className="font-pop text-black">Validación</p>
                            </div>
                            <div className="flex">
                                <p className="font-pop leading-4 font-light">Nuestro departamento de Financiamiento evaluará tu solicitud.</p>
                                <div className="absolute invisible sm:visible -right-3 lg:top-14">
                                    <div className="pt-3 sm:pt-1 flex justify-center">
                                        <img src={RightArrowBlack} className="h-4 sm:h-6" alt="arrow icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center sm:hidden">
                                <div className="po absolute pt-3 flex justify-center">
                                    <img src={DownArrow} className="h-4 z-10" alt="arrow icon" />
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl border border-lightPlaceHolder md:py-10 bg-white py-4 my-1 px-4">
                            <div className="flex justify-start mb-2">
                                <p className="text-primary mr-2 font-pop font-semibold">5.</p>
                                <p className="font-pop text-black">Adquisición</p>
                            </div>
                            <div>
                                <p className="font-pop leading-4 font-light">Si tu solicitud fue aprovada, adquiere tu servicio.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center my-8 md:mb-0">
                    <button className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md 
                            text-white bg-orange-600 hover:bg-orange-700">
                        Registro/Iniciar Sesión
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StepsToFinancing;