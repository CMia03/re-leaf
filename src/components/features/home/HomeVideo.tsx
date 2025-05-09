'use client'
import React, { useState } from 'react'
import Image from "next/image"

function HomeVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='pt-[50px]'>
      <section className='w-full h-[40em] relative group cursor-pointer' onClick={handlePlayClick}>
        <Image 
          src="/images/Video/image.png"
          alt='Vidéo de présentation'
          width={1920}
          height={1080}
          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
          priority
        />
        
        {!isPlaying && (
          <div className='absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/30'>
            <i className='transform transition-transform duration-300 group-hover:scale-110'>
              <svg 
                width="90" 
                height="90" 
                viewBox="0 0 150 150" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-lg"
              >
                <circle 
                  cx="75" 
                  cy="75" 
                  r="75" 
                  className="fill-white/90 group-hover:fill-white"
                />
                <path 
                  d="M94.1604 77.7913C93.2044 81.4286 88.6815 83.9988 79.6329 89.1393C70.885 94.109 66.5111 96.5926 62.9875 95.5959C61.5271 95.1819 60.1985 94.3973 59.1309 93.3182C56.5417 90.7047 56.5417 85.6374 56.5417 75.5001C56.5417 65.3628 56.5417 60.2955 59.1309 57.682C60.1988 56.6039 61.5273 55.8202 62.9875 55.407C66.5111 54.4049 70.885 56.8911 79.6329 61.8609C88.6788 67.0013 93.2044 69.5715 94.1631 73.2088C94.5614 74.7104 94.5614 76.2898 94.1631 77.7913" 
                  stroke="black" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="group-hover:stroke-gray-800"
                />
              </svg>
            </i>
          </div>
        )}

        {isPlaying && (
          <div className='absolute inset-0 bg-black flex items-center justify-center'>
            <div className='relative w-full h-full'>
              <button 
                onClick={() => setIsPlaying(false)}
                className='absolute top-4 right-4 z-10 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors'
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <iframe
                className='w-full h-full'
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default HomeVideo