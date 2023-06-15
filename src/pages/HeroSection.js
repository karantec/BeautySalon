import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className="relative bg-gray-900">
            <div className="absolute inset-0">
                <Image
                    className="w-full h-full object-cover"
                    src="/salon.jpg"
                    alt="Hero Background"
                    layout="fill"
                />
                <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-serif">
                Discover Your Beauty Oasis: Unwind and Transform at Our Exquisite Beauty Salon.
                
                </h1>
                <p className="mt-6 max-w-3xl text-xl text-gray-300 font-serif">
               <span> Experience Luxurious Treatments and Unleash Your Inner Radiance.Escape to Tranquility: Soothing Massages and Body Treatments</span>
                </p>
                
            </div>
        </div>
    );
}
