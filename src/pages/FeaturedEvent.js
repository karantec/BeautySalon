import React from 'react'
import Link from 'next/link'

const FeaturedEvent = () => {
    return (
        <>
            <div className="bg-white">
                <div className="container mx-auto px-4 py-12">
                    <h2 className="text-2xl font-bold mb-4">Featured events</h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                            <div className="bg-white border rounded-lg overflow-hidden">
                                <img src="/event1.jpg" alt="Event 1" className="w-full" />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold mb-2">Event 1</h3>
                                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <Link href="/events/1">
                                        <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block">
                                            Book now
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                            <div className="bg-white border rounded-lg overflow-hidden">
                                <img src="/event2.jpg" alt="Event 2" className="w-full" />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold mb-2">Event 2</h3>
                                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <Link href="/events/2">
                                        <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block">
                                            Book now
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                            <div className="bg-white border rounded-lg overflow-hidden">
                                <img src="/event3.jpg" alt="Event 3" className="w-full" />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold mb-2">Event 3</h3>
                                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <Link href="/events/3">
                                        <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block">
                                            Book now
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                            <div className="bg-white border rounded-lg overflow-hidden">
                                <img src="/event4.jpg" alt="Event 4" className="w-full" />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold mb-2">Event 4</h3>
                                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <Link href="/events/4">
                                        <span className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 inline-block">
                                            Book now
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedEvent