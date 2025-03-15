import React from 'react'
import HeroCard from './HeroCard'
import PeopleIcon from '@mui/icons-material/People';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const heroCardData = [
    {
        title: "Unifying Communities",
        about: "Communion bridges diverse religious communities",
        Icon: PeopleIcon
    },
    {
        title: "Innovative and Fun",
        about: "Experience faith in a fresh way through our interactive features and engaging events",
        Icon: EmojiEmotionsIcon
    },
    {
        title: "Promoting Unity",
        about: "We foster understanding and harmony between different faith communities through various events",
        Icon: TrendingUpIcon
    },
]

function Hero() {
  return (
    <section className='bg-[#111]'>
      <div className='text-white max-w-5xl mx-auto py-10 px-4'>
        <h1 className='text-center text-3xl font-Lato font-semibold'>Why Communion Rocks!</h1>
        <div className='mt-20 flex flex-col lg:flex-row gap-9 text-sm font-Rubik'>
            <p className='lg:w-[1100px] leading-7'>Communion is not just another platform—it's a vibrant space that unites diverse faiths, beliefs, and traditions. By promoting collaboration and connection, we're fostering a world where differences become strengths and unity becomes the norm.</p>
            {heroCardData.map((item, index) => {
                return <HeroCard key={index} title={item.title} about={item.about} Icon={item.Icon}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Hero
