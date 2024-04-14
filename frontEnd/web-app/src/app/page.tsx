import React from "react";
import AboutSectionOne from "../components/About/AboutSectionOne";
import AboutSectionTwo from "../components/About/AboutSectionTwo";
import Blog from "../components/Blog/index";
import Brands from "../components/Brands/index";
import ScrollUp from "../components/Common/ScrollUp";
import Contact from "../components/Contact/index";
import Features from "../components/Features/index";
import Hero from "../components/Hero/index";
import Pricing from "../components/Pricing/index";
import Testimonials from "../components/Testimonials/index";
import Video from "../components/Video/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
