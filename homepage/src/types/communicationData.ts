export type BannerData = {
  message: string;
  state: 'success' | 'error';
};

export type Form = {
  from: string;
  subject: string;
  message: string;
};

export type EmailData = {
  from: string;
  subject: string;
  message: string;
};
