import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import CategoriesofEvent from './CategoriesofEvent';
import Contact from './Contact';
import HeroSection from './HeroSection';
import Mainpage from './Mainpage';
import Gallery from './Gallery';
import Body from './Body';
import Nav from './Nav';
import Map from './Map';
import TestiMonials from './TestiMonials';
import Footer from './Footer';
const index = () => {


  return (
    <>
      <Head>
        <title>Staylon BeautyParlour - Staylon</title>
        <meta name="description" content="Find and book events online" />
      </Head>

      <Nav />
      <HeroSection />
      <Body />
      <Mainpage />
      <CategoriesofEvent />
      <Gallery />
      <TestiMonials />

  
      <Contact />
       <Map/>
      <Footer />
    
    </>);
}
export default index;

