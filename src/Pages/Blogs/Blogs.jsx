import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Blogs.css';
import Navbar from '../../Components/Navbar/Navbar';
import { motion } from 'framer-motion';

// Fallback thumbnail image
import blogThumb from '../../Assets/Project1.png';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Map frontend display label → backend category value
const categoryMap = {
  'All': null,
  'Design': 'design',
  'Our Mind': 'our-mind',
  'Others': 'others',
};

const PAGE_SIZE = 6;

function Blogs() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const categories = ['All', 'Design', 'Our Mind', 'Others'];
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
        const params = { published: 'true', limit: PAGE_SIZE, page: currentPage };
        const backendCategory = categoryMap[activeCategory];
        if (backendCategory) {
          params.category = backendCategory;
        }
        const { data } = await axios.get(`${API_BASE_URL}/api/blogs`, { params });
        setBlogs(data.data.blogs);
        setTotalPages(data.data.pagination.totalPages);
      } catch (err) {
        setError('Failed to load blogs. Please try again later.');
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

  const getCoverImage = (coverImage) => {
    if (!coverImage) return blogThumb;
    if (coverImage.startsWith('http')) return coverImage;
    return `${API_BASE_URL}${coverImage}`;
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
              {blogs.length === 0 ? (
                <p className='blogs-empty'>No blogs found in this category.</p>
              ) : (
                blogs.map((blog, index) => (
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