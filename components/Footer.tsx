import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data/data';

interface FooterProps {
  headingText?: string;
  descriptionText?: string;
  contactEmail?: string;
  copyrightText?: string;
  copyrightLink?: string;
  logoSrc?: string;
  socialMediaProfiles?: { id: number; img: string }[];
}

const Footer: React.FC<FooterProps> = ({
  headingText = "Ready to take your digital presence to the next level?",
  descriptionText = "Reach out to me today and let's discuss how I can help you achieve your goals.",
  contactEmail = "miyomdok@gmail.com",
  copyrightText = "Copyright © 2024",
  copyrightLink = "https://x.com/itsakuila",
  logoSrc = "/bluetransparent.png",
  socialMediaProfiles = socialMedia
}) => {
  return (
    <footer className='w-full mb-[100px] mt-20 pb-10 md:mb-5' id='contact'>
      <div className='flex flex-col items-center'>
        {/* Conditionally render headingText */}
        {headingText && (
          <h1 className='font-extralight text-4xl text-white lg:max-w-[45vw] text-center sm:text-left'>
            {headingText.split(" ").map((word, index) => (
              <span key={index} className={word === "your" ? 'text-purple' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
        )}
        <p className='text-white-200 md:mt-10 my-5 justify-start'>
          {descriptionText}
        </p>
        <a href={`mailto:${contactEmail}`} className='mt-5 mb-5'>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>

      <div className='flex mt-15 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal text-white font-light mb-3'>
          {copyrightText}
          <a href={copyrightLink}>
            <span className='text-purple uppercase'> The Nile Techie</span>
          </a>
        </p>
        <div className='flex justify-center'>
          <img
            className='w-64 h-auto md:w-92 lg:w-108 object-contain'
            src={logoSrc}
            alt='The Nile Techie'
          />
        </div>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMediaProfiles.map((profile) => {
            let href = '';
            switch (profile.id) {
              case 1:
                href = 'https://github.com/akuila-dok';
                break;
              case 2:
                href = 'https://x.com/AkuilaDok';
                break;
              case 3:
                href = 'https://linkedin.com/https/in/akuila-miyom-279430246';
                break;
              default:
                href = '#'; // Default link or can be left empty
                break;
            }
            return (
              <div
                key={profile.id}
                className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300'
              >
                <a href={href}>
                  <img
                    src={profile.img}
                    alt={`Profile ${profile.id}`}
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
