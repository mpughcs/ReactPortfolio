import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { BiLinkExternal } from 'react-icons/bi'

export default function Project({ src, Title, Description, link }) {
    const [hover, setHover] = useState(false)
    return (
        <div
            className="flex-1 basis-1/3 w-full relative hover:translate-x-1 "
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {hover && (
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-70 rounded-b-3xl p-5 z-10 ">
                    <a href={link}>
                        <BiLinkExternal className="text-2xl text-green-500" />
                    </a>
                    <h1 className="text-2xl font-bold text-white">{Title}</h1>
                    <p className="text-white">{Description}</p>
                </div>
            )}
            <div className="duration-100">
                <Image
                    src={src}
                    width={1200}
                    height={1200}
                    layout="responsive"
                    className="mx-auto rounded-3xl object-cover"
                />
            </div>
        </div>
    )
}
