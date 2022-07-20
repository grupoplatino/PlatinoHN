function NewsLetters() {
  return (
    <>
      <div className="bg-blackCustom-900">
        <div className="container mx-auto pt-12 px-4 sm:px-6 lg:pt-16 lg:px-8 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:items-center">
          <div className="lg:grid-cols-1 xl:col-span-2">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl" id="newsletter-headline">
              Suscribete
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
              Suscribete y recibe notificaciones de cada una de las novedades de nuestra plataforma, mantente actualizado sobre nuestros productos y servicios.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-1">
            <form className="grid grid-cols-1 sm:grid-cols-2 lg:justify-end">
              <div className="">
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                  placeholder="Ingresa tu correo"
                />
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                >
                  Notificame
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-gray-300">
              Nos preocupamos por la protección de tus datos. Lea nuestra{" "}
              <a href="/#" className="text-white font-medium underline">
                Politica de privacidad.
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetters;