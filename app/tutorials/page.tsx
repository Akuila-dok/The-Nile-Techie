"use client"

import BlogPage from '@/components/BlogPage'
import { categories, TutorialsContent } from '@/data/blogs'
import { socialMedia } from '@/data/data'
import React from 'react'

const Tutorials = () => {
  return (
  <>
        <div className='bg-slate-800'>
    <BlogPage 
          title="Tutorials insights for developers" 
          content={TutorialsContent} 
          categories={categories}
        />
        </div>
    </>  
  )
}

export default Tutorials
