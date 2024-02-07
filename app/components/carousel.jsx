import { Carousel } from "antd";
import Image from "next/image";
import bday from "../../public/blurImage/bday.jpg";
import consert from "../../public/blurImage/consert.jpg";
import dj from "../../public/blurImage/dj.jpg";
import get from "../../public/blurImage/get.jpg";
import weddinglogo from "../../public/blurImage/wedding.jpg";
import ehitLogo from "../../public/logo/Asset 1@300x.png";

const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "600px",
  textAlign: "center",
  background: "#364d79",
};

const Carousle = () => (
  <Carousel autoplay className="mt-10 ">
    <div>
      <div className="relative ">
        <div className="absolute top-24 flex flex-col items-start justify-start lg:ml-32 gap-4 ml-6">
          <Image src={ehitLogo} className="w-[300px] lg:w-[550px]" />
          <h1 className="text-2xl text-white font-semibold">Wedding</h1>
          <p className="text-white text-xl">
            Start by determining your requirements, such as the number of
            <br />
            guests, budget, preferred location, and desired amenities. <br />{" "}
            Having a clear understanding of your needs will help narrow down
            your options.
          </p>
          <p></p>
        </div>

        <Image
          src={weddinglogo}
          alt=""
          style={contentStyle}
          className="w-full bg-gradient-to-b from-black to-transparent object-cover"
        />
      </div>
    </div>
    <div className="relative">
      <div className="absolute top-24 flex flex-col items-start justify-start lg:ml-32 gap-4 ml-6">
        <Image src={ehitLogo} className="w-[300px] lg:w-[550px]" />
        <h1 className="text-2xl text-white font-semibold">Dj Parties</h1>
        <p className="text-white text-xl">
          Start by determining your requirements, such as the number of
          <br />
          guests, budget, preferred location, and desired amenities. <br />{" "}
          Having a clear understanding of your needs will help narrow down your
          options.
        </p>
        <p></p>
      </div>
      <Image
        src={dj}
        alt=""
        style={contentStyle}
        className="w-full object-cover"
      />
    </div>
    <div className="relative">
      <div className="absolute top-24 flex flex-col items-start justify-start lg:ml-32 gap-4 ml-6">
        <Image src={ehitLogo} className="w-[300px] lg:w-[550px]" />
        <h1 className="text-2xl text-white font-semibold">
          Get Together Parties
        </h1>
        <p className="text-white text-xl">
          Start by determining your requirements, such as the number of
          <br />
          guests, budget, preferred location, and desired amenities. <br />{" "}
          Having a clear understanding of your needs will help narrow down your
          options.
        </p>
        <p></p>
      </div>
      <Image
        src={get}
        alt=""
        style={contentStyle}
        className="w-full object-cover"
      />
    </div>
    <div>
      <div className="absolute top-24 flex flex-col items-start justify-start lg:ml-32 gap-4 ml-6">
        <Image src={ehitLogo} className="w-[300px] lg:w-[550px]" />
        <h1 className="text-2xl text-white font-semibold">Birth Day Parties</h1>
        <p className="text-white text-xl">
          Start by determining your requirements, such as the number of
          <br />
          guests, budget, preferred location, and desired amenities. <br />{" "}
          Having a clear understanding of your needs will help narrow down your
          options.
        </p>
        <p></p>
      </div>
      <Image
        src={bday}
        alt=""
        style={contentStyle}
        className="w-full object-cover"
      />
    </div>
    <div className="relative">
      <div className="absolute top-24 flex flex-col items-start justify-start lg:ml-32 gap-4 ml-6">
        <Image src={ehitLogo} className="w-[300px] lg:w-[550px]" />
        <h1 className="text-2xl text-white font-semibold">Live Conserts</h1>
        <p className="text-white text-xl">
          Start by determining your requirements, such as the number of
          <br />
          guests, budget, preferred location, and desired amenities. <br />{" "}
          Having a clear understanding of your needs will help narrow down your
          options.
        </p>
        <p></p>
      </div>
      <Image
        src={consert}
        alt=""
        style={contentStyle}
        className="w-full object-cover"
      />
    </div>
  </Carousel>
);
export default Carousle;
