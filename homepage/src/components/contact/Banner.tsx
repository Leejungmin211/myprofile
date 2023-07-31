export interface BannerData {
  message: string;
  state: 'success' | 'error';
}

export default function Banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '✔️' : '❌';
  return (
    <p className="mb-6 py-2 rounded-md text-center bg-yellow_green text-slate-800">{`${icon} ${message}`}</p>
  );
}
