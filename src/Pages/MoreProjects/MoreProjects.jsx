import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MoreProjects.module.css';
import { motion } from 'framer-motion';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';

// Fallback thumbnail image
import blogThumb from '../../Assets/Project1.png';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const PAGE_SIZE = 6;

function MoreProjects() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'More Projects';
    }, []);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            setError(null);
            try {
                const params = { published: 'true', limit: PAGE_SIZE, page: currentPage, category: 'projects' };
                const { data } = await axios.get(`/api/blogs`, { params });
                setBlogs(data.data.blogs);
                setTotalPages(data.data.pagination.totalPages);
            } catch (err) {
                setError('Failed to load projects. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, [currentPage]);

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


    const handleBlogClick = (blogId) => {
        navigate(`/blog/${blogId}`);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className={styles.MoreProjects}>
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ paddingTop: '80px' }}
            >
                <div className={styles.Volhead}>More Projects</div>

            {loading && <div className={styles.loading}>Loading projects...</div>}
            {error && <div className={styles.error}>{error}</div>}

            {!loading && !error && (
                <>
                    {blogs.length === 0 ? (
                        <p className={styles.empty}>No projects found.</p>
                    ) : (
                        <div className={styles.projectsGrid}>
                            {blogs.map((blog, index) => (
                                <motion.div
                                    key={blog._id}
                                    className={styles.projectCard}
                                    onClick={() => handleBlogClick(blog._id)}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
                                >
                                    <div className={styles.projectImageContainer}>
                                        <img src={getCoverImage(blog.coverImage)} alt={blog.title} className={styles.projectImage} />
                                    </div>
                                    <div className={styles.projectContent}>
                                        <h2 className={styles.projectTitle}>{blog.title}</h2>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {totalPages > 1 && (
                        <motion.div
                            className={styles.pagination}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <button
                                className={styles['pagination-btn']}
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                            >
                                ← Prev
                            </button>

                            <div className={styles['pagination-pages']}>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        className={`${styles['pagination-page']} ${currentPage === page ? styles.active : ''}`}
                                        onClick={() => setCurrentPage(page)}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>

                            <button
                                className={styles['pagination-btn']}
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                            >
                                Next →
                            </button>
                        </motion.div>
                    )}
                </>
            )}
            </motion.div>
        </div>
    );
}

export default MoreProjects;