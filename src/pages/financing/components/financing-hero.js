import { platino_capital_white } from "../../../assets";

function FinancingHero() {
    return (
        <div className="financingHero">
            <div className="container mx-auto">
                <div className="flex justify-center md:justify-start mx-4 py-10 md:py-14">
                    <div className="md:px-5">
                        <div className="text-center mt-10 text-white">
                            <p className="font-pop md:leading-snug text-center md:text-left font-bold text-2xl sm:text-3xl md:text-4xl mb-3 lg:w-2/3 xl:w-2/4">Financiamiento para nuestros servicios</p>
                        </div>
                        <div className="text-center">
                            <p className="text-white font-pop text-base mb-5 text-center md:text-left lg:w-2/3 xl:w-2/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in interdum lorem, quis gravida felis. Nulla facilisi. Donec quis mollis nisl. Nam at ultrices erat. Ut hendrerit sapien vel urna egestas sodales. Aliquam erat volutpat.</p>
                        </div>
                        <p className="text-white font-pop font-light mb-10 text-center lg:text-start">*Aplican restricciones.</p>
                        <div>
                            <img className="h-10 md:h-14 mx-auto lg:mx-0" src={platino_capital_white} alt="Platino Capital Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FinancingHero;