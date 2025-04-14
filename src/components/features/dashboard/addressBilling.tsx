"use client"
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const AddressBilling = () => {
    const t = useTranslations("personnalInfo");
    const tFormulaire = useTranslations("login");

    const translatePlaceholder = useTranslations("login.placeholder");

    return (
        <div className="flex flex-col items-center gap-10">
       
            {/* Formulairee */}
            <form className="flex flex-col items-start gap-7 w-[70%] mx-auto border-r-1 border-r-solid border-r-[#0000001A] pe-15">
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

export default AddressBilling;
