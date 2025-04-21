"use client"

import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react";
import { useRouter } from "next/navigation";



const SignIn = () => {
    const t = useTranslations("login");
    const translatePlaceholder = useTranslations("login.placeholder");
    const router = useRouter();



    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/dashboard');

    }

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(prev => !prev);



    return (
        <div className="w-full p-6 px-0">
            <div className="flex flex-col gap-8">
                <Typography
                    variant="h2"
                    className="font-medium"
                >
                    {t("connection")}
                </Typography>

                <form onSubmit={handleSignIn} className="flex flex-col items-start gap-7 w-full border-r-1 border-r-solid border-r-[#0000001A] pe-15">
                    <Label className="flex flex-col items-start gap-5 w-full">
                        <Typography
                            variant="p"
                            className="font-medium w-max"
                        >
                            {t("emailSignIn")} *
                        </Typography>
                        <Input
                            type="email"
                            placeholder={translatePlaceholder("yourEmail")}

                            className="w-full p-6 px-5 border-1 border-[#0000004D] rounded-full focus:outline-none placeholder:font-normal"
                        />
                    </Label>
                    <div className="flex flex-col items-start gap-5 w-full">
                        <Label htmlFor="passwordSign" className="flex flex-col items-start gap-5 w-max bg-red">
                            <Typography
                                variant="p"
                                className="font-medium w-max"
                            >
                                {t("password")} *
                            </Typography>
                        </Label>
                        <div className="w-full relative">
                            <Input
                                id="passwordSign"
                                type={showPassword ? "text" : "password"}
                                placeholder={translatePlaceholder("yourPassword")}
                                className="w-full p-6 pe-11 px-5 border-1 border-[#0000004D] rounded-full focus:outline-none placeholder:font-normal"
                            />
                            <i onClick={togglePasswordVisibility} className="absolute top-1/2 right-0 translate-y-[-50%] mr-4">
                                {showPassword ? (
                                    // Icône Eye Slash (œil barré)
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 3L21 21" stroke="black" strokeOpacity="0.5" strokeWidth="1.5"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 13.1046 10.8954 14 12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142"
                                            stroke="black" strokeOpacity="0.5" strokeWidth="1.5"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18 18C16.2051 19.2945 14.1448 20 12 20C7 20 2.73 15.636 2 12C2.36325 10.2089 3.39071 8.55274 4.87494 7.28287"
                                            stroke="black" strokeOpacity="0.5" strokeWidth="1.5"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.87868 4.87868C10.5711 4.62733 11.2818 4.5 12 4.5C16.5 4.5 20.27 8.136 21 12C20.7111 13.4204 19.9876 14.7698 18.9459 15.8942"
                                            stroke="black" strokeOpacity="0.5" strokeWidth="1.5"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    // Icône Eye (œil normal)
                                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.666992 4.66667C0.666992 4.66667 4.39783 0.5 9.00033 0.5C13.6028 0.5 17.3337 4.66667 17.3337 4.66667"
                                            stroke="black" strokeOpacity="0.5" strokeWidth="0.9375"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.9537 8.87081C17.207 9.22581 17.3337 9.40415 17.3337 9.66665C17.3337 9.92998 17.207 10.1075 16.9537 10.4625C15.8153 12.0591 12.9078 15.5 9.00033 15.5C5.09199 15.5 2.18533 12.0583 1.04699 10.4625C0.793659 10.1075 0.666992 9.92915 0.666992 9.66665C0.666992 9.40331 0.793659 9.22581 1.04699 8.87081C2.18533 7.27415 5.09283 3.83331 9.00033 3.83331C12.9087 3.83331 15.8153 7.27498 16.9537 8.87081Z"
                                            stroke="black" strokeOpacity="0.5" strokeWidth="0.9375"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.5 9.66669C11.5 9.00365 11.2366 8.36776 10.7678 7.89892C10.2989 7.43008 9.66304 7.16669 9 7.16669C8.33696 7.16669 7.70107 7.43008 7.23223 7.89892C6.76339 8.36776 6.5 9.00365 6.5 9.66669C6.5 10.3297 6.76339 10.9656 7.23223 11.4345C7.70107 11.9033 8.33696 12.1667 9 12.1667C9.66304 12.1667 10.2989 11.9033 10.7678 11.4345C11.2366 10.9656 11.5 10.3297 11.5 9.66669Z"
                                            stroke="black" strokeOpacity="0.5" strokeWidth="0.9375"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </i>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" className="rounded-full border-1 border-[#0000004D] w-5 h-5 scale-[0.85]" />
                            <Label
                                htmlFor="terms"
                                className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                <Typography
                                    variant="p"
                                    className="font-medium w-max"
                                >
                                    {t("rememberMe")}


                                </Typography>
                            </Label>

                        </div>
                        <div className="w-full">
                            <Typography
                                variant="p"
                                className="font-medium hover:underline hover:underline-offset-4 transition  float-end cursor-pointer" onClick={() => router.push("/lostPassword")}
                            >
                                {t("lostPassword")}
                            </Typography>
                        </div>
                    </div>
                    <Button
                        type="submit"

                        className="w-full text-[16px] cursor-pointer bg-black text-white p-7 rounded-full hover:bg-gray-900 transition duration-200"
                    >
                        <Typography
                            variant="D1"

                        >
                            {t("logIn")}


                        </Typography>
                    </Button>
                </form>
            </div>
        </div>
    );
};
export default SignIn;
