import React from 'react'
import Link from 'next/link';

const CategoriesofEvent = () => {
    return (
        <>
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold mb-4">Categories of events</h2>
                <div className="flex flex-wrap -mx-4 justify-around">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
                        <div className="bg-white border rounded-lg overflow-hidden">
                            <img src="/wedding.jpg" alt="Category 1" className="w-full" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Wedding</h3>
                                <Link href="/events?category=1">
                                    <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block">
                                        Book Now
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
                        <div className="bg-white border rounded-lg overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1515982200576-f29f11444503?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="Category 2" className="w-full" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Corporate Event</h3>
                                <Link href="/events?category=2">
                                    <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block">
                                        Book Now
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
                        <div className="bg-white border rounded-lg overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Category 3" className="w-full" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Private Party</h3>
                                <Link href="/events?category=3">
                                    <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block">
                                        Book Now
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
                        <div className="bg-white border rounded-lg overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Category 4" className="w-full" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Category 4</h3>
                                <Link href="/events?category=4">
                                    <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block">
                                        View events
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
                        <div className="bg-white border rounded-lg overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Category 5" className="w-full" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Category 5</h3>
                                <Link href="/events?category=5">
                                    <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block">
                                        View events
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoriesofEvent