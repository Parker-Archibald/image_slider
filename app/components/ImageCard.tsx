'use client'
import Image from "next/image";

interface cardData {
    title: string;
    image: string;
    desc: string;
    alt: string;
    quote: string;
    cardNum: string;
}

const ImageCard = ({title, image, desc, alt, quote, cardNum}: cardData) => {

    return (
        <div id={cardNum} className="px-4 py-4 flex flex-col h-full w-full flex-shrink-0 snap-center">
            <div className="relative">
                <Image src={image} alt={alt} width={400} height={400} className="rounded-md h-72 w-full object-cover md:h-96" 
                onMouseEnter={() => document.getElementById(title)!.style.display = 'flex'}
                onMouseLeave={() => document.getElementById(title)!.style.display = 'none'}/>
                <p id={title} className="hidden text-white absolute bottom-0 bg-gray-100/20 h-20 text-center w-full px-4 py-2 pointer-events-none">{desc}</p>
            </div>
            <div className="text-white w-full flex justify-evenly items-center h-full">
                <p className="text-white text-lg w-3/4 text-center ">{quote}</p>
                
            </div>
        </div>
    )
}

export default ImageCard;