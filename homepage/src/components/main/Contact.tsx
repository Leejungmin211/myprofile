import ContactForm from '../contact/ContactForm';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold text-navy mb-6 xsm:text-base xsm:mb-4">
        CONTACT ME
      </h1>
      <ContactForm />
      <a id="contact"></a>
    </div>
  );
}
