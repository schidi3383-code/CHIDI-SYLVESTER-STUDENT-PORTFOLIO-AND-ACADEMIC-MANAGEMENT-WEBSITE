/* --- CSS Reset & Global Styling --- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #2563eb;
    --secondary-color: #1e3a8a;
    --accent-color: #10b981;
    --danger-color: #ef4444;
    --text-main: #1f2937;
    --text-muted: #4b5563;
    --bg-light: #f3f4f6;
    --bg-white: #ffffff;
    --border-color: #e5e7eb;
    --transition-speed: 0.3s;
}

html {
    scroll-behavior: smooth;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    color: var(--text-main);
    background-color: var(--bg-white);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 5rem 1.5rem;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--secondary-color);
    position: relative;
}

.section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: var(--primary-color);
    margin: 0.5rem auto 0 auto;
    border-radius: 2px;
}

.btn {
    display: inline-block;
    background-color: var(--primary-color);
    color: var(--bg-white);
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: background-color var(--transition-speed), transform var(--transition-speed);
}

.btn:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
}

/* --- Navigation System --- */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--bg-white);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    z-index: 1000;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    text-decoration: none;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: var(--text-muted);
    font-weight: 500;
    transition: color var(--transition-speed);
}

.nav-links a:hover {
    color: var(--primary-color);
}

/* --- Homepage (Hero Section) --- */
.hero-section {
    background-color: var(--bg-light);
    padding-top: 8rem;
    padding-bottom: 5rem;
}

.hero-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    gap: 3rem;
}

.hero-content {
    flex: 1;
}

.hero-content h1 {
    font-size: 1.5rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
}

.hero-content h2 {
    font-size: 3.5rem;
    color: var(--secondary-color);
    margin-bottom: 1.5rem;
}

.highlight {
    color: var(--primary-color);
}

.bio-brief {
    font-size: 1.2rem;
    color: var(--text-muted);
    margin-bottom: 2rem;
    line-height: 1.6;
}

.hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
}

.hero-image img {
    width: 320px;
    height: 320px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.15);
    border: 5px solid var(--bg-white);
    transition: transform var(--transition-speed);
}

.hero-image img:hover {
    transform: scale(1.03);
}

/* --- About Me Section --- */
.about-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 3rem;
}

.about-card {
    background-color: var(--bg-white);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
}

.about-card h3 {
    color: var(--secondary-color);
    margin-bottom: 1rem;
    font-size: 1.3rem;
}

.about-card p {
    color: var(--text-muted);
    line-height: 1.6;
}

.edu-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
}

.edu-table th, .edu-table td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
}

.edu-table th {
    background-color: var(--bg-light);
    color: var(--text-main);
    font-weight: 600;
}

.skills-list, .hobbies-list {
    list-style: none;
    margin-top: 0.5rem;
}

.skills-list li, .hobbies-list li {
    padding: 0.5rem 0;
    position: relative;
    padding-left: 1.5rem;
    color: var(--text-muted);
}

.skills-list li::before, .hobbies-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-weight: bold;
}

.media-container {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border-color);
}

.media-container h4 {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    color: var(--text-muted);
}

.media-container audio {
    width: 100%;
}

/* --- Projects Section --- */
.projects-section {
    background-color: var(--bg-light);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 3rem;
}

.project-card {
    background-color: var(--bg-white);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transition: transform var(--transition-speed), box-shadow var(--transition-speed);
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.project-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.project-info {
    padding: 1.5rem;
}

.project-info h3 {
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
}

.project-info p {
    color: var(--text-muted);
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
}

.project-link {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
}

.project-link:hover {
    text-decoration: underline;
}

/* --- Academic Planner Section --- */
.section-subtitle {
    text-align: center;
    color: var(--text-muted);
    margin-top: -0.5rem;
    margin-bottom: 2rem;
}

.planner-wrapper {
    max-width: 700px;
    margin: 0 auto;
    background-color: var(--bg-light);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
}

.planner-input-group {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
}

.planner-input-group input {
    flex: 1;
    padding: 0.75rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    font-size: 1rem;
    outline: none;
}

.planner-input-group input:focus {
    border-color: var(--primary-color);
}

.task-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.task-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--bg-white);
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid var(--border-color);
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    transition: opacity var(--transition-speed);
}

.task-item.completed .task-text {
    text-decoration: line-through;
    color: var(--text-muted);
    opacity: 0.6;
}

.task-actions {
    display: flex;
    gap: 0.5rem;
}

.btn-complete {
    background-color: var(--accent-color);
    color: white;
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
}

.btn-delete {
    background-color: var(--danger-color);
    color: white;
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
}

/* --- Contact Section --- */
.contact-section {
    background-color: var(--bg-light);
}

.contact-wrapper {
    max-width: 600px;
    margin: 0 auto;
    background-color: var(--bg-white);
    padding: 2.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.form-group {
    margin-bottom: 1.25rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text-main);
}

.form-group input, .form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    font-size: 1rem;
    outline: none;
    transition: border-color var(--transition-speed);
}

.form-group input:focus, .form-group textarea:focus {
    border-color: var(--primary-color);
}

.error-msg {
    color: var(--danger-color);
    font-size: 0.85rem;
    margin-top: 0.25rem;
    display: block;
    height: 1rem;
}

.btn-submit {
    width: 100%;
}

.success-banner {
    margin-top: 1rem;
    padding: 0.75rem;
    background-color: rgba(16, 185, 129, 0.1);
    color: var(--accent-color);
    border-radius: 6px;
    text-align: center;
    font-weight: 600;
    display: none;
}

/* --- Footer Area --- */
.main-footer {
    background-color: var(--secondary-color);
    color: #94a3b8;
    text-align: center;
    padding: 2rem 1.5rem;
    font-size: 0.9rem;
}

/* --- Adaptive Design Media Queries (Mobile Friendly) --- */
@media (max-width: 968px) {
    .about-grid {
        grid-template-columns: 1fr;
    }
    .projects-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .hero-container {
        flex-direction: column-reverse;
        text-align: center;
    }
    .hero-content h2 {
        font-size: 2.5rem;
    }
    .hero-image img {
        width: 240px;
        height: 240px;
    }
    .nav-container {
        flex-direction: column;
        gap: 1rem;
    }
    .nav-links {
        gap: 1.25rem;
    }
    .hero-section {
        padding-top: 11rem;
    }
    .projects-grid {
        grid-template-columns: 1fr;
    }
