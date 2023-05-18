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
        <script  type="text/javascript">  var config = {    phone :"9798316854",    call :"Message Us", 
                                                        position :"ww-right",    size : "ww-normal",    text : "",    type: "ww-standard",    brand: "",    subtitle: "",    welcome: ""  };  var proto = document.location.protocol, host = "cloudfront.net", url = proto + "//d3kzab8jj16n2f." + host;    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true; s.src = url + "/v2/main.js";    s.onload = function () { tmWidgetInit(config) };    
var x = document.getElementsByTagName("script")[0]; x.parentNode.insertBefore(s, x);</script>0
      <Footer />
      {/* <BookingPage /> */}
    </>);
}
export default index;

