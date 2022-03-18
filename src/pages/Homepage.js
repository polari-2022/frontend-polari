import Header from '../components/Header/Header'
import { CameraIcon } from '@heroicons/react/solid'

export default function Homepage() {
    return (
        <div>
            <Header />

            <div className="bg-white overflow-hidden">
                <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
                    <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                        <div>
                            {/* <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Case Study</h2> */}
                            <h3 className="mt-2 text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                               Philosophy
                            </h3>
                        </div>
                    </div>
                    <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="relative lg:row-start-1 lg:col-start-2">
                            <svg
                                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-emerald-100" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                            </svg>
                            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                                <figure>
                                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                        <img
                                            className="rounded-lg shadow-lg object-cover object-center"
                                            src="https://images.unsplash.com/photo-1596571316993-49bfe3ead7f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                            alt="Whitney leaning against a railing on a downtown street"
                                            width={1184}
                                            height={1376}
                                        />
                                    </div>
                                    <figcaption className="mt-3 flex text-sm text-gray-500">
                                        <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                                        <span className="ml-2" ><a className='hover:text-teal-400 no-underline text-gray-500' target="_blank" rel="noreferrer" href="https://unsplash.com/@bluespit">Photograph by Shingi Rice</a> </span>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="mt-8 lg:mt-0">
                            <div className="mt-5 prose prose-indigo text-center text-lg mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                                <p>
                                    Our app was built on the belief that our personalities and attachment styles are transformative, life-changing experiences for everyone involved. It’s about putting yourself out there and challenging you to make more authentic connections with people who care about who you really are.
                                </p>
                                <p>
                                    Aimed at users who are both curious and serious about cultivating better relationships, Polari welcomes anyone looking for personal growth from discovering more about themselves as well as improving their ability to have healthy relationships with others.
                                </p>
                                <p>
                                    We are a community focused on helping you learn to foster healthy relationships through identifying your attachment style, and matching you with people of compatible attachment styles.
                                </p>

                                <h3 className='font-bold tracking-tight text-gray-900 sm:text-4xl'>Inclusiveness</h3>
                                <p>
                                    Polari is an inclusive dating app and safe space for the LGBTQIA+ community. Our goal is to provide you with a place where you can express yourself freely, without any judgement or bias.
                                </p>
                                <p>
                                    We encourage you to discuss your attachment style with your matches to grow together as a team for all kinds of relationships, casual or serious.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}