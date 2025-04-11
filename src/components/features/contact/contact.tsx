import BreadcrumbHeader from "../BreadcrumbHeader";
import ContactForm from "./contactFom";
import Maping from "./maping";

const ContactComponent = () => {
  return (
    <div className="container mx-auto">
      <BreadcrumbHeader />
      <div className="container mx-auto px-4 md:px-8 relative -mt-20">
        <ContactForm />
      </div>
      <Maping />
    </div>
  );
};

export default ContactComponent;
