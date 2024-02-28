/**
 * TrdSection component - Renders a section with an image and text 
 * describing the Luliex platform.
 */
/**
 * TrdSection component renders a section with an image 
 * and text describing the Luliex platform.
 */
import Image from "next/image";
import * as React from "react";
import FsSimage3 from "@/public/223.webp";

export default function TrdSection() {
    return (
        <>
            <section className='py-4 px-2 lg:px-28 w-full'>
                <div className='py-6 lg:py-24'>
                    <div className='flex gap-4 lg:items-center'>
                        <div
                            className='before:content-[] h-16 w-0 lg:h-0 lg:w-28 border-2 lg:border border-gold'></div>
                        <h2 className='font-serif text-2xl lg:text-5xl'>Luliex: il modo più efficace per vendere i
                            vostri immobili</h2>
                    </div>
                </div>

                <div className='w-full flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-24'>
                    <div className='lg:col-span-1 w-full'>
                        <Image src={FsSimage3} alt="hero img" height={744} width={1055}
                            className='object-cover object-center w-full h-full' />
                    </div>
                    <div className='lg:col-span-1 w-full py-12 lg:py-0'>
                        <div className='flex flex-col lg:container gap-y-8'>

                            <p className='text-normal lg:text-lg'>
                                Gli agenti immobiliari e gli operatori del settore che pubblicheranno all`&apos;`,interno della nostra piattaforma, grazie alle più efficaci strategie di comunicazione e marketing garantite da LULIEX e alle esclusive funzionalità e servizi offerti dal nostro sito, avranno la possibilità di evidenziare il proprio talento fornendo agli utenti finali una presentazione degli immobili di sicura efficacia che permetterà di implementare il numero di vendite, aumentando esponenzialmente il proprio fatturato.
                            </p>

                            <p className='text-normal lg:text-lg'>
                                Garantiamo, inoltre, attraverso delle features innovative un`&apos;`,esperienza di navigazione sul nostro sito intuitiva e performante finalizzata ad una celere individuazione degli immobili che possono essere di maggiore interesse per l’end-user.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}