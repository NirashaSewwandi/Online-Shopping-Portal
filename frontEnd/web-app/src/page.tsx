import React from "react";
import AboutSectionOne from "./About/AboutSectionOne.tsx";
import AboutSectionTwo from "./About/AboutSectionTwo.tsx";
import Blog from "./Blog/index.tsx";
import Brands from "./Brands/index.tsx";
import ScrollUp from "./Common/ScrollUp.tsx";
import Contact from "./Contact/index.tsx";
import Features from "./Features/index.tsx";
import Hero from "./Hero/index.tsx";
import Pricing from "./Pricing/index.tsx";
import Testimonials from "./Testimonials/index.tsx";
import Video from "./Video/index.tsx";
import Header from "./Header/index.tsx";

// import { Metadata } from "next";

export const Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Header />
      <ScrollUp />
      <Hero />
      {/* <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
