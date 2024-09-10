
"use client"
import BlogPage from '@/components/BlogPage'
import Footer from '@/components/Footer'
import { TechInsightsContent } from '@/data/blogs'
import { categories } from '@/data/blogs'
import { socialMedia } from '@/data/data'
import { blogTexts } from '@/data/text'


const TechInsights = () => {
  return (
<>

<BlogPage 
      title="Current Tech Insights for Software Engineers" 
      content={TechInsightsContent} 
      categories={categories}
    />
</>
  )
}

export default TechInsights
