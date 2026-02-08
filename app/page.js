"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import GrainOverlay from "@/components/GrainOverlay";
import ProgressBar from "@/components/ProgressBar";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marque";
import StatsSection from "@/components/Stats";
import Products from "@/components/Products";
import WhyUs from "@/components/Why";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <GrainOverlay />
      <ProgressBar />
      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>
      <Navbar />
      <Hero />
      <Marquee />
      <StatsSection />
      <Products />
      <WhyUs />
      <Process />
      <Testimonials />
      <Gallery />
      <CTA />
      <Footer />
    </>
  );
}
