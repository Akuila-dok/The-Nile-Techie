'use client';

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "../GridGlobe";
import { useState } from "react";
import Lottie from 'react-lottie';
import animationData from '@/data/confetti.json';
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from './MagicButton';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  id,
  spareImg,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img: string;
  imgClassName: string;
  titleClassName: string;
  spareImg: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('miyomdok@gmail.com')
      .then(() => {
        setCopied(true);
        console.log('Copied state:', true); // Updated to log correct state
      })
      .catch(err => console.error('Failed to copy: ', err));
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition  duration-200 shadow-input tx dark:shadow-none justify-between flex flex-col space-y-4 border p-3 border-white/[0.3]",
        className
      )}
      style={{
        background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 ? "flex justify-center h-full" : ""}`}>
        <div className="w-full h-full absolute text-white">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center w-full h-full")}
            />
          )}

          <div className={`absolute right-0 -bottom-5 ${id === 5 ? "w-full opacity-100" : ""}`}>
            {spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                className="object-cover object-center w-full h-full"
              />
            )}
          </div>

          {id === 6 && (
            <BackgroundGradientAnimation>
              {/*<div className="absolute z-50 flex items-center justify-center text-white font-bold" />*/}
            </BackgroundGradientAnimation>
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 py-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>

          {id === 2 && <GlobeDemo />}
          
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex mt-3 ml-2 mr-3 flex-col text-blue-800 font-bold gap-2 lg:mt-11 lg:gap-2">
                {["React.Js", "Next.Js", "TypeScript"].map((item) => (
                  <span
                    key={item}
                    className="py-4 mt-4 lg:py-4 lg:px-3 text-xs lg:text-base  lg:opacity-100 rounded-lg text-center bg-purple"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <span className="py-4 px-3 mt-6 lg:mt-10 rounded-lg text-center bg-purple" />
              <div className="flex mt-3 ml-2 mr-3 flex-col gap-3  text-blue-800 font-bold lg:mt-10 lg:gap-2">
                {["Python", "Postgres", "MongoDB"].map((item) => (
                  <span
                    key={item}
                    className="py-4 mt-4 lg:py-4 lg:px-3 text-xs lg:text-base rounded-lg text-center bg-purple"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied, // Updated autoplay option
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                  height={150}
                  width={150}
                />
              </div>

              <MagicButton 
                title={copied ? 'Email Copied' : 'Copy my email'}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
      </div>
    </div>
  );
};
