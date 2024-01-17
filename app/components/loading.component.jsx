import Image from "next/image";
import loader from "../../public/loader/loader.gif";

export default function LoadingScreen() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Image src={loader} alt="" />
    </div>
  );
}
