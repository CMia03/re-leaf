"use client"
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


const AddresseBody = () => {
    const t = useTranslations("addresse");
    const tFormulaire = useTranslations("login");

    const translatePlaceholder = useTranslations("login.placeholder");

    return (
        <div className="container mx-auto px-[100px]">
            <div className="flex flex-col gap-15">
                <div className="flex flex-col items-center gap-3">
                    <Typography
                        variant="h2"
                        className="font-medium"
                    >
                        {t("addresseTitle")}
                    </Typography>

                    <Typography
                        variant="D1"
                        className="font-medium"
                    >
                        {t("addresseDescription")}
                    </Typography>

                </div>
                <form className="flex flex-col items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                        {/* ADDRESSE FACTURE */}
                        {/* Formulairee */}
                        <div className="flex w-full flex-col items-start gap-10 mx-auto border-r-1 border-r-solid border-r-[#0000001A] pe-15">
                            {/* INFORMATION PERSONNEL */}
                            <Typography
                                variant="D1"
                                className="font-[300] text-3xl mb-3"
                            >
                                {t("addresseBilling")}

                            </Typography>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                <Label className="flex flex-col items-start gap-5 w-full">
                                    <Typography
                                        variant="D1"
                                        className="font-normal w-max"
                                    >
                                        {tFormulaire("name")}*
                                    </Typography>
                                    <Input
                                        value='John'
                                        type="text"
                                        placeholder={translatePlaceholder("yourName")}
                                        className="w-full p-6 px-5 border-1 border-[#0000004D] rounded-full focus:outline-none placeholder:font-normal"
                                    />
                                </Label>
                                <Label className="flex flex-col items-start gap-5 w-full">
                                    <Typography
                                        variant="D1"
                                        className="font-normal w-max"
                                    >
                                        {tFormulaire("firstName")}*

                                    </Typography>
                                    <Input
                                        value='Doe'
                                        type="text"
                                        placeholder={translatePlaceholder("yourFirstName")}
                                        className="w-full p-6 px-5 border-1 border-[#0000004D] rounded-full focus:outline-none placeholder:font-normal"
                                    />
                                </Label>
                            </div>




                            <Label className="flex flex-col items-start gap-5 w-full">
                                <Typography
                                    variant="D1"
                                    className="font-normal w-max"
                                >

                                    {tFormulaire("addressEmail")} *
                                </Typography>
                                <Input
                                    value='johndoe@releaf.com'
                                    type="email"
                                    placeholder={translatePlaceholder("yourEmail")}
                                    className="w-full p-6 px-5 border-1 border-[#0000004D] rounded-full focus:outline-none placeholder:font-normal"
                                />
                            </Label>

                            <Label className="flex flex-col items-start gap-5 w-full">
                                <Typography
                                    variant="D1"
                                    className="font-normal w-max"
                                >

                                    {t("country/region")} *
                                </Typography>
                                <Input
                                    value='France'
                                    type="text"
                                    placeholder={translatePlaceholder("yourEmail")}
                                    className="w-full p-6 px-5 border-1 border-[#0000004D] rounded-full focus:outline-none placeholder:font-normal"
                                />
                            </Label>


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                <Label className="flex flex-col items-start gap-5 w-full">
                                    <Typography
                                        variant="D1"
                                        className="font-normal w-max"
                                    >
                                        {t("city")} *
                                    </Typography>
                                    <Input
                                        value='Paris'
                                        type="text"
                                        placeholder={translatePlaceholder("yourName")}
                                        className="w-full p-6 px-5 border-1 border-[#0000004D] rounded-full focus:outline-none placeholder:font-normal"
                                    />
                                </Label>
                                <Label className="flex flex-col items-start gap-5 w-full">
                                    <Typography
                                        variant="D1"
                                        className="font-normal w-max"
                                    >
                                        {t("postalCode")} *

                                    </Typography>
                                    <Input
                                        value='120'
                                        type="text"
                                        placeholder={translatePlaceholder("yourFirstName")}
                                        className="w-full p-6 px-5 border-1 border-[#0000004D] rounded-full focus:outline-none placeholder:font-normal"
                                    />
                                </Label>
                            </div>

                            <Label className="flex flex-col items-start gap-5 w-full">
                                <Typography
                                    variant="D1"
                                    className="font-normal w-max"
                                >

                                    {t("streetAddress")} *
                                </Typography>
                                <Input
                                    value='123 Rue du Boulevard'
                                    type="text"
                                    placeholder={translatePlaceholder("yourEmail")}
                                    className="w-full p-6 px-5 border-1 border-[#0000004D] rounded-full focus:outline-none placeholder:font-normal"
                                />
                            </Label>

                            <Label className="flex flex-col items-start gap-5 w-full">
                                <Typography
                                    variant="D1"
                                    className="font-normal w-max"
                                >

                                    {t("phoneNumber")} *
                                </Typography>
                                <Input
                                    value='+261 32 12 345 67'
                                    type="number"

                                    className="w-full p-6 px-5 border-1 border-[#0000004D] rounded-full focus:outline-none placeholder:font-normal"

                                />
                            </Label>

                        </div>

                        {/* Formulairee */}
                        <div className="flex flex-col items-start gap-10 mx-auto w-full ps-15">
                            {/* INFORMATION PERSONNEL */}
                            <Typography
                                variant="D1"
                                className="font-[300] text-3xl mb-3"
                            >
                                {t("addresseDelivery")}
                            </Typography>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                <Label className="flex flex-col items-start gap-5 w-full">
                                    <Typography
                                        variant="D1"
                                        className="font-normal w-max"
                                    >
                                        {tFormulaire("name")}*
                                    </Typography>
                                    <Input
                                        value={'John'}
                                        type="text"
                                        placeholder={translatePlaceholder("yourName")}
                                        className="w-full p-6 px-5 border-1 border-[#0000004D] rounded-full focus:outline-none placeholder:font-normal"
                                    />
                                </Label>
                                <Label className="flex flex-col items-start gap-5 w-full">
                                    <Typography
                                        variant="D1"
                                        className="font-normal w-max"
                                    >
                                        {tFormulaire("firstName")}*

                                    </Typography>
                                    <Input
                                        value='Doe'
                                        type="text"
                                        placeholder={translatePlaceholder("yourFirstName")}
                                        className="w-full p-6 px-5 border-1 border-[#0000004D] rounded-full focus:outline-none placeholder:font-normal"
                                    />
                                </Label>
                            </div>




                            <Label className="flex flex-col items-start gap-5 w-full">
                                <Typography
                                    variant="D1"
                                    className="font-normal w-max"
                                >

                                    {tFormulaire("addressEmail")} *
                                </Typography>
                                <Input
                                    value='johndoe@releaf.com'
                                    type="email"
                                    placeholder={translatePlaceholder("yourEmail")}
                                    className="w-full p-6 px-5 border-1 border-[#0000004D] rounded-full focus:outline-none placeholder:font-normal"
                                />
                            </Label>



                            <Label className="flex flex-col items-start gap-5 w-full">
                                <Typography
                                    variant="D1"
                                    className="font-normal w-max"
                                >

                                    {t("country/region")} *
                                </Typography>
                                <Input
                                    value='France'
                                    type="text"
                                    placeholder={translatePlaceholder("yourEmail")}
                                    className="w-full p-6 px-5 border-1 border-[#0000004D] rounded-full focus:outline-none placeholder:font-normal"
                                />
                            </Label>


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                <Label className="flex flex-col items-start gap-5 w-full">
                                    <Typography
                                        variant="D1"
                                        className="font-normal w-max"
                                    >
                                        {t("city")} *
                                    </Typography>
                                    <Input
                                        value='Paris'
                                        type="text"
                                        placeholder={translatePlaceholder("yourName")}
                                        className="w-full p-6 px-5 border-1 border-[#0000004D] rounded-full focus:outline-none placeholder:font-normal"
                                    />
                                </Label>
                                <Label className="flex flex-col items-start gap-5 w-full">
                                    <Typography
                                        variant="D1"
                                        className="font-normal w-max"
                                    >
                                        {t("postalCode")} *

                                    </Typography>
                                    <Input
                                        value='120'
                                        type="text"
                                        placeholder={translatePlaceholder("yourFirstName")}
                                        className="w-full p-6 px-5 border-1 border-[#0000004D] rounded-full focus:outline-none placeholder:font-normal"
                                    />
                                </Label>
                            </div>

                            <Label className="flex flex-col items-start gap-5 w-full">
                                <Typography
                                    variant="D1"
                                    className="font-normal w-max"
                                >

                                    {t("streetAddress")} *
                                </Typography>
                                <Input
                                    value='123 Rue du Boulevard'
                                    type="text"
                                    placeholder={translatePlaceholder("yourEmail")}
                                    className="w-full p-6 px-5 border-1 border-[#0000004D] rounded-full focus:outline-none placeholder:font-normal"
                                />
                            </Label>

                            <Label className="flex flex-col items-start gap-5 w-full">
                                <Typography
                                    variant="D1"
                                    className="font-normal w-max"
                                >
                                    {t("phoneNumber")} *
                                </Typography>
                                <Input
                                    value="+261 32 12 345 67"
                                    type="number"
                                    className="w-full p-6 px-5 border-1 border-[#0000004D] rounded-full focus:outline-none placeholder:font-normal"
                                />
                            </Label>
                        </div>
                        {/* ADDRESSE LIVRAISON */}
                    </div>
                    <Button
                        type="submit"
                        className="mt-15 w-[60%] mx-auto text-[16px] cursor-pointer bg-[var(--tertiary)] text-white p-7 rounded-full hover:bg-[#74834a] transition duration-200"
                    >
                        <Typography
                            variant="D1"
                            className="font-semibold"

                        >

                            {t("saveChanges")}


                        </Typography>
                    </Button>
                </form>
            </div>
        </div>

    );
};
export default AddresseBody;
