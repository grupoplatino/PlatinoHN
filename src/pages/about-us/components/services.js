function Services(props) {
    return (
        <section className="container px-5 py-12 mx-auto lg:px-5 w-full">
            <div className="grid items-center justify-between grid-cols-12 gap-3">
                <div className="mb-0 md:mb-6 col-span-12 md:pb-0 md:col-span-12 lg:col-span-7">
                    <p className="text-3xl text-center md:text-start">Los <span className="font-bold">productos</span> y <span className="font-bold">servicios</span> de calidad
                        que necesitas, eficientemente a tu alcance.
                    </p>
                    <br />
                    <p className="text-center md:text-start">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <br />
                    <div className="text-center mb-8 md:text-start md:mb-0">
                        <button className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md 
                            text-white bg-orange-600 hover:bg-orange-700">
                            Registro/Iniciar Sesión
                        </button>
                    </div>
                </div>
                <div className="mb-0 md:mb-6 col-span-12 md:pb-0 md:col-span-12 md:mx-auto lg:col-span-5">
                    <img className="w-100" src={props.icon} alt="Platino HN" />
                </div>
            </div>
        </section>
    );
}

export default Services;