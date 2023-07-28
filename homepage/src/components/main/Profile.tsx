import Image from 'next/image';
import MyPicture from '../../../public/images/mypicture.jpg';
import TypingText from '../profile/TypingText';

export default function Profile() {
  return (
    <div>
      <TypingText />
      <div className="border-white border-opacity-60 border-2 rounded-2xl p-8">
        <Image
          className="rounded-full object-cover w-60 h-60"
          src={MyPicture}
          alt="jungmin"
        />
      </div>
    </div>
  );
}
