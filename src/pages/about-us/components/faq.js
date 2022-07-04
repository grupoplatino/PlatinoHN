function Faq(props) {
    let data = Array.from(props.faq)
    return (
        <section className="container px-6 py-10 lg:py-32 mx-auto lg:px-10 w-full h-iso-gray">
            <div className="grid items-center justify-between grid-cols-12 gap-3">
                <div className="mb-0 md:mb-6 col-span-12 md:pb-0 md:col-span-12 lg:col-span-6">
                    <p className="text-2xl md:text-5xl">Mantén el control con <span className="font-semibold">Platino ID</span></p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <br />
                    <p className="text-xl md:text-2xl">Asegurado con <span className="font-semibold">Stripe</span></p>
                    <br />
                    <button className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md 
                text-white bg-orange-600 hover:bg-orange-700">
                        Registrarme con Platino.hn
                    </button>
                </div>
                <div className="mb-0 md:mb-6 col-span-12 md:pb-0 md:col-span-12 lg:col-span-6">
                    <div className="tabs">
                        {data.map(function (item, index) {
                            return (
                                <div key={index} className="border tab mt-3">
                                    <div className="border-l-2 border-transparent relative">
                                        <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                                        <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label">
                                            <span className="text-lg">
                                                {item.title}
                                            </span>
                                            <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 plus" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 minus" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                                </svg>
                                            </div>
                                        </header>
                                        <div className="tab-content">
                                            <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                                <p>
                                                    {item.message}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;