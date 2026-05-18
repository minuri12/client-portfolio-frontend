import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './MoreProjects.module.css';
import { motion } from 'framer-motion';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Arrow from '../../Assets/right-arrow.png'; // Import Arrow icon

// Fallback thumbnail image
import blogThumb from '../../Assets/Project1.png';
import noProjectImage from '../../Assets/No Project.png';
import { API_BASE_URL, apiUrl } from '../../utils/api';

const PAGE_SIZE = 6;

function MoreProjects() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const sectionReveal = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.8, ease: "easeOut" },
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'More UI/UX & Development Projects | Minuri Hewage Portfolio';
    }, []);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            setError(null);
            try {
                const params = { published: 'true', limit: PAGE_SIZE, page: currentPage, category: 'projects' };
                const { data } = await axios.get(apiUrl('/api/blogs'), { params });
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
        <div className={`${styles.MoreProjects} more-projects-page`}>
            <h1 className="text-hero info-hero" style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", border: 0 }}>More UI UX and Development Projects</h1>
            <div className="section-nav">
                <Navbar />
            </div>
            <motion.div
                className={styles.contentWrapper}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
               <motion.div
        className="overline-wrapper"
        {...sectionReveal}
      >
        <div className="icon-section-dot"></div>
        <h2 className="text-projectpage-overline">My Projects</h2>
      </motion.div>
      <br />
      <br />
      <motion.div
        className="text-hero info-hero"
        {...sectionReveal}
      >
        Discover projects I’ve <span>crafted </span>    in UI/UX, development, AI, and digital experiences.
      </motion.div>

            {loading && <div className={styles.loading}>Loading projects...</div>}
            {error && <div className={styles.error}>{error}</div>}

            {!loading && !error && (
                <>
                    {blogs.length === 0 ? (
                        <div className={styles.empty}>
                            <img src={noProjectImage} alt="No projects found" className={styles.emptyImage} />
                            <p>working sooner ! Stay tuned.</p>
                        </div>
                    ) : (
                        <div className={styles.projectsGrid}>
                            {blogs.map((blog, index) => {
                                const hoverClasses = ['', 'card1', 'card2', 'card3'];
                                return (
                                <motion.div // This motion.div will now act as the .card container
                                    key={blog._id}
                                    className={`card ${styles.moreProjectsCard} ${hoverClasses[index % hoverClasses.length]}`} // Use global 'card' and local override
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
                                >
                                    <Link to={`/blog/${blog._id}`} className="LinkTest">
                                        <div className="project-card-outline">
                                            <div className="project-card-outline2">
                                                <div className="CardHead">
                                                    <div>
                                                        <h3 className="text-projectcard-title">{blog.title}</h3>
                                                        {/* Assuming blog object doesn't have a description field, or it's not needed here */}
                                                    </div>
                                                    <div>
                                                        <img src={Arrow} className="Arrow" alt="Arrow Icon" />
                                                    </div>
                                                </div>
                                                <div className="Project_img">
                                                    <img src={getCoverImage(blog.coverImage)} className="Arrow32" alt={blog.title} />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            )})}
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
            <Footer />
            </motion.div>
        </div>
    );
}

export default MoreProjects;
