"use client"

import BlogPage from '@/components/BlogPage'
import Footer from '@/components/Footer'
import { categories, DevelopmentTipsContent } from '@/data/blogs'
import { socialMedia } from '@/data/data'
import { blogTexts } from '@/data/text'
import React from 'react'

const DevelopmentTips = () => {
  return (
    <>
      <div className='bg-slate-800 text-white'>
        <BlogPage 
          title="Development Tips for Software Engineers" 
          content={DevelopmentTipsContent} 
          categories={categories}
        />
      </div>
    </>
  )
}

export default DevelopmentTips
