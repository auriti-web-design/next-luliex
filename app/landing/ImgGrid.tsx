/**
 * Image grid component that displays a grid of image tiles 
 * with captions. Uses CSS grid layout and relative/absolute 
 * positioning to overlay captions on images.
 * 
 * Displays 6 images in responsive grid columns.
 */
import Image from "next/image";
import VilleDiLusso from "@/public/ville_di_lusso.webp";
import Hotel from "@/public/hotel.jpg";
import Cantine from "@/public/cantine_vitivinicole.webp";
import Resort from "@/public/2793.webp";
import Dimore from "@/public/dimore_storiche.webp";
import Chalet from "@/public/chalet.webp";
import * as React from "react";

export default function ImgGrid() {
    return (
        <section className='py-4 px-2 lg:px-28 w-full'>
            <div className='py-6 lg:py-24'>
                <div className='flex gap-4 lg:items-stretch'>
                    <div className='lg:grid lg:grid-cols-12 lg:gap-8 w-full flex flex-col gap-6 items-stretch'>
                        {/* col-3 */}
                        <div className='lg:col-span-3 w-full relative self-auto'>
                            <div className='flex flex-col  relative -z-10 h-full'>
                                <Image
                                    src={VilleDiLusso}
                                    alt="hero img"
                                    height={120}
                                    width={1280}
                                    className='object-cover w-full h-full' />
                            </div>
                            <div className='lg:container absolute z-10 top-0 h-full lg:py-8'>
                                <h3 className='font-serif text-4xl m-4 lg:m-0 font-semibold'>
                                    Ville di Lusso
                                </h3>
                            </div>
                        </div>
                        {/* col-7 */}
                        <div className='lg:col-span-9 h-[650px] relative'>
                            <div className='flex flex-col  relative -z-10 h-full'>
                                <Image
                                    src={Hotel}
                                    alt="hero img"
                                    height={2000}
                                    width={2000}
                                    className='object-cover object-fille w-full h-full'
                                />
                            </div>
                            <div
                                className='lg:container absolute z-10 top-0 h-full lg:py-8'>
                                <h3
                                    className='font-serif text-4xl m-4 lg:m-0 font-semibold'>
                                    Hotel
                                </h3>
                            </div>
                        </div>

                        {/* col-7 */}
                        <div className='lg:col-span-9 h-[650px] relative'>
                            <div className='flex flex-col  relative -z-10 h-full'>
                                <Image
                                    src={Cantine} alt="hero img"
                                    height={2000} width={2000}
                                    className='object-cover object-fille w-full h-full' />
                            </div>
                            <div className='lg:container absolute z-10 top-0 h-full lg:py-8'>
                                <h3
                                    className='font-serif text-4xl m-4 lg:m-0 font-semibold w-1/2'
                                >
                                    Catine Vitivinicole
                                </h3>
                            </div>
                        </div>
                        {/* col-3 */}
                        <div className='lg:col-span-3 w-full relative self-auto'>
                            <div className='flex flex-col  relative -z-10 h-full'>
                                <Image
                                    src={Resort}
                                    alt="hero img"
                                    height={3000}
                                    width={3000}
                                    className='object-cover w-full h-full' />
                            </div>
                            <div className='lg:container absolute z-10 top-0 h-full lg:py-8'>
                                <h3 className='font-serif text-4xl m-4 lg:m-0 font-semibold'>Resort</h3>
                            </div>
                        </div>
                        {/* col-3 */}
                        <div className='lg:col-span-3 w-full relative self-auto'>
                            <div className='flex flex-col  relative -z-10 h-full'>
                                <Image
                                    src={Dimore}
                                    alt="hero img"
                                    height={120}
                                    width={1280}
                                    className='object-cover w-full h-full' />
                            </div>
                            <div className='lg:container absolute z-10 top-0 h-full lg:py-8'>
                                <h3 className='font-serif text-4xl m-4 lg:m-0 font-semibold w-1/2'>Dimore storiche</h3>
                            </div>
                        </div>

                        {/* col-7 */}
                        <div className='lg:col-span-9 h-[650px] relative'>
                            <div className='flex flex-col  relative -z-10 h-full'>
                                <Image
                                    src={Chalet} alt="hero img"
                                    height={1250} width={1500}
                                    className='object-cover object-fille w-full h-full' />
                            </div>
                            <div className='lg:container absolute z-10 top-0 h-full lg:py-8'>
                                <h3 className='font-serif text-4xl m-4 lg:m-0 font-semibold'>Chalet</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}