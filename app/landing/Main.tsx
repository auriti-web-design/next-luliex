import Image from "next/image";
import FsSimage from "@/public/375.webp";
import * as React from "react";

export default function MainSection() {
    return (
        <>
            <section className='py-4 px-2 lg:px-28 w-full'>
                <div className='py-6 lg:py-24'>
                    <div className='flex gap-4 lg:items-center'>
                        <div
                            className='before:content-[] h-16 w-0 lg:h-0 lg:w-28 border-2 lg:border border-gold'></div>
                        <h2 className='font-serif text-2xl lg:text-5xl'>Luliex: la più esclusiva selezione di <br
                            className='hidden lg:block'></br>immobili di lusso in italia e nel mondo</h2>
                    </div>
                </div>

                <div className='w-full flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-24'>
                    <div className='lg:col-span-1 w-full'>
                        <Image src={FsSimage} alt="hero img" height={744} width={1055}
                               className='object-cover object-center w-full h-full'/>
                    </div>
                    <div className='lg:col-span-1 w-full py-12 lg:py-0'>
                        <div className='flex flex-col lg:container gap-y-8'>

                            <p className='text-normal lg:text-lg'>
                                Luliex è una straordinaria piattaforma che offre, solo ad agenzie altamente qualificate e referenziate, la possibilità di vendere immobili di pregio a end-user e investitori nazionali, internazionali e fondi d’investimento. Gli asset che saranno presenti all’interno del portale sono ville di lusso, hotel, resort, cantine vitivinicole e dimore storiche.

                            </p>

                            <p className='text-normal lg:text-lg'>
                                Il nostro obiettivo è quello di mettere in correlazione le più importanti agenzie operanti nel settore dell'immobiliare di lusso nel mondo con coloro che cercano una meravigliosa dimora in cui vivere o una proprietà in cui investire, offrendo la possibilità di relazionarsi con personale altamente qualificato e in grado di soddisfare le richieste di tutti gli stakeholders.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}