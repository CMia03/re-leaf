import { Typography } from "@/components/re-leaf/Typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import Image from "next/image";
import email from "../../../../public/images/contact/email.svg";
import localate from "../../../../public/images/contact/localate.svg";
import phone from "../../../../public/images/contact/phone.svg";

const ContactForm = () => {
  const t = useTranslations("contact");
  return (
    <div className="flex flex-col md:flex-row py-0">
      <div className="md:w-1/2 pr-0 md:pr-8 pt-20 mt-[50px]">
        <div className="max-w-md mb-8">
          <Typography variant="p" className="text-gray-700">
            {t("formDescription")}
          </Typography>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div>
              <Image src={localate} alt="address" width={48} height={48} />
            </div>
            <div>
              <Typography variant="h5" className="font-medium mb-1">
                {t("address")}
              </Typography>
              <Typography variant="p" className="text-gray-700">
                {t("addressDescription")}
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div>
              <Image src={email} alt="email" width={48} height={48} />
            </div>
            <div>
              <Typography variant="h5" className="font-medium mb-1">
                {t("email")}
              </Typography>
              <Typography variant="p" className="text-gray-700">
                {t("emailDescription")}
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div>
              <Image src={phone} alt="phone" width={48} height={48} />
            </div>
            <div>
              <Typography variant="h5" className="font-medium mb-1">
                {t("phone")}
              </Typography>
              <Typography variant="p" className="text-gray-700">
                {t("phoneDescription")}
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-end md:pr-4 lg:pr-0 lg:pr-[115px]">
        <div className="bg-white rounded-lg shadow-lg w-[450px] h-[518px] p-[40px]">
          <Typography variant="h3" className="font-medium mb-6">
            {t("formTitle")}
          </Typography>

          <form className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Votre Email"
                className="w-full h-[50px] p-3 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div>
              <Input
                type="text"
                placeholder="Votre Nom"
                className="w-full p-3 h-[50px] border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div>
              <Textarea
                placeholder="Votre Message"
                rows={5}
                className="w-full p-3 h-[164px] border border-gray-200 rounded-2xl focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-black text-white py-3 px-4 rounded-full hover:bg-gray-900 transition duration-200"
              >
                {t("send")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
