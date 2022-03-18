import { useState } from "react";
import { Navigate } from 'react-router-dom';

const categories = [
    {
        name: 'Anxious Attachment',
        style: 'anxious',
        imageSrc: 'https://images.unsplash.com/photo-1592806088932-05058af0ad8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        //   imageSrc: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        imageAlt: 'Anxious',
        p1: "You are hypervigilant of your partner's mood and can sense when their behavior changes.",
        p2: 'Have a strong fear of abandonment and spend a lot of emotional energy worrying about your partner.',
        p3: 'You seek out intimacy and reassurance from your partner and may be seen as needy or clingy.',
    },
    {
        name: 'Secure Attachment',
        style: 'secure',
        imageSrc: 'https://images.unsplash.com/photo-1574740601012-f6f25029b347?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        //   imageSrc: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        imageAlt: 'Secure',
        p1: 'You are comfortable depending on others but also feel comfortable alone.',
        p2: 'Are able to communicate your needs and boundaries effectively.',
        p3: 'You feel safe in a relationship and are willing to adapt and resolve conflicts with your partner.',
    },
    {
        name: 'Avoidant Attachment',
        style: 'avoidant',
        imageSrc: 'https://images.unsplash.com/photo-1564750335004-4c9ee48e9ba8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
        imageAlt: 'Avoidant',
        p1: 'You have a high level of independence and fear being controlled by others.',
        p2: "You don't feel comfortable with too much closeness and have a hard time expressing your feelings.",
        p3: "You avoid conflict and often feel like others are too needy or clingy.",
    },
]

export default function Learn() {
    const [attachment, setAttachment] = useState('');
    console.log("attachment", attachment)

    const handleFormSubmit = async (event) => {
        event.preventDefault();
      
        // pass in selected attachment to profile??
        <Navigate to="/profile" attachment={attachment} />;
    };

    return (
        <div className="bg-white">
            <div className="max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Step 1: Pick your Attachment Style</h2>
                <p className="mt-4 text-base text-gray-500">
                    Choose which one sounds like you. For more detailed information and quizzes: <a rel="noreferrer" target="_blank" href='/attachment-styles' className="text-base font-bold text-teal-700 underline hover:text-teal-500">
                        Attachment Styles
                    </a>
                </p>
                <form onSubmit={handleFormSubmit}>
                    <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                        {categories.map((category) => (
                            <button key={category.name} onClick={() => setAttachment(category.style)} className="group block border border-transparent rounded-md focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-emerald-500">
                                <div
                                    aria-hidden="true"
                                    className="aspect-w-3 aspect-h-3 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-4 sm:aspect-w-4 sm:aspect-h-3"
                                >
                                    <img
                                        src={category.imageSrc}
                                        alt={category.imageAlt}
                                        className="w-full h-full object-bottom object-cover"
                                    />
                                </div>
                                <h3 className="mt-4 text-base font-semibold text-gray-900">{category.name}</h3>
                                <p className="mt-2 text-sm text-gray-500">{category.p1}</p>
                                <p className="mt-2 text-sm text-gray-500">{category.p2}</p>
                                <p className="mt-2 text-sm text-gray-500">{category.p3}</p>
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-1/5 flex justify-center mt-10 py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        >
                            Next Step
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
