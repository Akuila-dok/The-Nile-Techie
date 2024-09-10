import Footer from '@/components/Footer'
import React, { useState, useEffect } from 'react'
import CustomCursor from './CustomCursor'
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

// Define the type for each section of the blog content
interface BlogContent {
  heading: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  category: string;
  timestamp: string;
}

// Define the props for the BlogPage component
interface BlogPageProps {
  title: string;
  content: BlogContent[];
  categories: string[];
}

const BlogPage: React.FC<BlogPageProps> = ({ title, content, categories }) => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [filteredContent, setFilteredContent] = useState<BlogContent[]>(content)
  const [recentPosts, setRecentPosts] = useState<BlogContent[]>([])
  const [selectedPost, setSelectedPost] = useState<BlogContent | null>(null)
  const [expandedPost, setExpandedPost] = useState<BlogContent | null>(null)

  const categoryCounts = categories.reduce((counts: Record<string, number>, category) => {
    counts[category] = content.filter((section) => section.category === category).length
    return counts
  }, {})

  useEffect(() => {
    if (!selectedPost) {
      const filtered = content.filter((section) => {
        const matchesSearch = section.heading.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              section.paragraph1.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              section.paragraph2.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              section.paragraph3.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              section.paragraph4.toLowerCase().includes(searchQuery.toLowerCase())

        const matchesCategory = selectedCategory === 'All' || section.category === selectedCategory

        return matchesSearch && matchesCategory
      })
      setFilteredContent(filtered)
    }
  }, [searchQuery, selectedCategory, content, selectedPost])

  useEffect(() => {
    const sortedPosts = content
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 5)
    setRecentPosts(sortedPosts)
  }, [content])

  const handleRecentPostClick = (post: BlogContent) => {
    setSelectedPost(post)
    setSearchQuery('')
    setSelectedCategory('All')
  }

  const handleBackToAllPosts = () => {
    setSelectedPost(null)
  }

  const toggleExpandPost = (post: BlogContent) => {
    setExpandedPost(expandedPost === post ? null : post)
  }

  return (
    <div className='relative bg-slate-800  text-white-200 flex flex-col min-h-screen'>
      <div className='flex justify-between p-4'>
        <a href="/">
          <button className='px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200'>
            Back Home
          </button>
        </a>
        <a href="/blogs">
          <button className='px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200'>
            Back to Blogs
          </button>
        </a>
      </div>
      <CustomCursor />
      <div className='flex flex-col lg:flex-row w-full mx-auto p-5 max-w-screen-lg'>
        <aside className='lg:w-1/3 w-full lg:pr-5 mb-8 lg:mb-0'>
        <div className='mb-5 relative'> {/* Add relative class to the container */}
            <input 
              type='text' 
              placeholder='Search posts...' 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' // Add padding-left to make space for the icon
            />
            <FaSearch className='absolute right-3 text-xl top-1/2 transform -translate-y-1/2 text-gray-500' /> {/* Position the icon inside the input */}
          </div>
          <div className='mb-5'>
            <h3 className='text-2xl font-extralight mb-3'>Categories</h3>
            <ul className='space-y-2'>
              <li 
                key="All"
                className={`cursor-pointer ${selectedCategory === 'All' ? 'text-blue-600' : 'hover:underline'}`}
                onClick={() => setSelectedCategory('All')}
              >
                All ({content.length})
              </li>
              {categories.map(category => (
                <li 
                  key={category} 
                  className={`cursor-pointer ${selectedCategory === category ? 'text-blue-600' : 'hover:underline'}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category} ({categoryCounts[category]})
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-2xl font-extralight mb-3'>Recent Posts</h3>
            <ul className='space-y-2'>
              {recentPosts.map(post => (
                <li 
                  key={post.heading} 
                  className='text-blue-600 cursor-pointer hover:underline'
                  onClick={() => handleRecentPostClick(post)}
                >
                  {post.heading}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className='lg:w-2/3 w-full'>
          {selectedPost ? (
            <div>
              <h1 className='text-3xl font-bold mb-4'>{selectedPost.heading}</h1>
              <div className='mb-4'>
                <p className={`leading-relaxed mb-6 ${expandedPost === selectedPost ? '' : 'line-clamp-3'}`}>
                  {selectedPost.paragraph1}
                </p>
                <p className={`leading-relaxed mb-6 ${expandedPost === selectedPost ? '' : 'line-clamp-3'}`}>
                  {selectedPost.paragraph2}
                </p>
                <p className={`leading-relaxed mb-6 ${expandedPost === selectedPost ? '' : 'line-clamp-3'}`}>
                  {selectedPost.paragraph3}
                </p>
                <p className={`leading-relaxed mb-6 ${expandedPost === selectedPost ? '' : 'line-clamp-3'}`}>
                  {selectedPost.paragraph4}
                </p>
                <button 
                  onClick={() => toggleExpandPost(selectedPost)}
                  className='mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200'>
                  {expandedPost === selectedPost ? 'Show Less' : 'Read More'}
                </button>
              </div>
              <button 
                onClick={handleBackToAllPosts} 
                className='mt-6 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200'>
                Back to all posts
              </button>
            </div>
          ) : (
            <>
              <h1 className='text-3xl font-extralight mb-4 '>{title}</h1>
              {filteredContent.length > 0 ? (
                filteredContent.map((section, index) => (
                  <div key={index} className='mb-6'>
                    <h2 className='text-xl font-semibold mb-2'>{section.heading}</h2>
                    <p className={`leading-relaxed mb-6 ${expandedPost === section ? '' : 'line-clamp-3'}`}>
                      {section.paragraph1}
                    </p>
                    <p className={`leading-relaxed mb-6 ${expandedPost === section ? '' : 'line-clamp-3'}`}>
                      {section.paragraph2}
                    </p>
                    <p className={`leading-relaxed mb-6 ${expandedPost === section ? '' : 'line-clamp-3'}`}>
                      {section.paragraph3}
                    </p>
                    <p className={`leading-relaxed mb-6 ${expandedPost === section ? '' : 'line-clamp-3'}`}>
                      {section.paragraph4}
                    </p>
                    <button 
                      onClick={() => toggleExpandPost(section)}
                      className='mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200'>
                      {expandedPost === section ? 'Show Less' : 'Read More'}
                    </button>
                  </div>
                ))
              ) : (
                <p>No results found.</p>
              )}
            </>
          )}
          
        </main>
      
      </div>
      <div className='p-5'>
      <Footer/>
      </div>
    </div>
  )
}

export default BlogPage
