import React from 'react';
import HashLoader from "react-spinners/HashLoader";
import { platino_white } from "../assets/index"

const Splash = () => {
    return (
        <div className="bg-blackCustom-900 h-screen flex px-5 flex-col justify-center items-center">
            <div className='mb-8'>
                <img src={platino_white} alt="Platino HN" className='w-72' />
            </div>
            <div>
            <HashLoader color='orange' height={10} width={200} />
            </div>
            <div className='mt-8 text-white'>
                Cargando por favor espere...
            </div>
        </div>
    )
}
export default Splash;