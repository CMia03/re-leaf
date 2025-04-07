import React from 'react'
import Image from "next/image"
import essentialOil from "../../../../public/images/spice/essentialOil.png";

function HomeVideo() {
  return (
      <div>
          <section className='w-full h-[40em] relative'>
               <Image src={essentialOil} alt={'gg'}  className='w-full h-full object-cover '/>
                                 <i className='absolute cursor-pointer translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]'>
                                    <svg width="100" height="100" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="75" cy="75" r="75" fill="white"/>
<path d="M94.1604 77.7913C93.2044 81.4286 88.6815 83.9988 79.6329 89.1393C70.885 94.109 66.5111 96.5926 62.9875 95.5959C61.5271 95.1819 60.1985 94.3973 59.1309 93.3182C56.5417 90.7047 56.5417 85.6374 56.5417 75.5001C56.5417 65.3628 56.5417 60.2955 59.1309 57.682C60.1988 56.6039 61.5273 55.8202 62.9875 55.407C66.5111 54.4049 70.885 56.8911 79.6329 61.8609C88.6788 67.0013 93.2044 69.5715 94.1631 73.2088C94.5614 74.7104 94.5614 76.2898 94.1631 77.7913" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</i>               
          </section>
    </div>
  )
}

export default HomeVideo