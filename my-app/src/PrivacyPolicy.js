import React, { useState } from 'react';
import './styles.css'; 
import privacypolicyvideo from '../src/img/privacypolicy.mp4';

const PrivacyPolicy = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    return (
        <div className="privacy-container">
            {/* Hero Section */}
            <div className="privacy-hero">
                <div className="privacy-text">
                    <h1>Your Privacy, Our Priority</h1>
                    <h2>Our commitment to safeguarding your data.</h2>
                </div>
                <div className="video-container">
                    <video autoPlay loop muted>
                        <source src={privacypolicyvideo} type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* Privacy Policy Content */}
            <div className="privacy-content">
                <h3>Privacy Policy</h3>
                <p>
                    At Aakam 360, we are committed to protecting your privacy and ensuring the security of your personal information.
                </p>
                <div className="privacy-list">
                    {sections.map((section, index) => (
                        <div key={index} className="privacy-item">
                            <button className="privacy-title" onClick={() => toggleSection(index)}>
                                {section.title}
                                <span>{openSection === index ? '▲' : '▼'}</span>
                            </button>
                            {openSection === index && (
                                <p className="privacy-description">{section.content}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const sections = [
    {
        title: 'Collection of Personal Information',
        content: 'We may collect certain personal information such as your name, email, and phone number when you sign up or request information. We may also track browsing activity for a better experience.'
    },
    {
        title: 'Use of Personal Information',
        content: 'We use your data to improve our services and personalize your experience. We do not sell or rent your personal information to third parties.'
    },
    {
        title: 'Security of Personal Information',
        content: 'We implement industry-standard security measures, including SSL encryption, to protect your personal data from unauthorized access or misuse.'
    },
    {
        title: 'Use of Cookies',
        content: 'Cookies help us track your activity and improve user experience. You can disable cookies in your browser settings.'
    },
    {
        title: 'Links to Third-Party Websites',
        content: 'Our website may contain links to external sites. We are not responsible for their privacy policies, so we encourage reviewing them separately.'
    },
    {
        title: 'Changes to Privacy Policy',
        content: 'We may update our privacy policy periodically and will notify users of any changes. Continued use of our services implies acceptance of the new policy.'
    },
    {
        title: 'Contact Us',
        content: 'If you have any privacy concerns, contact us at info@aakam360.com.'
    }
];

export default PrivacyPolicy;
