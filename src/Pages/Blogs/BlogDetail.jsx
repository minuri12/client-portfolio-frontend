import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BlogDetail.css';
import { motion } from 'framer-motion';
import Navbar from '../../Components/Navbar/Navbar';
import Arrow from '../../Assets/right-arrow.png';

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleBack = () => {
    navigate(-1);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 8);
  };

  const handleTextToSpeech = () => {
    if ('speechSynthesis' in window) {
      if (isPlaying) {
        // Stop the current speech
        speechSynthesis.cancel();
        setIsPlaying(false);
      } else {
        // Start speaking
        const articleContent = document.querySelector('.blog-article-content');
        if (articleContent) {
          const text = articleContent.innerText;
          const newUtterance = new SpeechSynthesisUtterance(text);
          newUtterance.onend = () => {
            setIsPlaying(false);
          };
          newUtterance.onerror = () => {
            setIsPlaying(false);
          };
          speechSynthesis.speak(newUtterance);
          setIsPlaying(true);
        }
      }
    } else {
      alert('Text-to-Speech is not supported in your browser.');
    }
  };

  const handleCopyText = async () => {
    const articleContent = document.querySelector('.blog-article-content');
    if (articleContent) {
      const text = articleContent.innerText;
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (e) {
          alert('Failed to copy text.');
        }
        document.body.removeChild(textArea);
      }
    }
  };

  const sectionReveal = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(`/api/blogs/${id}`);
        const fetchedBlog = data.data.blog;
        setBlog(fetchedBlog);

        // Fetch random blogs
        const { data: relatedData } = await axios.get(`/api/blogs`, {
          params: { published: 'true', limit: 4 },
        });
        setRelatedBlogs(
          relatedData.data.blogs.filter((b) => b._id !== fetchedBlog._id).slice(0, 3)
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
        <Navbar />
        <div className='blog-detail-container'>
          <motion.div
            className='action-bar'
            {...sectionReveal}
          >
            <div className='button-project-back' onClick={handleBack}>
              <div>
                <img src={Arrow} className='Arrow' alt='Arrow' />
              </div>
              <div className='text-button'>Back</div>
            </div>
          <div className='button-group-right'>
            <div className='tts-button' onClick={handleTextToSpeech} title={isPlaying ? 'Stop Reading' : 'Read Aloud'}>
              {isPlaying ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                  <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              )}
            </div>
            <div className='tts-button' onClick={handleCopyText} title={copied ? 'Copied!' : 'Copy Text'}>
              {copied ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              )}
            </div>
          </div>
        </motion.div>
          <div className='blogs-loading'>Loading blog...</div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className='blog-detail-page'>
        <Navbar />
        <div className='blog-detail-container'>
          <motion.div
            className='action-bar'
            {...sectionReveal}
          >
            <div className='button-project-back' onClick={handleBack}>
              <div>
                <img src={Arrow} className='Arrow' alt='Arrow' />
              </div>
              <div className='text-button'>Back</div>
            </div>
            <div className='button-group-right'>
              <div className='tts-button' onClick={handleTextToSpeech} title={isPlaying ? 'Stop Reading' : 'Read Aloud'}>
                {isPlaying ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                    <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  </svg>
                )}
              </div>
            </div>
          </motion.div>
          <div className='blogs-error'>{error || 'Blog not found.'}</div>
        </div>
      </div>
    );
  }

  return (
    <div className='blog-detail-page'>
      <Navbar />
      <div className='blog-detail-container'>
        <motion.div
          className='action-bar'
          {...sectionReveal}
        >
          <div className='button-project-back' onClick={handleBack}>
            <div>
              <img src={Arrow} className='Arrow' alt='Arrow' />
            </div>
            <div className='text-button'>Back</div>
          </div>
          <div className='button-group-right'>
            <div className='tts-button' onClick={handleTextToSpeech} title={isPlaying ? 'Stop Reading' : 'Read Aloud'}>
              {isPlaying ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                  <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              )}
            </div>
            <div className='tts-button' onClick={handleCopyText} title={copied ? 'Copied!' : 'Copy Text'}>
              {copied ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          className='blog-hero-image'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
        >
          <img src={getCoverImage(blog.coverImage)} alt={blog.title} loading="lazy" />
        </motion.div>

        <motion.div
          className='blog-article'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
        >
          <h1 className='blog-article-title'>
            {blog.title}
          </h1>

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
            <h2 className='related-blogs-title'>Let's Talk Everything</h2>
            <div className='related-blogs-grid'>
              {relatedBlogs.map((relatedBlog, index) => (
                <motion.div
                  key={relatedBlog._id}
                  className='related-blog-card'
                  onClick={() => navigate(`/blog/${relatedBlog._id}`)}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 + index * 0.06 }}
                >
                  <div className='related-blog-image'>
                    <img src={getCoverImage(relatedBlog.coverImage)} alt={relatedBlog.title} loading="lazy" />
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