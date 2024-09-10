
"use client"
import BlogPage from '@/components/BlogPage'
import Footer from '@/components/Footer'
import { categories, IndustryNewsContent } from '@/data/blogs'
import { socialMedia } from '@/data/data'
import { blogTexts } from '@/data/text'
import React from 'react'

const IndustryNews = () => {
  return (
    <>
    <div className='bg-slate-800 text-white'>
      <BlogPage 
        title="Industry News" 
        content={IndustryNewsContent} 
        categories={categories}
      />
      <Footer
          headingText={""}
          descriptionText={blogTexts.footer.descriptionText}
          contactEmail={blogTexts.footer.contactEmail}
          copyrightText={blogTexts.footer.copyrightText}
          copyrightLink={blogTexts.footer.copyrightLink}
          logoSrc={blogTexts.footer.logoSrc}
          socialMediaProfiles={socialMedia}
        />
    </div>
    </>
  )
}

export default IndustryNews
