/**
 * Hero component that renders a hero section with text and an image.
 * Includes responsive styling for mobile vs desktop.
 */
/**
 * Hero component that renders the hero section.
 * Includes hero text and hero image.
 */
import Image from "next/image";
import HeroImage from "@/public/interior-exterior-design-luxury-pool-villa-house-home-feature-terrace-sun-bed.webp";
import * as React from "react";

export default function Hero() {
    return (
        <>
            <div
                className='flex flex-col lg:grid lg:grid-cols-2 relative gap-4 lg:gap-0 text-balance text-md h-full lg:mt-1 mb-8 box-border lg:justify-center lg:items-stretch'>

                {/* Hero Text **/}
                <div className='py-2 px-4 lg:px-0 lg:pl-28 flex flex-col gap-4 lg:gap-y-8 lg:gap-x-0 lg:z-10 lg:col-span-1 self-stretch'>

                    <div className="mb-8">
                        <p className='tracking-wide lg:text-3xl lg:leading-9'>
                            Vuoi distinguere i tuoi immobili <br></br>di lusso nel mercato elitario?
                        </p>
                    </div>
                    <div className='lg:bg-white'>
                        <h1 className='text-5xl lg:text-8xl font-serif leading-[80%]'>
                            <span className='font-semibold'>Luliex</span><br></br> lusso is a state <br></br>of mind
                        </h1>
                    </div>

                    <div>
                        <p>Per agenzie d'elite offriamo esposizione esclusiva per immobili di lusso collegandovi con
                            clienti ad alto profilo. Scoprite il fascino del lusso con noi</p>
                    </div>
                    <div className='w-full mt-4'>
                        <button
                            className='py-2 px-4 lg:px-12 border border-primary lg:w-auto uppercase text-sm lg:text-lg'>Candida
                            la tua Agenzia
                        </button>
                    </div>
                </div>

                {/* Hero Image **/}
                <div className='lg:relative right-0 top-0 lg:-z-10'>
                    <Image
                        src={HeroImage} alt="hero img" height={744} width={1055}
                        className='object-cover object-center w-full h-full' />
                </div>
            </div>
        </>
    )
}