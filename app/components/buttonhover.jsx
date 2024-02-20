import {FloatButton} from 'antd';
import Link from 'next/link';

export default function ButtonHover()
{
  return (
    <div className="z-10 fixed bottom-2 ">
      <Link href={'/chatwithemail'}>
        <FloatButton />
      </Link>
    </div>
  );
}
