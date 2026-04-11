import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './MoreProjects.module.css';
import Arrow from '../../Assets/right-arrow.png';
import { motion } from 'framer-motion';

function MoreProjects() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 6;

    const handleBack = () => {
        navigate(-1);
    };

    const projectUrl = (projectName) => {
        return `/project/${projectName.toLowerCase().replace(/\s+/g, '-')}`;
    };

    const projects = [
        { name: 'Nexo', description: 'E commerce website', role: 'Prototype, Frontend, Backend' },
        { name: 'MyJourney', description: 'Travel planning app that simplifies the process based on your traveler category and budget.', role: 'Prototype, Frontend' },
        { name: 'Helping Hand', description: 'Hospital Management System', role: 'Prototype, Frontend, Backend' },
        { name: 'ShopSense', description: 'Mobile app leveraging AI to enhance online clothing shopping for the visually impaired, with an admin panel for sellers.', role: 'Prototype, Frontend' },
        { name: 'Industrial Chemistry', description: 'Mobile application for learning Chemistry for Advanced Level students.', role: 'IdearMart App' },
        { name: 'My Portfolio Website', description: 'Developed the website using React and CSS.', role: 'Prototype, Frontend, Backend' },
        { name: 'Haven', description: 'AI-powered, web-based platform that utilizes AI and virtual reality (VR) technology to promote mental well-being.', role: 'Prototype, Frontend' },
        { name: 'Market Management System', description: 'Developed a system for managing the billing process for a supermarket.', role: 'Frontend, Backend' }
    ];

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = projects.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(projects.length / rowsPerPage);

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
        <motion.div
            className={styles.MoreProjects}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 30 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <div className="button-project-back" onClick={handleBack}>
                <img src={Arrow} className="Arrow" alt="Right Arrow" />
                <div className="text-button">Back</div>
            </div>

            <div className={styles.Volhead}>More Projects</div>

            <div className={`${styles.OtherProjectHolder} ${styles.firsttb}`}>
                <table id="interactiveTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>My Role</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows.map((project, index) => (
                            <tr key={index}>
                                <td>{project.name}</td>
                                <td>{project.description}</td>
                                <td>{project.role}</td>
                                <td style={{ padding: "0.1rem" }}>
                                    <Link to={projectUrl(project.name)} className="contactbtn">
                                        <div className="Touch">Click Here</div>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={styles.pagination}>
                <button
                    className={styles['pagination-btn']}
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                <span>Page {currentPage} of {totalPages}</span>

                <button
                    className={styles['pagination-btn']}
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </motion.div>
    );
}

export default MoreProjects;
