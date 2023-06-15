import React from 'react'
import { Zap } from 'react-feather';
import { Camera } from 'react-feather';
import { Aperture } from "react-feather"
import { Edit } from "react-feather"
import { Feather } from "react-feather";
import { Play } from "react-feather";

const Mainpage = () => {
  return (

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto shadow-lg">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center ">
          <h1 className="sm:text-3xl text-2xl  title-font mb-2 text-gray-900 text-bold font-bold uppercase font-serif  ">We Provide you the best services</h1>
          <p className="lg:w-1/2 w-full leading-relaxed font-bold font-serif text-black font-serif">At a cheaper and valuable Price</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Zap />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Hair Services</h2>
              <p className="leading-relaxed text-base font-serif text-black">Hair Cut and Styling, Hair coloring and highlights,Hair treatments ,Hair extensions and wig styling</p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Camera />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Skin Care Services</h2>
              <p className="leading-relaxed text-base font-serif text-black">Facials,Skin treatments,Chemical peels,Microdermabrasion,Skin rejuvenation,
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex font-serif items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Aperture />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Nail Services</h2>
              <p className="leading-relaxed text-base font-serif text-black">Manicures ,Pedicures,Nail extensions and overlays,Nail art and designs,Nail repairs and maintenance
  </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Edit />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Makeup  & HairStyling</h2>
              <p className="leading-relaxed text-base font-serif text-black">Bridal makeup,Party and event makeup,Special effects makeup,
              Makeup lessons and tutorials,Airbrush makeup</p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Feather />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Body Treatement</h2>
              <p className="leading-relaxed text-base font-serif text-black">Massages ,Body wraps and scrubs,Waxing and threading,Laser hair removal,
              Spray tanning</p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Play />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Spa Services</h2>
              <p className="leading-relaxed text-base font-serif text-black"> Full body massages,Hot stone massages,Aromatherapy massages,Spa facials,
              Body scrubs and wraps</p>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}

export default Mainpage;