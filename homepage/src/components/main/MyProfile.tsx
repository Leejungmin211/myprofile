import Image from 'next/image';
import MyPicture from '../../../public/images/mypicture.jpg';

export default function MyProfile() {
  return (
    <div>
      <Image src={MyPicture} alt="jungmin" />
    </div>
  );
}
