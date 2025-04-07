import React from 'react'
const bgNwsletter = '/images/newsletter/BackgroundNwsLttrImage.png';
import { Typography } from "@/components/re-leaf/Typography";

const HomeNewslatter = () => {
return (
    <div>
        <section
            className="w-full h-80"
            style={{ backgroundImage: `url(${bgNwsletter})`, backgroundSize: 'cover' }}
        >
            <figure className="bg-[var(--bg-primary-releaf-overlay)] w-full h-full">
                <div className="flex flex-col gap-8 items-center justify-center h-full">
                <div className="flex flex-col gap-3 items-center">
                    
            <Typography variant="h1" className='text-white font-medium'>NEWSLETTER</Typography>
                     <Typography variant="p" className='text-white w-[55%] text-center'>
                        Tenez-vous informé(e) de l&apos;actualité et des événements des Jardins
                        de ReLeaf en vous abonnant à notre newsletter.
                    </Typography>
                </div>

                <div className="flex flex-col items-center">
                    <form>
                        <div className='flex flex-row'>
                            <input
                                type="email"
                                placeholder="Votre adresse Email"
                                className="border p-2 px-7  rounded-l-full text-white"
                            />
                            <button
                                type="submit"
                                className="bg-white text-white cursor-pointer rounded-r-full text-[var(--color-primary-releaf)] px-7 py-2"
                            >
                                S’abonner
                            </button>
                            </div>
                    </form>
                    </div>
                </div>
            </figure>
        </section>
    </div>
);
}

export default HomeNewslatter