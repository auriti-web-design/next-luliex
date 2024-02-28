/**
 * ScSection component - Renders a section with content and image 
 * for the "Choose Luliex: choose luxury" page section.
 * 
 * Contains title, paragraphs, and Image component with image asset.
 * Uses responsive Tailwind CSS classes for layout.
 */
/**
 * ScSection component renders a section with title, text content 
 * and an image. It is used to display a section with content
 * on the landing page.
 */
import Image from "next/image";
import FsSimage2 from "@/public/2793.webp";
import * as React from "react";

export default function ScSection() {
    return (
        <>
            <section className='py-4 px-2 lg:px-28 w-full'>
                <div className='py-6 lg:py-24'>
                    <div className='flex gap-4 lg:items-center'>
                        <div
                            className='before:content-[] h-16 w-0 lg:h-0 lg:w-28 border-2 lg:border border-gold'></div>
                        <h2 className='font-serif text-2xl lg:text-5xl'>Scegliere Luliex: scegliere il lusso</h2>
                    </div>
                </div>

                <div className='w-full flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-24'>
                    <div className='lg:col-span-1 w-full py-12 lg:py-0'>
                        <div className='flex flex-col  gap-y-8'>

                            <p className='text-normal lg:text-lg'>
                                Sfruttando un’esperienza ultra decennale nel settore del lusso garantiamo a tutte le agenzie immobiliari, che si candideranno attraverso il form sottostante e saranno accuratamente selezionate dal nostro team, l’esclusiva possibilità di dare visibilità ai propri annunci all’interno della nostra piattaforma.
                            </p>

                            <p className='text-normal lg:text-lg'>
                                Pubblicare in LIULEX significa accedere ad un bacino di investitori straordinari, scelti con cura e finanziariamente solidi, che vi permetterà di abbattere notevolmente i tempi di vendita e soprattutto, grazie alla nostra grandissima esperienza nel mercato nazionale e internazionale, cambierete il vostro modo di fare intermediazione immobiliare.
                            </p>

                        </div>
                    </div>
                    {/* Img 2 */}
                    <div className='lg:col-span-1 w-full'>
                        <Image src={FsSimage2} alt="hero img" height={744} width={1055}
                            className='object-cover object-center w-full h-full' />
                    </div>
                </div>
            </section>
        </>
    )
}