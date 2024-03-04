import * as React from 'react';
import Navbar from "@/app/landing/Navbar";
import Hero from "@/app/landing/Hero";
import TrdSection from "@/app/landing/TrdSection";
import ScSection from "@/app/landing/ScSection";
import MainSection from "@/app/landing/Main";
import ImgGrid from "@/app/landing/ImgGrid";
import CTA from "@/app/landing/CTA";
import VillediLusso from './VillediLusso';
import Home from '../page';


export default function App() {
    return (
        <>

                {/* Navbar */}
                <Navbar/>
                {/* Hero Section */}
                <Hero/>
            {/* Main Section */}
            <MainSection/>
            {/* Scd Section */}
            <ScSection/>
            {/*  Trd Section */}
            <TrdSection/>
            {/* Grid Section */}
            <ImgGrid/>
            {/* CTA */}
            <CTA/>
            {/* Ville di lusso */}
            <VillediLusso />

            <Home />
        </>
    );
}
