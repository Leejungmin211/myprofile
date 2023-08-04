import { EmailData } from './email';

export default async function sendContactEmail(email: EmailData) {
  const response = await fetch('api/contact', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = response.json();
  if (!response.ok) {
    throw new Error('서버 요청에 실패했습니다.');
  }
  return data;
}
