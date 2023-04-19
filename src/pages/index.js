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
      <Footer />
      {/* <BookingPage /> */}
    </>);
}
export default index;

