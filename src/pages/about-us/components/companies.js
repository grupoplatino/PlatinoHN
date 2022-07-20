import arrow from "../../../assets/images/icons/right_arrow.svg"
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function Companies(props) {
    let data = Array.from(props.companies)
    return (
        <section className="container mt-0 px-5 py-12 mx-auto lg:px-5 w-full md:mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* opacity-50 hover:opacity-100 */}
                {data.map(function (item, index) {
                    return (
                        <div key={index} className={`border p-4 ${item.isActive ? "": "opacity-70"}`}>
                            <div className="flex items-center">
                                <div className="mx-3">
                                    <LazyLoadImage effect="blur" className="w-100 h-20" src={item.logo} alt={item.title} />
                                </div>
                                <div className="mx-2">
                                    <p className="font-semibold">{item.title}</p>
                                    <div className="flex items-center">
                                        <p className="text-gray-600 mr-3">
                                            Visita {item.subTitle}
                                        </p>
                                        <img className="w-100 h-3" src={arrow} alt="Platino HN" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="container mx-auto mt-10 text-center">
                <button className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md 
                text-white bg-orange-600 hover:bg-orange-700">
                    Más Información
                </button>
            </div>
        </section>
    );
}

export default Companies;