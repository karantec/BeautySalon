import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className="relative bg-gray-900">
            <div className="absolute inset-0">
                <Image
                    className="w-full h-full object-cover"
                    src="/hero-bg.jpg"
                    alt="Hero Background"
                    layout="fill"
                />
                <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                    Experience Unforgettable Moments: Book Your Next Event Today!
                </h1>
                <p className="mt-6 max-w-3xl text-xl text-gray-300">
                    Welcome to our event booking website, where your next unforgettable experience is just a few clicks away. Whether you're planning a wedding, corporate event, or celebration with friends, we've got you covered. Our easy-to-use platform allows you to browse and book a wide range of venues and vendors, customize your event to your unique vision, and enjoy seamless coordination from start to finish. Say goodbye to the stress of event planning and hello to a truly unforgettable experience. Book your next event with us today and let us help you make memories that will last a lifetime.
                </p>
                <div className="mt-12">
                    <a
                        className="inline-block bg-white py-3 px-6 font-bold text-lg text-gray-900 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50"
                        href="/booking"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </div>
    );
}
