import * as React from 'react';
import Navbar from "@/app/landing/Navbar";
import Hero from "@/app/landing/Hero";
import TrdSection from "@/app/landing/TrdSection";
import ScSection from "@/app/landing/ScSection";
import MainSection from "@/app/landing/Main";
import ImgGrid from "@/app/landing/ImgGrid";
import CTA from "@/app/landing/CTA";
import VilleDiLusso from './VillediLusso';
import { images } from '../src/data';


export default function App() {
    return (
        <>
            <div className="main">
                {/* Navbar */}
                <Navbar/>
                {/* Hero Section */}
                <Hero/>
            </div>
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
            <VilleDiLusso images={images}/>
        </>
    );
}
