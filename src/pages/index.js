import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import BrowseEvents from './BrowseEvents';
import CategoriesofEvent from './CategoriesofEvent';
import Contact from './Contact';
import HeroSection from './HeroSection';
import BookingPage from './Booking';
import FeaturedEvent from './FeaturedEvent';
import Mainpage from './Mainpage';
import Gallery from './Gallery';
import Body from './Body';
import Nav from './Nav';
import TestiMonials from './TestiMonials';
import Footer from './Footer';
const index = () => {


  return (
    <>
      <Head>
        <title>Event Booking Website - Home</title>
        <meta name="description" content="Find and book events online" />
      </Head>

      <Nav />
      <HeroSection />
      <Body />
      <Mainpage />
      <CategoriesofEvent />
      <Gallery />
      <TestiMonials />
      {/*<FeaturedEvent />*/}
      {/* <BrowseEvents /> */}
      <Contact />
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.2811099104774!2d86.14943017528877!3d23.66590307872815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4234692532021%3A0x526797e09e88bd48!2sCity%20centre%20sector%204!5e0!3m2!1sen!2sin!4v1684479098847!5m2!1sen!2sin"
    width="600" height="450" style="border:0;" allowfullscreen=""
    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <Footer />
      {/* <BookingPage /> */}
    </>);
}
export default index;

