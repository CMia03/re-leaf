import React from 'react'
import Image from "next/image"
import essentialOil from "../../../../public/images/spice/essentialOil.png";

function HomeTestimonial() {
  return (
      <div>
          <section>
              <div className='flex flex-row justify-between'>
                  <picture>
                                  <Image src={essentialOil} alt={'gg'} width={307} height={373} />
                      
                  </picture>
                  <picture>
                      <div className='flex flex-col items-center'>
                                  <Image src={essentialOil} alt={'gg'} width={307} height={373} />
                          <h1>&quot;Lorem ipsum dolor sit amet este, consecte adipiscing elit, sed do eiusmod tempor incid&quot;</h1>
                          <p>Anna Maria Loren</p>
                      </div>
                  </picture>
              </div>
          </section>

          {/* SECTION LOGO */}
          <section>
              <div className='flex flex-row justify-between'>
                                  <Image src={essentialOil} alt={'gg'} width={150} height={150} />
                                  <Image src={essentialOil} alt={'gg'} width={150} height={150} />
                                  <Image src={essentialOil} alt={'gg'} width={150} height={150} />
                                  <Image src={essentialOil} alt={'gg'} width={150} height={150} />
                  
              </div>
          </section>
    </div>
  )
}

export default HomeTestimonial