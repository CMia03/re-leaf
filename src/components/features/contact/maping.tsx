import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";

const Maping = () => {
  const t = useTranslations("contact");
  return (
    <div className="mt-12">
      <Typography variant="h5" className="font-medium mb-4">
        {t("findUs")}
      </Typography>
      {/* Google Map placeholder - replace with your actual map component */}
      <div style={{ position: "relative", width: "100%", height: "500px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15774.08534408917!2d47.4404534!3d-18.8386424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f081da746f8f1d:0xafe7d2a007a3066e!2sTalatamaty!5e0!3m2!1sfr!2s!4v1657605631801!5m2!1sfr!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Maping;
