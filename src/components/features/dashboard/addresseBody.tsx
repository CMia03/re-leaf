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
        <div className="container mx-auto">
            <div className="flex flex-col gap-10">
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
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                        {/* ADDRESSE FACTURE */}
                        {/* Formulairee */}
                        <div className="flex w-full flex-col items-start gap-7 mx-auto border-r-1 border-r-solid border-r-[#0000001A] pe-15">
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

                                    {tFormulaire("addressEmail")} *
                                </Typography>
                                <Input
                                    value='johndoe@releaf.com'
                                    type="email"
                                    placeholder={translatePlaceholder("yourEmail")}
                                    className="w-full p-6 px-5 border border-gray-200 rounded-full focus:outline-none placeholder:font-normal"
                                />
                            </Label>

                            <Label className="flex flex-col items-start gap-5 w-full">
                                <Typography
                                    variant="p"
                                    className="font-medium w-max"
                                >

                                    {t("country/region")} *
                                </Typography>
                                <Input
                                    value='France'
                                    type="text"
                                    placeholder={translatePlaceholder("yourEmail")}
                                    className="w-full p-6 px-5 border border-gray-200 rounded-full focus:outline-none placeholder:font-normal"
                                />
                            </Label>


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                <Label className="flex flex-col items-start gap-5 w-full">
                                    <Typography
                                        variant="p"
                                        className="font-medium w-max"
                                    >
                                        {t("city")} *
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
                                        {t("postalCode")} *

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

                                    {t("streetAddress")} *
                                </Typography>
                                <Input
                                    value='France'
                                    type="text"
                                    placeholder={translatePlaceholder("yourEmail")}
                                    className="w-full p-6 px-5 border border-gray-200 rounded-full focus:outline-none placeholder:font-normal"
                                />
                            </Label>

                            <Label className="flex flex-col items-start gap-5 w-full">
                                <Typography
                                    variant="p"
                                    className="font-medium w-max"
                                >

                                    {t("phoneNumber")} *
                                </Typography>
                                <Input
                                    value='France'
                                    type="number"
                                    placeholder={translatePlaceholder("yourEmail")}
                                    className="w-full p-6 px-5 border border-gray-200 rounded-full focus:outline-none placeholder:font-normal"
                                />
                            </Label>

                        </div>

                        {/* Formulairee */}
                        <div className="flex flex-col items-start gap-7 mx-auto w-full ps-15">
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

                                    {tFormulaire("addressEmail")} *
                                </Typography>
                                <Input
                                    value='johndoe@releaf.com'
                                    type="email"
                                    placeholder={translatePlaceholder("yourEmail")}
                                    className="w-full p-6 px-5 border border-gray-200 rounded-full focus:outline-none placeholder:font-normal"
                                />
                            </Label>



                            <Label className="flex flex-col items-start gap-5 w-full">
                                <Typography
                                    variant="p"
                                    className="font-medium w-max"
                                >

                                    {t("country/region")} *
                                </Typography>
                                <Input
                                    value='France'
                                    type="text"
                                    placeholder={translatePlaceholder("yourEmail")}
                                    className="w-full p-6 px-5 border border-gray-200 rounded-full focus:outline-none placeholder:font-normal"
                                />
                            </Label>


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                <Label className="flex flex-col items-start gap-5 w-full">
                                    <Typography
                                        variant="p"
                                        className="font-medium w-max"
                                    >
                                        {t("city")} *
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
                                        {t("postalCode")} *

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

                                    {t("streetAddress")} *
                                </Typography>
                                <Input
                                    value='France'
                                    type="text"
                                    placeholder={translatePlaceholder("yourEmail")}
                                    className="w-full p-6 px-5 border border-gray-200 rounded-full focus:outline-none placeholder:font-normal"
                                />
                            </Label>

                            <Label className="flex flex-col items-start gap-5 w-full">
                                <Typography
                                    variant="p"
                                    className="font-medium w-max"
                                >

                                    {t("phoneNumber")} *
                                </Typography>
                                <Input
                                    value='France'
                                    type="number"
                                    placeholder={translatePlaceholder("yourEmail")}
                                    className="w-full p-6 px-5 border border-gray-200 rounded-full focus:outline-none placeholder:font-normal"
                                />
                            </Label>
                        </div>
                        {/* ADDRESSE LIVRAISON */}
                    </div>
                    <Button
                        type="submit"
                        className="mt-15 w-full text-[16px] cursor-pointer bg-[var(--tertiary)] text-white p-7 rounded-full hover:bg-[#74834a] transition duration-200"
                    >
                        <Typography
                            variant="D1"

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
