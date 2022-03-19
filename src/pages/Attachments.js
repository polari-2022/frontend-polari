import Header from '../components/Header/Header'
import { CameraIcon } from '@heroicons/react/solid'

export default function Attachments() {
    return (
        <>
            <Header />

            <div className="relative py-16 bg-white text-center overflow-hidden">
                <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                    <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                        <svg
                            className="absolute top-12 left-full transform translate-x-32"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-emerald-100" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                        </svg>
                        <svg
                            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-emerald-100" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                        </svg>
                        <svg
                            className="absolute bottom-12 left-full transform translate-x-32"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-emerald-100" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                        </svg>
                    </div>
                </div>
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto">
                        <h1>
                            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                What is an attachment style?
                            </span>
                        </h1>
                        <p className="mt-8 text-xl text-gray-500 leading-8">
                            Our attachment style refers to how we responded and related to our parents when we were children and how similar attachment styles tend to form in our romantic relationships as adults. This is called attachment theory.
                        </p>
                        <p className="mt-8 text-xl text-gray-500 leading-8">
                            <strong>Understanding your own attachment style can help you better understand your needs, habits and patterns in relationships, and help you learn how to communicate more effectively with a partner.</strong>
                        </p>
                    </div>
                    <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                        <p>
                            Attachment styles are divided into three distinct groups: secure, anxious, and avoidant. Research shows that around 50 percent of adults are secure, 20 percent are anxious, 25 percent are avoidant, and the remaining fall into the least common combination of both anxious and avoidant called fearful-avoidant. Below are useful quizzes we recommend to learn about yours:
                        </p>
                        <ul role="list">
                            <li><a className='text-emerald-700 hover:text-teal-500' target="_blank" rel="noreferrer" href="https://www.attachedthebook.com/wordpress/compatibility-quiz/">Attached The Book Compatibility Quiz</a></li>
                            <li><a className='text-emerald-700 hover:text-teal-500' target="_blank" rel="noreferrer" href="https://www.attachmentproject.com/attachment-style-quiz/">The Attachment Project Quiz</a></li>
                            <li><a className='text-emerald-700 hover:text-teal-500' target="_blank" rel="noreferrer" href="https://dianepooleheller.com/attachment-test/">Dr. Diane Poole Heller's Test</a></li>
                        </ul>
                        <h2>Anxious Attachment</h2>
                        <p>
                            Anxious individuals crave intimacy but are worried that their partner will not reciprocate their level of commitment and emotional connection. They tend to be hypervigilant and sensitive about their partner's mood and behavior and often seek a lot of reassurance. The anxiously attached can also be seen as "needy" at times and have a strong fear of abandonment.
                        </p>
                        <blockquote>
                            <p className='inline'>
                                If you wait a little longer before reacting and jumping to conclusions, you will have an uncanny ability to decipher the world around you and use it to your advantage.
                            </p>
                            <span className="font-normal not-italic"> - Attached.</span>
                        </blockquote>
                        <p>
                            Awareness of your needs and anxieties in a relationship can be helpful to identify and then communicate them, as well as, using self-soothing techniques and creating boundaries when needed. Be consious of putting people on a pedestal, keeping score, and protest behavior.
                        </p>
                        <figure>
                            <img
                                className="w-full rounded-lg"
                                src="https://images.unsplash.com/photo-1580341668883-c0deb557a334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt=""
                                width={1310}
                                height={873}
                            />
                            <figcaption className="mt-3 flex text-sm text-gray-500">
                                        <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                                        <span className="ml-2" ><a className='hover:text-teal-400 no-underline text-gray-500' target="_blank" rel="noreferrer" href="https://unsplash.com/@whynottogoforit">Photograph by Renate Vanaga</a> </span>
                            </figcaption>
                        </figure>
                        <h2>Avoidant Attachment</h2>
                        <p>
                            Avoidant individuals see themselves as having high levels of independence and self-sufficiency. They have a fear of being controlled by others, as well as a deep fear of rejection. They often feel they don’t need close relationships and feel uncomfortable with too much closeness, and may find ways to sabotage them when they develop. At times of conflict, they tend to run away or avoid the problem. People with avoidant attachment styles do crave intimacy but tend to push others away with negative thoughts about relationships.
                        </p>
                        <blockquote>
                            <p className='inline'>
                                De-emphasize self-reliance and focus on mutual support.
                            </p>
                            <span className="font-normal not-italic"> - Attached.</span>
                        </blockquote>
                        <p className='mb-5'>
                            Awareness of avoidant tendencies when a partner is seeking intimacy or support, changing perspectives instead looking for negatives in your partner's behavior or constantly looking for "the one", and looking inwards to identify your own needs in a relationship.
                        </p>
                    </div>
                </div>


                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                    <div className="relative sm:py-16 lg:py-0">
                        <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:left-0 lg:w-screen">
                            <div className="absolute inset-y-0 left-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
                            <svg
                                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                                width={404}
                                height={392}
                                fill="none"
                                viewBox="0 0 404 392"
                            >
                                <defs>
                                    <pattern
                                        id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-emerald-100" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                            </svg>
                        </div>
                        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                            {/* Content area */}
                            <div className="pt-12 md:pt-2 sm:pt-16 lg:pt-20">
                                <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                                    Secure Attachment
                                </h2>
                                <div className="mt-6 text-gray-500 space-y-6 prose prose-indigo prose-lg mx-auto">
                                    <p>
                                        Secure attachment styles are those where an individual feels comfortable depending on others and having others depend on them. They have a positive view of themselves and their partners. Secure individuals are comfortable with intimacy but also don't fear being on their own.
                                    </p>
                                    <blockquote>
                                        <p className="inline">
                                            People with a secure attachment style know how to communicate their own expectations and respond to their partner's needs effectively without having to resort to protest behavior.
                                        </p>
                                        <span className="font-normal not-italic"> - Attached.</span>
                                    </blockquote>
                                    <p>
                                        With this app, we hope to promote healthy relationships and better communication. Using awareness and intention, we can learn and improve our relationships with better communication, honesty, and emotional closeness.
                                    </p>
                                    <p>
                                        We hope that our app will help you find a compatible partner or friends who can grow together with you.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20 mt-10">
                        {/* Card*/}
                        <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                            <img
                                className="absolute inset-0 h-full w-full object-cover"
                                src="https://images-na.ssl-images-amazon.com/images/I/71xNjwfeuyL.jpg"
                                alt=""
                            />
                            <div className="relative px-7 mt-10">
                                {/* LOGO WITH POLARI HERE? */}
                                {/* <div>
                                    <img
                                    className="h-12"
                                    src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                                    alt="Workcation"
                                    />
                                </div> */}
                                <div className="absolute inset-0 bg-teal-800 pt-64 pb-10 shadow-xl overflow-hidden" />
                                <div className="mt-8">
                                    <div className="relative text-lg font-medium text-white md:flex-grow divide-y divide-emerald-600">

                                        <div className="text-xl font-bold text-white p-3">
                                            <h2>Recommended Read and Resource:</h2>
                                        </div>
                                        <div className="font-normal pt-3">
                                            We highly recommend the book 
                                            <p>
                                                <a className='text-teal-300 hover:text-teal-400 underline' target="_blank" rel="noreferrer" href="https://www.attachedthebook.com/wordpress/buy-the-book/">Attached: The New Science of Adult Attachment by Amir Levine, M.D. and Rachel S.F. Heller, M.A.</a> 
                                            </p>
                                            to find further insight on attachment styles.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}