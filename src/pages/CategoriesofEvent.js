import React from 'react'
import Link from 'next/link';

const CategoriesofEvent = () => {
    return (
        <>
      
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold mb-4 text-center uppercase">Categories of Services</h2>
                <div className="flex flex-wrap -mx-4 justify-around ">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
                        <div className="bg-white border rounded-lg overflow-hidden drop-shadow-xl  ">
                            <img src="https://booksy.com/l/wp-content/uploads/2022/01/2274-e1641986301391-995x777.jpg" alt="Category 1" className="w-full" />
                            <div className="p-4 shadow-lg">
                                <h3 className="text-lg font-bold mb-2 text-center">Hair Services</h3>
                                <p className='text-sm mb-3 font-serif'>Beauty parlours offer various haircut options for both men and women. They have trained hairstylists who can provide advice on suitable hairstyles based on face shape, hair texture, and personal preferences.</p>
                                <Link href="/events?category=1">
                                <span className="text-blue-900    rounded mt-4 inline-block ">
                                      Learn More

                                    </span>
                                    
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
                        <div className="bg-white border rounded-lg overflow-hidden drop-shadow-xl">
                            <img src="https://content.jdmagicbox.com/comp/kurukshetra/s9/9999p1744.1744.180904030534.r9s9/catalogue/harman-beauty-parlour-and-skin-care-ladwa-kurukshetra-beauty-parlours-mfcs1gg5rc.jpg" alt="Category 2" className="w-full" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2 text-center " >Skin Care Services</h3>
                                <p className='text-sm mb-3 font-serif'>  Skin care services are a vital component of beauty parlour offerings, focusing on improving and maintaining the health and appearance of the skin. Here's an overview of common skin care services provided at beauty parlours</p>
                                <Link href="/events?category=2">
                                <span className="text-blue-900    rounded mt-4 inline-block ">
                                        Learn More
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
                        <div className="bg-white border rounded-lg overflow-hidden drop-shadow-xl">
                      
                            <img src="https://cucumbabeautysalon.com/wp-content/uploads/2021/10/imahe-800-3.jpg" alt="Category 3" className="w-full" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2 text-center">Nail Care Services</h3>
                                <p className="text-sm mb-3 font-serif"> Pedicures are similar to manicures but focus on the care and beautification of the feet and toenails. During a pedicure, the feet are soaked in warm water, exfoliated, and moisturized. The toenails are trimmed, shaped, and buffed, and the cuticles are groomed. </p>
                                <Link href="/events?category=3">
                                <span className="text-blue-900    rounded mt-4 inline-block ">
                                        Learn More
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
                        <div className="bg-white border rounded-lg overflow-hidden drop-shadow-xl">
                            <img src="https://5.imimg.com/data5/GI/HB/DI/SELLER-54443168/wedding-bridal-makeup-service-500x500.png" alt="Category 4" className="w-full" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2 text-center">MakeUp Services</h3>
                                <p className="text-sm mb-3 font-serif">Bridal makeup is one of the most sought-after makeup services. Beauty parlours offer specialized bridal makeup packages designed to create a stunning and long-lasting look for the bride on her wedding day. Bridal makeup artists .
                                </p>
                                <Link href="/events?category=4">
                                <span className="text-blue-900    rounded mt-4 inline-block ">
                                        Learn More
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
                        <div className="bg-white border rounded-lg overflow-hidden drop-shadow-xl">
                            <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Category 5" className="w-full" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2 text-bold">Body Treatment </h3>
                                <p className="text-sm mb-3 font-serif">Body treatments are a popular category of services offered at beauty parlours, focusing on the pampering and rejuvenation of the body.Massages are a staple body treatment offered at beauty parlours. Skilled massage therapists use various techniques to relax the body, relieve muscle tension.</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoriesofEvent