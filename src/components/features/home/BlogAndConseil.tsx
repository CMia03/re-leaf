import React from 'react'
import { Typography } from "@/components/re-leaf/Typography";
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

import image1 from '../../../../public/images/engagements/image1.png'
import image2 from '../../../../public/images/engagements/image2.png'
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

function BlogAndConseil() {
  
    const data = [
      {
        image: image1,
        title:'fff',
        description:'fff'
      },
      {
        image: image2,
        title:'fff',
        description:'fff'
      },
    
    ]
  return (
    <div>
      <section>
        <div className="flex flex-row justify-between items-center">
              <Typography variant="h2" className="justify-center border-none rounded-none text-center">BLOG & CONSEILS</Typography>
               <Button variant="outline">
            <Typography variant="p" className="text-black">

                                  Voir tout les poivres & baies
            </Typography>

      <ChevronRight />
    </Button>
      </div>
      </section>

      {/* SECTION ARTICLE */}
      <section>
        <div className="flex flex-row justify-between items-center">
        
         {data.map((item, index) => (
          <div key={index} className='bg-red-700 flex-1'>
           <Card className="w-full mx-auto border-none shadow-none">
            <CardContent className="flex flex-col items-center text-center gap-4 p-6">
              <Image 
                src={item.image} 
                alt={item.title} 
                width={150} 
                height={150} 
                className="rounded-lg"
              />
              <Typography variant="h4" className="text-xl font-semibold">{item.title}</Typography>
              <Typography variant="p" className="text-gray-600">{item.description}</Typography>
            </CardContent>
          </Card>
          </div>
         ))}
          </div>
          
      </section>
    </div>
  )
}

export default BlogAndConseil