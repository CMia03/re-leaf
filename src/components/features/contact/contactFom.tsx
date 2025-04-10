import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import Image from "next/image";
import email from "../../../../public/images/contact/email.svg";
import localate from "../../../../public/images/contact/localate.svg";
import phone from "../../../../public/images/contact/phone.svg";
const ContactForm = () => {
  const t = useTranslations("contact");
  return (
    <div className="flex flex-col md:flex-row gap-8 py-[50px]">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-8">
        <div className="max-w-md">
          <Typography variant="p" className="text-gray-700 mb-8">
            Lorem ipsum dolor sit amet consectetur. Tortor feugiat elementum in
            est. Est phasellus mauris accumsan sodales. Massa euismod dolor
            viverra scelerisque neque volutna.
          </Typography>
        </div>

        <div className="">
          {/* Address */}
          <div className="flex  gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <Image src={localate} alt="address" width={70} height={70} />
            </div>
            <div>
              <Typography variant="h4" className="font-medium text-lg">
                {t("address")}
              </Typography>
              <Typography variant="p" className="text-gray-700 mb-8">
                {t("addressDescription")}
              </Typography>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <Image src={email} alt="address" width={70} height={70} />
            </div>
            <div>
              <Typography variant="h4" className="font-medium text-lg">
                {t("email")}
              </Typography>
              <Typography variant="p" className="text-gray-700 mb-8">
                {t("emailDescription")}
              </Typography>
            </div>
          </div>

          {/* Téléphone */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <Image src={phone} alt="address" width={70} height={70} />
            </div>
            <div>
              <Typography variant="h4" className="font-medium text-lg">
                {t("phone")}
              </Typography>
              <Typography variant="p" className="text-gray-700 mb-8">
                {t("phoneDescription")}
              </Typography>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-medium mb-4">{t("findUs")}</h3>
          {/* Google Map placeholder - replace with your actual map component */}
          <div className="h-40 bg-gray-200 rounded-md"></div>
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="md:w-1/2 bg-white p-8 rounded-md shadow-sm">
        <h2 className="text-xl font-medium mb-6">{t("formTitle")}</h2>

        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Votre Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Votre Nom"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>

          <div>
            <textarea
              placeholder="Votre Message"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-900 transition duration-200"
          >
            {t("send")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
