import Image from "next/image";
import logo from "@/public/next.svg";
import * as React from "react";

export default function Navbar() {
    return (
        <>
            {/* Header */}
            <div className="py-6 px-2 lg:px-28">
                <div className='bg-white lg:px-2'>
                    <Image src={logo} width={120} height={20} alt=""/>
                </div>
            </div>
        </>
    )
}