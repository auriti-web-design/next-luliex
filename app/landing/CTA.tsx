/**
 * CTA component that renders a call to action section.
 * Includes a background image, heading, and call to action button.
*/
import Image from "next/image";
import BgCTA from "@/public/modern-house-with-garden-swimming-pool-and-wooden-2023-11-27-05-30-01-utc.webp";
import * as React from "react";

export default function CTA() {
    return (
        <>
            <section className='py-4 px-2 lg:px-28 w-full h-[910px] relative'>
                <div className='py-6 h-full'>

                    <div className='h-[650px] relative'>
                        <div className='flex flex-col relative -z-10 h-full'>
                            <Image
                                src={BgCTA} alt="hero img"
                                height={1250} width={1500}
                                className='object-cover object-fille w-full h-full' />
                        </div>
                        <div className='absolute z-10 top-0 h-full lg:p-8 flex w-full lg:w-[35%] items-center justify-center'>
                            <div
                                className="container mx-auto backdrop-blur-xl bg-[#c18e4e]/15 h-full flex flex-col lg:p-20 p-10 border-2 border-white/10 drop-shadow-2xl justify-center lg:justify-normal">

                                <h1 className='text-7xl lg:text-8xl font-serif lg:leading-none bg-gradient-to-r from-[#e9dcbf] via-[#cba56c] to-[#b37a43] inline-block text-transparent bg-clip-text drop-shadow-2xl'>
                                    <span className='font-semibold'>Luliex</span><br></br> lusso is<br></br> a
                                    state <br></br>of
                                    mind
                                </h1>


                                <div className='w-full mt-4'>
                                    <button
                                        className='border border-secondary/50 py-2 px-4 lg:px-10 bg-primary lg:w-auto uppercase text-md text-secondary lg:text-lg drop-shadow-2xl shadow-2xl'>
                                        Candida la tua Agenzia
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}