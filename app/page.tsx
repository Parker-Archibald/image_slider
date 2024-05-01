'use client'
import ImageCard from "./components/ImageCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";
import { CardState } from "./atoms/CardState";

const cardData = [
  {
    title: 'coding',
    image: '/images/coding.jpg',
    desc: "Amazing how coding works, isn't it?", 
    alt: '',
    quote: 'Coding is pretty awesome!'
  }, {
    title: 'Nature',
    image: '/images/nature.jpg',
    desc: "There is nothing like getting out into nature.", 
    alt: '',
    quote: 'Nature is so amazing!'
  }, {
    title: 'Dog',
    image: '/images/dog.jpg',
    desc: "Pugs are so cute!", 
    alt: '',
    quote: 'Dogs are truly mans best friend!'
  }
]

export default function Home() {

  const [cardNum, setCardNum] = useRecoilState(CardState)

  const nextCard = () => {
    if(cardNum + 1 === cardData.length) {
      setCardNum(0)
      document.getElementById(`${0}`)?.scrollIntoView({behavior: "smooth"})
    }
    else {
      setCardNum(cardNum + 1)
      document.getElementById(`${cardNum + 1}`)?.scrollIntoView({behavior: "smooth"})
    }
  }

  const previousCard = () => {
    if(cardNum === 0) {
      setCardNum(cardData.length - 1)
      document.getElementById(`${cardData.length - 1}`)?.scrollIntoView({behavior: "smooth"})
    }
    else {
      setCardNum(cardNum - 1)
      document.getElementById(`${cardNum - 1}`)?.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
      <main className="w-screen h-screen bg-gray-900 flex items-center justify-center relative">

        <div className="w-[90%] h-1/2 bg-gray-800 rounded-lg flex overflow-x-scroll scrollbar-hide snap-mandatory snap-x max-w-4xl md:h-3/4">
          {cardData.map((card, index) => (
            <ImageCard key={index} cardNum={`${index}`} title={card.title} image={card.image} desc={card.desc} alt={card.alt} quote={card.quote}/>
          ))}
          
        </div>

        <div className="absolute bottom-1/3 w-full flex text-white px-8 max-w-4xl">
          <div className="w-1/2">
            <ChevronLeftIcon className="w-10 cursor-pointer" onClick={previousCard}/>
          </div>
          <div className="w-1/2 flex justify-end">
            <ChevronRightIcon className="w-10 cursor-pointer" onClick={nextCard}/>
          </div>
        </div>

        <div className="absolute bottom-[28%] flex space-x-2 md:bottom-[20%]">
          {cardData.map((card, index) => (
            <div className={`h-2 rounded-full ${cardNum === index ? 'bg-cyan-400 w-6' : 'bg-gray-100 w-2'} transition-all duration-500 ease-in-out`}></div>
          ))}
        </div>
        
        </main>
  );
}
