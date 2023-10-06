import ContactForm from '../contact/ContactForm';

export default function Contact() {
  return (
    <section className="flex flex-col">
      <h2 className="text-xl mb-4 font-bold xl:text-2xl xl:mb-6 xsm:text-base xsm:mb-2 ">
        CONTACT ME
      </h2>
      <ContactForm />
      <a id="contact"></a>
    </section>
  );
}
