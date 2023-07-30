'use client';
import { ChangeEvent, useState } from 'react';

interface Form {
  from: string;
  title: string;
  message: string;
}

const DEFAULT_TEXT = {
  from: '',
  title: '',
  message: '',
};

const LABEL_STYLE = 'text-xl text-slate-700 xsm:text-base'
const INPUT_STYLE = "h-10 rounded-md mt-1 mb-4 p-4 text-slate-700 xsm:h-8 xsm:mb-2 xsm:p-2 xsm:text-sm"
export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_TEXT);
  const [banner, setBanner] = useState(null);

  const textChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <section className="border-white border-opacity-50 border-2 rounded-2xl p-16 xsm:p-6">
      <form className='flex flex-col w-96 xsm:w-52'>
        <label htmlFor="from" className={LABEL_STYLE}>From</label>
        <input
          type="email"
          id="from"
          name="from"
          required
          value={form.from}
          onChange={textChange}
          className={INPUT_STYLE}
        />

        <label htmlFor="title" className={LABEL_STYLE}>Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          autoFocus
          value={form.title}
          onChange={textChange}
          className={INPUT_STYLE}
        />
        <label htmlFor="message" className={LABEL_STYLE}>Message</label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          autoFocus
          value={form.message}
          onChange={textChange}
          className="rounded-md mt-1 mb-8 p-4 text-slate-700 xsm:p-2 xsm:text-sm"
        />
   <div className='flex items-center'>
   <button className='h-10 px-8 bg-navy rounded-md text-white xsm:text-sm xsm:h-8 xsm:px-4'>Send me an email</button>
   </div>
      </form>
    </section>
  );
}
