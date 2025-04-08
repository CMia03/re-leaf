import React from 'react'
const bgNwsletter = '/images/newsletter/BackgroundNwsLttrImage.png';
import { Typography } from "@/components/re-leaf/Typography";

// import { useTranslations } from "next-intl";


const HomeNewslatter = () => {
    // const t = useTranslations("home")

    return (
        <div>
            <section>
                <div className='flex flex-row justify-around items-center bg-[#F8F8F8] p-10'>
                    <picture className='flex flex-row items-center gap-2'>
                        <i className='flex flex-row items-center'>
                            <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect width="37" height="32" fill="url(#pattern0_32_121)" />
                                <defs>
                                    <pattern id="pattern0_32_121" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_32_121" transform="scale(0.0135135 0.015625)" />
                                    </pattern>
                                    <image id="image0_32_121" width="74" height="64" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABACAYAAAC9S+EXAAADj0lEQVR4Ae2ajXHUMBBGVQIlUAIdQAl0AB2QDqAD6AA6gA6gA9JB0gF0APcYf3Mb2bLk0+psktWMZ22dLH37Vn/2OaVIQSAIBIEgEASCQBAIAkEgCASBIBAEgkAQCAJBIAgEgSAQBIJAEAgCQeBREXiWUvqaUvpzwONXSunjUWh/OSCgPGhvjwCLqCHsx0nMh4Md95M2grl7UvSAdLRE8BTE3bUFqMYQBKj/BBQT9ffCofkTWyqT57OCs5K7p717lOYh6fCwr90pma3BXpP5i5NTpdVWqx62VCbPvxkBiToVwb1Arfml3oYdktjN5mO3dP1kQb0yvUQQWuyT61E/J1C/T301H79L14I4AhSrz8uOQ75gqee51/hjqZXjrZOayo8AJUfVhofthkX0tO9glWhNEj8C1K0JnNrpsYySblA4KhHMU61J94wARfDQcukh0Fjq6IZEBXL4WyuhqZzuGwFqo5RZcfftAUu/HN5KXfc9elB0yR5ne+6ddQHnjK4exXPMe3PcGVBsNO1vLed7gGLuatEm37C18jwKPUhyzNtec+ixdfHWP3vMUQNsAfix91B91wTFPNqim+0A+rC18rP36t6Oedf3oPt3XgAHfdjNydsx7/o2O7RyQ4BagWN/ClCWxsp5gFqBY38aDsq+3pjtL6wSs0yPWPWsjq1PDMgcBgoxn43zmqjZsL3JAOlSZTxBERz7WKU20LHlxf8QUIjTaxYJyy3iibJNKuMFyr4TU925JZgtyR0UPclC4r96IsdzIML1bwaCc5FywgOUfe6k3k+TBvLZjWsDyW8tLxbdQdkvUpa6Nr2I1y+CgnAl5XmA0rMZQJbmRnToHROBzXu3NMm6gqIxObv21QflFFEiraR7e0EBRnWt9RZbbvbYIVGTdQElUdbanpK1+e9SDdt7RpzXVjgFrLVtG9glvxbz1hqpgbJDtFXkJeUWhZvMLQHD3xp4U/X5FBgMEx3QljO1rqx/Rbb8Ra12atYGYWl+Ontw1guwWr0XQbKN2XP1MkCUEpO8gK7NIaX7a/k4pPr5oqSUAKNySwtP6T6XfNv40mcv9EJtH4BaW20uFWV7FW8k8/TOQGL12yVp2SVaQAGYvkFQBLEjo2hXVtpiu4AO9m4a9uQTrNrwHAYRkXavZOFI3EhIcowhaIOW62B+3A2SRGIZZgwBJkq9LmZOGjXcbNv2nIWFwAFNOsi7io6/VaHt0IvQQHwAAAAASUVORK5CYII=" />
                                </defs>
                            </svg>

                        </i>
                        <p>Livraison rapide</p>
                    </picture>
                    <picture className='flex flex-row items-center gap-2'>
                        <i className='flex flex-row items-center'>
                            <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg"xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect x="0.333374" width="37" height="32" fill="url(#pattern0_32_126)" />
                                <defs>
                                    <pattern id="pattern0_32_126" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_32_126" transform="scale(0.0135135 0.015625)" />
                                    </pattern>
                                    <image id="image0_32_126" width="74" height="64" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABACAYAAAC9S+EXAAADeElEQVR4Ae1bi43VMBB0CZRACXQAJdABdMB1ACXQAdcBdAAdQAd3HRwdgEbKRL5NvP7sxsk9raXIie2d3ZlnO46Tl1KkUCAUCAVCgVAgFAgFQoFQIBQIBUKBUCAUCAVmKfAtpfTv5OPjLLKjfu5OFij/gd6Mkjja7nVK6WkR6n2nM7QHyV/C7l2hXDR7dvl1sfn9rPRCFz+XAH8MxERyX4TtiFCvUkqPSywST8DPv+SQ+5tSQqC9CT0JPQrC5GlEKNjTDpiXGYKWIUdROLdIkUlYDknaaTl76WWGoGXI5b/+nx3WFqEuNQQxB6A3jA45aMNhe+8sVP4jnDoEMfY5ZHrvcrkmmPyBA8FksvQoYnEIPgzOn8QZzjH2KdRLySHa9PRSxMnjHLkpmIVlAFYgDcdj6CE+L5whrhrBHkANx4ugF04Pr7WtRnBt1HCi4XgR9MJpoLNtohHcti6XaDheBL1wyiyUGo2gYrap0nC8CHrhbIJvKdAIttizjYbjRdALhzF35RrBHiANx4ugF04Pr7WtRnBt1HCi4XgR9MJpoLNtohHcti6XaDheBL1wyiyUGo2gYrap0nC8CHrhbIJvKdAIttizTY6DrRG8nPi8VHoR9MJhzF15TrDLUDQmzqdszx1leNqHYDi3PqPdlFAUDKJwzzsvE/p2Xd6UUBAn39fCpiA2BKNHLX0CG3YQRe6Xoxr78dj5RI+wpJvoURYBWm1DqEalQqgQqlGBnWZ46fF2OTjvRY/KhPqwrL24pGCO945e67HMXfspA2m3OK7l92UZgZiwpMBaDAdjZG5duA4xoPMhY0cjfo8Fgfa+i/Jcjw2FfQWhOPdAJO1jDAjIeLE2m5roeKpT4YxvmdFragkLV8Q8/SXo2ULhzsYP1zCR805Xyjmh4w231vtqgnfXnykUvydgDCN5Sy/sFmXPgMHt1R1dRt+8u/XmsMc2zpTEYKc4E06svq32Ihz9cqozEUrNN1fkwmy9rNmvDT1OpjoTAdd8Y7mgfZJYsxfubJdTnYlQa76t9cKd7bIWjA1dt675ttbr3jtra8F0wnU1r/m21ncFU2vMYPB0Pvug71KM1voS7lA5JkwGdFZeChwLUm1ByXhL9q7leLjEQ+kZh5Wo1d5VyCPBrESt9kdyc8X2GPYjf25yJTEDDE//+EsIe0ZvDpGGdhD+AwGOZifuOFxpAAAAAElFTkSuQmCC" />
                                </defs>
                            </svg>

                        </i>
                        <p>Livraison sécurisé</p>
                    </picture>
                    <picture className='flex flex-row items-center gap-2'>
                        <i className='flex flex-row items-center'>
                            <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg"xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect x="0.666687" width="37" height="32" fill="url(#pattern0_32_129)" />
                                <defs>
                                    <pattern id="pattern0_32_129" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_32_129" transform="scale(0.0135135 0.015625)" />
                                    </pattern>
                                    <image id="image0_32_129" width="74" height="64" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABACAYAAAC9S+EXAAAE6klEQVR4Ae2bi20UMRCGXQIlUAIdQAfQAXQAHUAH0AF0AB1AB9ABdAAdQD7pPmlk2etxLrndCx7ptHv2eB6/5+G9TUpZtBBYCCwEFgILgYXAQmAhsBBYCCwEFgILgYXAQmAhsBBYCCwEFgLzCDwqpTwvpbwtpXwtpfy8uf9bfRhjDh54WfPf0MtSyucKkBqgre+sRcaDpddV1PwppfwIgH0ppTwJ37n/Fr7DyxpBJNqQ+WDoWQXQpxuAXpzSyHT7ELwVCIeYYwxeUo+1gCof4+i4anofHMK5x8Eb0w/gIglAHIOHcdZIyIqAoevqiJ3/fnKOdCEKIhEBOP6rUaBbQCEPXubq6EG2KYnOqyn41BZBoq60DKeTtZwGzBZQjAsua2tCh/XuKsDCYEEiXVog6TCFukU9oOC1uNdRxRy6TNHDgyVIOMvZJ9YkQbGuvHKgum4BxRrmkVETutDpemw5JNmdrCUaTKrQxklJdp1xakqPXNebtx4hC5nINpVdqw2xm/bkXXTcdMIJHODzLhRgHfh9AoqWzkn76Yk3GitvHEMevKzxSKEs+QEHneoX0FaaRtkXvdf4urthBLuOAxZbHWtdo/PxvsXLGDUL2eioCVvgwbZD0JuTQa26URuo86zBQdbg7BaIzMEDL2vUh6wRsQawevVwtP5O542mVuGOith1oyCO1/fw8Nkiu19W5+5RZRfC8BHJOyqwGaBsHJlIEdQM78iHW88b2q3aVAslbQBhZHAGKEFH5oisVdi6C9FdcGqr1UfD3NlRF8oAZZfNOm8HxOaLkztVP9T2DBGo3rzjGaDghS+T8vB6Ys9Evnbc2TWbSiq04/m9d50BKtP50DOTqj27bj1uhIxSSQUAQKsfURYoT98jecybqtkIzMhM83gsyC7IpkoWKDcqo996usvzX9YhHdkTKGyYtVe7z76q+NquZzs+K+DaANLeWT/P5p8ppijD0EwxzTo0U6PUn2kmZwNTC9DQ7CFuT6As5pmNqv08+7tAzRwPMg+n2Yia6bq7Hg9mD5w+Rox2KAsUfNnHp10PnO7SHo8ws6nkI0w2+kebOT3PjmYfI7KpmokoNyn7UIyN2eibBiGzYP3MkkEpPGy2XkrWIqwTl/7hzjc06N+VPE9lf5YdtehM6pnGWZ3YuDsZKfEPKHpG2fl4F8fLStaw4/HFqUB5ZQ4eeFnDWuYyNYc18O4eTQJiVLV+GOOlAg5ugSEoAikQjveuAIjsrddVh4gmgbIL0V1o3XxwwEOhjgoExgNqq13Lq2yuyIOXNW6KsuRHFzrVjy3MtUCMsi9+7wG0Bod6wrs4DMYJjN86Uuh4zwEBQBYykW3Ncq02ZF4+9PTc63g0GCNbxdYjRa9u6GzLUOth65CLLjcLGdhyWGKXfev78RRBtbGmKfWlRVtAsYb5VsqiG53MYwPfD00RLAp4y2Ajr+VwDyjqE3OtSEGHzeIqQHIHI1jUlLobGlXUkhrIFlDwWHdqcJFt3boqkASLq6++cZ4zTaxZ1irSJVILKFMqPtshy3MSa0Yn/qjjkPdEgC1dwPwvBMfjX/TWQAmS0cJaaxW8yKij7JBAZI2iY8WzD+liXcFhnKfdCxT3ERB4TTF4kNXrnFmbDs2Hc6adoMxcWfugAap3jwJNIebsQycjtWrAGGMOHnjrwl/LvLfv/wDqZKn5N+pMNAAAAABJRU5ErkJggg==" />
                                </defs>
                            </svg>

                        </i>
                        <p>Support client</p>
                    </picture>
                    <picture className='flex flex-row items-center gap-2'>
                        <i className='flex flex-row items-center'>
                            <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg"xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect width="37" height="32" fill="url(#pattern0_32_136)" />
                                <defs>
                                    <pattern id="pattern0_32_136" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_32_136" transform="scale(0.0135135 0.015625)" />
                                    </pattern>
                                    <image id="image0_32_136" width="74" height="64" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABACAYAAAC9S+EXAAADDklEQVR4Ae2aj43VMAyHPQIjMMJtABvACLcBbAAbwAbHBrABbAAbwAawAfBJ/UmWlVz/pVX9zpGe+pI0afLFdlynZpWKQBEoAkWgCBSBIlAEikARKAJFoAgUgSJwFoE7M/ttZn8v8vt41sTXPuf7RQD5hXq5dhJH38/qMcA/ZvbazBjgmt+Pqf2n0O6tg7+mvy9Tu59m9uzoyS/tnwloFZnYliSVpS+ffN++fO4/cFg0xnUJFWRArBoD+jY3+k49tk2g4+pvBcWjkGz1GxegM5Tjir3KPd/4mPtpQqhfTHtA0ZdUEImNixCfdVjeT4LJbk3YJVaea0z+GbFuSd6r4OclDUbf41WOVduTtFu2YO8Fxbi8CvL/1ORVbo9I01Z2BFsV0whQ9CmpPVUF/Qp9MLMXO35vHKhWP3P1rTatslfOGT5NBbXLSRIyXpHUw1NGMHHM7w+n5FRlxKowYCbR88FG2Shx4Tk8r0CJSOdaoDpgYnGBikQ6+QLVAROLC1Qk0skXqA6YWFygIpFOvkB1wMTiAhWJdPIFqgMmFt8MqHfTW/7X/6ERIqb1CjMttd71iEgogKcXWGJHhESUj9KxJZ9eogSDkxOCgjq+UjnXEekmQBFS9gcUSJuOnLiOSGlBEf4FUC+WDTjCuK14OuCoRz2Xhk3SgtojJRh6HZz+WtjRkwOlTQDbBaTWwUSL3ZMBxamN3wlR2zWnQKlAYVeWSoCXCtr4g42ldsn3kQqUdrI1MXcdu6NqtF/TNi0o1IUJc51LqNWDczrxr7wLMdc+1qeSKP9a8tikqfPe+ojPd1KBYpXlebc+zKAev0pbP6rW86OixMzl04GSzWl9C6DvGlBPgG4x/D1g6UAxEfwfYGj3wh4RNaBMNmzN1t+D48tTgpLTiFR5LxtIWz9x9FBa/1OCQlrkKkiKyI9UtQgrJSgm4e0RkxitajcDCjD4U7JTcWKj82klajSIuf4K1Byhqb5AFaiFBBbeVhJ1ZVB8sdv6AvfKZXrJPmWXlXOY+XoKKMWTsoLiHfOx8E5Ti/8BLFWus8EUqBYAAAAASUVORK5CYII=" />
                                </defs>
                            </svg>

                        </i>
                        <p>Satisfaction garantie</p>
                    </picture>
                </div>
            </section>
            <section
                className="w-full h-120"
                style={{
                    background: `url(${bgNwsletter}),#778B43`,
                    backgroundBlendMode: 'color-burn, normal',
                }}
            >
                <figure className="bg-[#778b43de] w-full h-full">
                    <div className="flex flex-col gap-8 items-center justify-center h-full">
                        <div className="flex flex-col gap-3 items-center">
                            <Typography variant="h1" className="text-white font-medium">
                                NEWSLETTER
                            </Typography>
                            <Typography variant="p" className="text-white w-[55%] text-center">
                                Tenez-vous informé(e) de l&apos;actualité et des événements des Jardins
                                de ReLeaf en vous abonnant à notre newsletter.
                            </Typography>
                        </div>

                        <div className="flex flex-col items-center">
                            <form>
                                <div className="flex flex-row text-lg">
                                    <input
                                        type="email"
                                        placeholder="Votre adresse Email"
                                        className="border p-3 ps-8 px-7 w-[30em] rounded-l-full text-white"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-white cursor-pointer font-semibold rounded-r-full text-[var(--color-primary-releaf)] px-7 pe-8 py-2"
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