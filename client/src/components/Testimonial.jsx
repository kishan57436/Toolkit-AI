// import { assets } from "../assets/assets"

// const Testimonial = () => {
//     const dummyTestimonialData = [
//         {
//             image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
//             name: 'John Doe',
//             title: 'Marketing Director, TechCorp',
//             content: 'ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.',
//             rating: 4,
//         },
//         {
//             image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
//             name: 'Jane Smith',
//             title: 'Content Creator, TechCorp',
//             content: 'ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.',
//             rating: 5,
//         },
//         {
//             image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
//             name: 'David Lee',
//             title: 'Content Writer, TechCorp',
//             content: 'ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.',
//             rating: 4,
//         },
//     ]

//     return (
//         <div className='px-4 sm:px-20 xl:px-32 py-24'>
//             <div className='text-center'>
//                 <h2 className='text-slate-700 text-[42px] font-semibold'>Loved by Creators</h2>
//                 <p className='text-gray-500 max-w-lg mx-auto'>Don't just take our word for it. Here's what our users are saying.</p>
//             </div>
//             <div className='flex flex-wrap mt-10 justify-center'>
//                 {dummyTestimonialData.map((testimonial, index) => (
//                     <div key={index} className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer'>
//                         <div className="flex items-center gap-1">
//                             {Array(5).fill(0).map((_, index)=> (<img key={index} src={index < testimonial.rating ? assets.star_icon : assets.star_dull_icon} className='w-4 h-4' alt="star"/>))}
//                         </div>
//                         <p className='text-gray-500 text-sm my-5'>"{testimonial.content}"</p>
//                         <hr className='mb-5 border-gray-300' />
//                         <div className='flex items-center gap-4'>
//                             <img src={testimonial.image} className='w-12 object-contain rounded-full' alt='' />
//                             <div className='text-sm text-gray-600'>
//                                 <h3 className='font-medium'>{testimonial.name}</h3>
//                                 <p className='text-xs text-gray-500'>{testimonial.title}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Testimonial

import { assets } from "../assets/assets";

const Testimonial = () => {
    const dummyTestimonialData = [
        {
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
            name: 'John Doe',
            title: 'Marketing Director, TechCorp',
            content: 'ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.',
            rating: 4,
        },
        {
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
            name: 'Jane Smith',
            title: 'Content Creator, TechCorp',
            content: 'ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.',
            rating: 5,
        },
        {
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
            name: 'David Lee',
            title: 'Content Writer, TechCorp',
            content: 'ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.',
            rating: 4,
        },
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Loved by Creators</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our users are saying.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dummyTestimonialData.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition duration-300"
                        >
                            <div className="flex items-center gap-1 mb-4">
                                {Array(5)
                                    .fill(0)
                                    .map((_, starIndex) => (
                                        <img
                                            key={starIndex}
                                            src={starIndex < testimonial.rating ? assets.star_icon : assets.star_dull_icon}
                                            className='w-4 h-4'
                                            alt="star"
                                        />
                                    ))}
                            </div>
                            <p className="text-gray-600 text-sm mb-6">"{testimonial.content}"</p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    className='w-12 h-12 object-cover rounded-full border border-gray-200'
                                    alt={testimonial.name}
                                />
                                <div className='text-sm'>
                                    <h3 className='font-semibold text-gray-900'>{testimonial.name}</h3>
                                    <p className='text-xs text-gray-500'>{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;