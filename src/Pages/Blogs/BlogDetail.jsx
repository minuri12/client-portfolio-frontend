import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BlogDetail.css';
import { motion } from 'framer-motion';

// Fallback image
import blogThumb from '../../Assets/Project1.png';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sectionReveal = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const getCoverImage = (coverImage) => {
    if (!coverImage) return blogThumb;
    if (coverImage.startsWith('http')) return coverImage;
    return `${API_BASE_URL}${coverImage}`;
  };

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(`${API_BASE_URL}/api/blogs/${id}`);
        const fetchedBlog = data.data.blog;
        setBlog(fetchedBlog);

        // Fetch related blogs from the same category
        const { data: relatedData } = await axios.get(`${API_BASE_URL}/api/blogs`, {
          params: { published: 'true', category: fetchedBlog.category, limit: 3 },
        });
        setRelatedBlogs(
          relatedData.data.blogs.filter((b) => b._id !== fetchedBlog._id).slice(0, 2)
        );
      } catch (err) {
        setError('Failed to load blog. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className='blog-detail-page'>
        <div className='blog-detail-container'>
          <motion.button
            className='back-to-blog'
            onClick={() => navigate('/blogs')}
            {...sectionReveal}
          >
            <span>←</span> Back to Blog
          </motion.button>
          <div className='blogs-loading'>Loading blog...</div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className='blog-detail-page'>
        <div className='blog-detail-container'>
          <motion.button
            className='back-to-blog'
            onClick={() => navigate('/blogs')}
            {...sectionReveal}
          >
            <span>←</span> Back to Blog
          </motion.button>
          <div className='blogs-error'>{error || 'Blog not found.'}</div>
        </div>
      </div>
    );
  }

  return (
    <div className='blog-detail-page'>
      <div className='blog-detail-container'>
        <motion.button
          className='back-to-blog'
          onClick={() => navigate('/blogs')}
          {...sectionReveal}
        >
          <span>←</span> Back to Blog
        </motion.button>

        <motion.div
          className='blog-hero-image'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
        >
          <img src={getCoverImage(blog.coverImage)} alt={blog.title} />
        </motion.div>

        <motion.div
          className='blog-article'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          <motion.h1
            className='blog-article-title'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            {blog.title}
          </motion.h1>

          <div
            className='blog-article-content rich-content'
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </motion.div>

        {relatedBlogs.length > 0 && (
          <motion.div
            className='related-blogs-section'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className='related-blogs-grid'>
              {relatedBlogs.map((relatedBlog, index) => (
                <motion.div
                  key={relatedBlog._id}
                  className='related-blog-card'
                  onClick={() => navigate(`/blog/${relatedBlog._id}`)}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 + index * 0.06 }}
                >
                  <div className='related-blog-image'>
                    <img src={getCoverImage(relatedBlog.coverImage)} alt={relatedBlog.title} />
                  </div>
                  <h3 className='related-blog-title'>{relatedBlog.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default BlogDetail;
