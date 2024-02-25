import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Products from "./components/Products";
import Popup from "./components/Popup";
import Reviews from "./components/Reviews";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Process from "./components/Process";

export default function App() {
  return (
    <>
      <Header />
      <main className="p-6 md:p-10 flex flex-col gap-[5rem]">
        <Hero />
        <Products />
        <Process />
        <AboutUs />
        <Reviews />
        <Popup />
      </main>

      <Footer />
    </>
  );
}
