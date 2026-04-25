import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Blogs.css';
import Navbar from '../../Components/Navbar/Navbar';
import { motion } from 'framer-motion';

// Fallback thumbnail image
import blogThumb from '../../Assets/Project1.png';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


function Blogs() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const categories = ['All', 'Design', 'Life', 'Projects', 'Others'];
  const sectionReveal = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Blogs';
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiUrl = `/api/blogs?published=true&limit=6&page=1`;
        console.log('Fetching blogs from:', apiUrl);

        const response = await fetch(
          apiUrl,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Blog data:', data);

        setBlogs(data.data.blogs);
        setTotalPages(data.data.pagination.totalPages);
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
        // Provide more specific error messages
        if (err.message === 'Failed to fetch') {
          setError('Unable to connect to the blog server. Please check your internet connection or try again later.');
        } else {
          setError('Failed to load blogs. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [activeCategory, currentPage]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const getCoverImage = (coverImage, optimize = true) => {
    if (!coverImage) return blogThumb;
    
    // If it's a relative path, prepend API_BASE_URL
    let imageUrl = coverImage.startsWith('http') ? coverImage : `${API_BASE_URL}${coverImage}`;
    
    // Apply Cloudinary optimization for better performance
    // Only optimize Cloudinary URLs and when optimize flag is true
    if (optimize && imageUrl.includes('cloudinary.com/image/upload')) {
      // Replace '/upload/' with optimized transformation parameters
      imageUrl = imageUrl.replace(
        '/upload/',
        '/upload/w_800,h_600,c_fill,q_auto,f_auto/'
      );
    }
    
    return imageUrl;
  };

  const getPlainText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const getShortPreview = (blog) => {
    const sourceText = blog.excerpt ? blog.excerpt : blog.content ? getPlainText(blog.content) : '';
    const trimmed = sourceText.trim();
    const MAX_PREVIEW_LENGTH = 120;
    return trimmed.length > MAX_PREVIEW_LENGTH
      ? `${trimmed.slice(0, MAX_PREVIEW_LENGTH).trimEnd()}...`
      : trimmed;
  };

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className='blogs-page'>
      <Navbar />
      <div className='blogs-container'>
        <motion.h1
          className='blogs-main-title'
          {...sectionReveal}
        >
          Let's Talk Everything
        </motion.h1>
        
        <motion.div
          className='blog-categories'
          {...sectionReveal}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {loading && <div className='blogs-loading'>Loading blogs...</div>}
        {error && <div className='blogs-error'>{error}</div>}

        {!loading && !error && (
          <>
            <div className='blogs-list'>
              {(() => {
                const filteredBlogs = activeCategory === 'All' ? blogs : blogs.filter(blog => blog.category === activeCategory);
                return filteredBlogs.length === 0 ? (
                  <p className='blogs-empty'>No blogs found in this category.</p>
                ) : (
                  filteredBlogs.map((blog, index) => (
                  <motion.div
                    key={blog._id}
                    className='blog-card'
                    onClick={() => handleBlogClick(blog._id)}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
                  >
                    <div className='blog-image-container'>
                      <img src={getCoverImage(blog.coverImage)} alt={blog.title} className='blog-image' />
                    </div>
                    <div className='blog-content'>
                      <h2 className='blog-title'>{blog.title}</h2>
                      <p className='blog-description'>
                        {getShortPreview(blog)}
                      </p>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {totalPages > 1 && (
              <motion.div
                className='blogs-pagination'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <button
                  className='pagination-btn'
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  ← Prev
                </button>

                <div className='pagination-pages'>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      className={`pagination-page ${currentPage === page ? 'active' : ''}`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  className='pagination-btn'
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next →
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Blogs;