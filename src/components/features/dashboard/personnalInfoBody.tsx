"use client"
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const PersonnalInfoBody = () => {
    const t = useTranslations("personnalInfo");
    const tFormulaire = useTranslations("login");

    const translatePlaceholder = useTranslations("login.placeholder");

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleCurrentPasswordVisibility = () => setShowCurrentPassword(prev => !prev);
    const toggleNewPasswordVisibility = () => setShowNewPassword(prev => !prev);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(prev => !prev);
    return (
        <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-3">
                <Typography
                    variant="h2"
                    className="font-medium"
                >
                    {t("personnalInfoTitle")}
                </Typography>

                <Typography
                    variant="D1"
                    className="font-medium"
                >
                    {t("personnalInfoDescription")}
                </Typography>

            </div>

            {/* Formulairee */}
            <form className="flex flex-col items-start gap-7 w-[70%] mx-auto ">
                {/* INFORMATION PERSONNEL */}
                <Typography
                    variant="D1"
                    className="font-[400] text-3xl"
                >
                    {t("basicInformation")}
                </Typography>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                    <Label className="flex flex-col items-start gap-5 w-full">
                        <Typography
                            variant="p"
                            className="font-medium w-max"
                        >
                            {tFormulaire("name")}*
                        </Typography>
                        <Input
                            value='John'
                            type="text"
                            placeholder={translatePlaceholder("yourName")}
                            className="w-full p-6 px-5 border-1 border-solid border-[rgba(0, 0, 0, 0.3)] rounded-full focus:outline-none placeholder:font-normal"
                        />
                    </Label>
                    <Label className="flex flex-col items-start gap-5 w-full">
                        <Typography
                            variant="p"
                            className="font-medium w-max"
                        >
                            {tFormulaire("firstName")}*

                        </Typography>
                        <Input
                            value='Doe'
                            type="text"
                            placeholder={translatePlaceholder("yourFirstName")}
                            className="w-full p-6 px-5 border-1 border-solid border-[rgba(0, 0, 0, 0.3)] rounded-full focus:outline-none placeholder:font-normal"
                        />
                    </Label>
                </div>
                <Label className="flex flex-col items-start gap-5 w-full">
                    <Typography
                        variant="p"
                        className="font-medium w-max"
                    >

                        {t("identifier")} *
                    </Typography>

                    <Input
                        value='John Doe'
                        type="email"
                        placeholder={t("identifierPlaceholder")}
                        className="w-full p-6 px-5 border border-gray-200 rounded-full focus:outline-none placeholder:font-normal"
                    />

                    <Typography
                        variant="D1"
                        className="font-[300] text-[#00000080] text-sm italic w-max"
                    >

                        {t("indicationForIdentifier")} *
                    </Typography>
                </Label>



                <Label className="flex flex-col items-start gap-5 w-full">
                    <Typography
                        variant="p"
                        className="font-medium w-max"
                    >

                        {tFormulaire("addressEmail")} *
                    </Typography>
                    <Input
                        value='johndoe@releaf.com'
                        type="email"
                        placeholder={translatePlaceholder("yourEmail")}
                        className="w-full p-6 px-5 border border-gray-200 rounded-full focus:outline-none placeholder:font-normal"
                    />
                </Label>



                {/* CHANGEMENT MOT DE PASSE */}
                <Typography
                    variant="D1"
                    className="font-[400] text-3xl"
                >
                    {t("changePassword")}
                </Typography>

                <div className="flex flex-col items-start gap-5 w-full">
                    <Label htmlFor="currentPassword" className="flex flex-col items-start gap-5 w-full">
                        <Typography
                            variant="p"
                            className="font-medium w-max"
                        >
                            {t("currentPassword")} *

                        </Typography>
                    </Label>
                    <div className="w-full relative">
                        <Input
                            id="currentPassword"
                            type={showCurrentPassword ? "text" : "password"}
                            placeholder={translatePlaceholder("yourPassword")}
                            className="w-full p-6 px-5 border border-gray-200 rounded-full focus:outline-none placeholder:font-normal"
                        />
                        <i onClick={toggleCurrentPasswordVisibility} className="absolute top-1/2 right-0 translate-y-[-50%] mr-4">
                            {showCurrentPassword ? (
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

                <div className="flex flex-col items-start gap-5 w-full">
                    <Label htmlFor="newPassword" className="flex flex-col items-start gap-5 w-full">
                        <Typography
                            variant="p"
                            className="font-medium w-max"
                        >
                            {t("newPassword")} *

                        </Typography>
                    </Label>
                    <div className="w-full relative">
                        <Input
                            id="newPassword"
                            type={showNewPassword ? "text" : "password"}
                            placeholder={translatePlaceholder("yourPassword")}
                            className="w-full p-6 px-5 border border-gray-200 rounded-full focus:outline-none placeholder:font-normal"
                        />
                        <i onClick={toggleNewPasswordVisibility} className="absolute top-1/2 right-0 translate-y-[-50%] mr-4">
                            {showNewPassword ? (
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

                <div className="flex flex-col items-start gap-5 w-full">
                    <Label htmlFor="confirmPassword" className="flex flex-col items-start gap-5 w-full">
                        <Typography
                            variant="p"
                            className="font-medium w-max"
                        >
                            {t("confirmPassword")} *

                        </Typography>
                    </Label>
                    <div className="w-full relative">
                        <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder={translatePlaceholder("yourPassword")}
                            className="w-full p-6 px-5 border border-gray-200 rounded-full focus:outline-none placeholder:font-normal"
                        />
                        <i onClick={toggleConfirmPasswordVisibility} className="absolute top-1/2 right-0 translate-y-[-50%] mr-4">
                            {showConfirmPassword ? (
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
                <Button
                    type="submit"
                    className="w-full text-[16px] cursor-pointer bg-[var(--tertiary)] text-white p-7 rounded-full hover:bg-[#74834a] transition duration-200"
                >
                    <Typography
                        variant="D1"

                    >
                        {t("saveChanges")}


                    </Typography>
                </Button>
            </form>

        </div>
    );
};

export default PersonnalInfoBody;
