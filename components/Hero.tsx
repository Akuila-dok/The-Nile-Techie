import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaHome, FaLocationArrow } from 'react-icons/fa';
import CustomCursor from './CustomCursor'; // Import custom cursor
import Link from 'next/link'; // Import Link for navigation

type HeroProps = {
  heading?: string;
  subheading?: string;
  words?: string[];
  buttonTitle?: string;
  buttonIcon?: React.ReactNode;
  buttonLink?: string;
  spotlightProps?: {
    className?: string;
    fill?: string;
  }[];
  logoSrc?: string;
};

const Hero: React.FC<HeroProps> = ({
  heading = 'The Nile Techie',
  subheading = 'Hi, I\'m a tech guru who is a,',
  words = [
    'Web Developer',
    'Mobile App Developer',
    'Web Designer',
    'Full Stack Programmer'
  ],
  buttonTitle = 'Show My Work',
  buttonIcon = <FaLocationArrow style={{ color: 'pink' }} />,
  buttonLink = '#about',
  spotlightProps = [
    { className: '-top-40 -left-10 md:-left-32 md:-top-20 h-screen', fill: 'white' },
    { className: 'top-10 left-full h-[80vh] w-[50vw]', fill: 'purple' },
    { className: 'top-28 left-full h-[80vh] w-[50vw]', fill: 'blue' }
  ],
  logoSrc = '/bluetransparent.png'
}) => {
  return (
    <div className='pb-20 pt-36 relative'>
      {/* Blogs positioned to the top right with hover animation and underline */}

      <div className='absolute top-10 right-3 z-50 uppercase text-yellow-400 font-extrabold text-2xl'>
        <Link href='/blogs' className='relative inline-block hover:scale-125 hover:text-purple-500 transition-transform duration-500 ease-in-out'>
          Blogs
        </Link>
      </div>

      <CustomCursor /> {/* Add the custom cursor */}

      {/* Center the logo and make it responsive */}
      <div className='flex justify-center'>
        <img 
          className='w-64 h-auto md:w-80 lg:w-96 xl:w-108 object-contain' // Updated responsive size
          src={logoSrc}
          alt='The Nile Techie'
        />
      </div>

      <div>
        {spotlightProps.map((props, index) => (
          <Spotlight key={index} className={props.className} fill={props.fill} />
        ))}
      </div>

      <div className="h-screen w-full absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-dark [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className='flex flex-col items-center justify-center relative my-20 z-10 px-4'>
        <div className='max-w-3xl flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xl text-center font-bold text-purple mb-6 mt-4'>
            {heading}
          </h2>

          <blockquote className='text-center text-white text-xl md:text-3xl lg:text-4xl xl:text-5xl font-["IBM_Plex_Sans"] border-l-4 border-green-500 pl-4 mb-8'>
            {subheading}{' '}
            <TextGenerateEffect
              words={words}
              interval={7000} // Set the interval for word change
              className='flex pt-20 font-light mb-10 justify-start text-green-600'
            />
          </blockquote>

          <a href={buttonLink}>
            <MagicButton
              title={buttonTitle}
              icon={buttonIcon}
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
