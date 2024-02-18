'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import sendContactEmail from '@/service/contact';
import { BannerData, Form } from '@/types/communicationData';
import { DEFAULT_TEXT } from '@/constants/contact';
import ShadowButton from '../ui/ShadowButton';
import Banner from './Banner';

export const LABEL_STYLE = 'text-md text-slate-200 xsm:text-base';

export const INPUT_STYLE =
  'h-8 mb-3 p-3 rounded-md mt-1 text-slate-700 xl:h-10 xl:mb-4 xl:p-4 xsm:mb-2 xsm:p-2 xsm:text-sm';

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_TEXT);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const textChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        setBanner({
          message: '메일을 성공적으로 보냈습니다.',
          state: 'success',
        });
        setForm(DEFAULT_TEXT);
      })
      .catch(() => {
        setBanner({ message: '메일전송에 실패했습니다.', state: 'error' });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <section className="p-6 border-slate-100 border-opacity-50 border-2 rounded-2xl xl:p-10 xsm:border">
      {banner && <Banner banner={banner} />}
      <form onSubmit={onSubmit} className="w-80 flex flex-col xl:w-96 xsm:w-64">
        <label htmlFor="from" className={LABEL_STYLE}>
          From
        </label>
        <input
          type="email"
          id="from"
          name="from"
          placeholder="보내는 분의 이메일을 입력해주세요."
          required
          value={form.from}
          onChange={textChange}
          className={INPUT_STYLE}
        />
        <label htmlFor="subject" className={LABEL_STYLE}>
          Title
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="제목을 입력해주세요."
          required
          value={form.subject}
          onChange={textChange}
          className={INPUT_STYLE}
        />
        <label htmlFor="message" className={LABEL_STYLE}>
          Message
        </label>
        <textarea
          rows={8}
          id="message"
          name="message"
          placeholder="내용을 입력해주세요."
          required
          value={form.message}
          onChange={textChange}
          className="mb-6 rounded-md mt-1 xl:mb-8 p-4 text-slate-700 xsm:p-2 xsm:text-sm xsm:mb-4"
        />
        <div className="flex justify-end">
          <ShadowButton text="Send me an email" />
        </div>
      </form>
    </section>
  );
}
