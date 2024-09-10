"use client";
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import React from 'react';
import { FaBlog, FaHome } from 'react-icons/fa';
import { socialMedia } from '@/data/data';
import MagicButton from '@/components/ui/MagicButton';
import { blogTexts } from '@/data/text'; // Import texts

const Blogs = () => {
  return (
    <>
<div className='relative dark: bg-slate-800 flex 
   justify-center items-center flex-col overflow-hidden
   mx-auto sm:px-10 px-5'>
    <div className='absolute cursor-pointer top-4  rounded-lg left-4 z-50'>
          <a href="/">
            <MagicButton
              title="Home"
              icon={<FaHome />}
              position='left'
            />
          </a>
        </div>

        <Hero
          heading={blogTexts.hero.heading}
          subheading={blogTexts.hero.subheading}
          words={blogTexts.hero.words}
          buttonTitle={blogTexts.hero.buttonTitle}
          buttonIcon={<FaBlog style={{ color: blogTexts.hero.buttonIconColor }} />}
          buttonLink={blogTexts.hero.buttonLink}
          spotlightProps={[
            { className: '-top-20 -left-10 md:-left-20 md:-top-10 h-[70vh]', fill: 'white' },
            { className: 'top-20 left-full h-[70vh] w-[40vw]', fill: 'blue' }
          ]}
          logoSrc="/greentransparent.png"
        />

        <section className='py-16 px-5 sm:px-10'>
          <div className='max-w-5xl mx-auto'>
            <div className='mb-12'>
              <h1 className='text-3xl font-bold text-white-200 mb-4 text-left'>{blogTexts.sections.techInsights.title}</h1>
              <p className='text-lg  text-white-200'>{blogTexts.sections.techInsights.content}</p>
              <a href="/tech-insights">
                    <MagicButton
                    title="Read More"
                    icon={""}
                    position='left'
                    otherClasses='bg-transparent border-emerald-500  mx-auto p-4 text-blue-900 '
                    />
                </a>
            </div>

            <div className='mb-12'>
              <h1 className='text-3xl text-white-200 font-bold mb-4 text-left'>{blogTexts.sections.developmentTips.title}</h1>
              <p className='text-lg text-white-200'>{blogTexts.sections.developmentTips.description}</p>
              <a href="/development-tips">
                    <MagicButton
                    title="Read More"
                    icon={""}
                    position='left'
                    otherClasses='bg-transparent p-4 text-blue-900 '
                    />
                </a>
            </div>

            <div className='mb-12'>
              <h1 className='text-3xl text-white-200 font-bold mb-4 text-left'>{blogTexts.sections.industryNews.title}</h1>
              <p className='text-lg text-white-200'>{blogTexts.sections.industryNews.description}</p>
              <a href="/industry-news">
                    <MagicButton
                    title="Read More"
                    icon={""}
                    position='left'
                    otherClasses='bg-transparent p-4 text-blue-900 '
                    />
                </a>
            </div>

            <div className='mb-12'>
              <h1 className='text-3xl text-white-200 font-bold mb-4 text-left'>{blogTexts.sections.tutorials.title}</h1>
              <p className='text-lg text-white-200'>{blogTexts.sections.tutorials.description}</p>
                <a href="/tutorials">
                    <MagicButton
                    title="Read More"
                    icon={""}
                    position='left'
                    otherClasses='bg-transparent p-4 text-blue-900 '
                    />
                </a>
            </div>
          </div>
        </section>

        <Footer
          headingText={undefined}
          descriptionText={blogTexts.footer.descriptionText}
          contactEmail={blogTexts.footer.contactEmail}
          copyrightText={blogTexts.footer.copyrightText}
          copyrightLink={blogTexts.footer.copyrightLink}
          logoSrc={blogTexts.footer.logoSrc}
          socialMediaProfiles={socialMedia}
        />
      </div>
    </>
  );
};

export default Blogs;
