import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import img from '../../public/logo/bg.jpg';

export default function UserHeroSection()
{
  return (
    <div className="bg-white w-full ">
      <div className="w-[85%] mx-auto py-24 sm:px-6 sm:py-32 md:h-full mt-14 lg:mt-0 md:mt-0 ">
        <motion.div className="relative isolate overflow-hidden flex items-center justify-between lg:flex-row flex-col gap-5">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left w-full lg:w-[50%]">
            <motion.h2
              className="text-3xl font-bold tracking-tight  sm:text-4xl"
              initial={{y: -500}}
              animate={{y: 0}}
              transition={{duration: 1}}>
              Search your Events.
              <br />
              Start using our Website today.
            </motion.h2>
            <motion.p
              className="mt-6 text-lg leading-8 "
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 2.5}}>
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </motion.p>
            <motion.div
              className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"
              initial={{x: -500}}
              animate={{x: 0}}
              transition={{duration: 2}}>
              <Link
                href={"/userview-dashboard"}
                className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Get started
              </Link>
              <a href="#" className="text-sm font-semibold leading-6 ">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
          <motion.div className="lg:w-[50%] w-full" initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2.5}}>
            <Image alt="" src={img} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
