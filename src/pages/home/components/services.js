import 'react-lazy-load-image-component/src/effects/blur.css';
import { Dashboard } from '../../../assets';

const Services = () => {
    const metrics = [
        { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
        { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
        { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
        { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
    ]
    return (
        <div>
            <div className="bg-white">
                <div className="max-w-full mx-auto">
                    <div className="bg-gray-50 overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                        <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                            <div className="lg:self-center">
                                <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
                                    <span className="block">Ready to dive in?</span>
                                    <span className="block">Start your free trial today.</span>
                                </h2>
                                <p className="mt-4 text-lg leading-6 text-gray-800">
                                    Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla
                                    nec.
                                </p>
                                <a
                                    href="#"
                                    className="mt-8 bg-orange-600 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-white"
                                >
                                    Sign up for free
                                </a>
                            </div>
                        </div>
                        <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                            <img
                                className="transform translate-x-6 shadow-2xl translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                                src={Dashboard}
                                alt="App screenshot"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-blackCustom-900">
                <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
                    <div className="h-full w-full xl:grid xl:grid-cols-2">
                        <div className="h-full xl:relative xl:col-start-2">
                            <img
                                className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                                alt="People working on laptops"
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-blackCustom-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                            />
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
                    <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                        <h2 className="text-sm font-semibold text-orange-600 tracking-wide uppercase">Valuable Metrics</h2>
                        <p className="mt-3 text-3xl font-extrabold text-white">
                            Get actionable data that will help grow your business
                        </p>
                        <p className="mt-5 text-lg text-gray-300">
                            Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare
                            feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus
                            nibh integer quis. Eu vulputate diam sit tellus quis at.
                        </p>
                        <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                            {metrics.map((item) => (
                                <p key={item.id}>
                                    <span className="block text-2xl font-bold text-white">{item.stat}</span>
                                    <span className="mt-1 block text-base text-gray-300">
                                        <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                                    </span>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;