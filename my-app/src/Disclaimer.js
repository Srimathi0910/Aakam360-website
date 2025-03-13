import React, { useState } from 'react';
import './styles.css';

const Disclaimer = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    return (
        <div className="disclaimer-container">
            {/* Hero Section */}
            <div className="disclaimer-hero">
                <h1>Disclaimer</h1>
                <h2>Understanding our responsibilities and limitations</h2>
            </div>

            {/* Disclaimer Content */}
            <div className="disclaimer-content">
                <h3>Aakam360 Disclaimer</h3>
                <p>
                    The information provided on this website is for general informational purposes only. Please read the following sections carefully.
                </p>

                <div className="disclaimer-list">
                    {sections.map((section, index) => (
                        <div key={index} className="disclaimer-item">
                            <button className="disclaimer-title" onClick={() => toggleSection(index)}>
                                {section.title}
                                <span>{openSection === index ? '▲' : '▼'}</span>
                            </button>
                            {openSection === index && (
                                <p className="disclaimer-description">{section.content}</p>
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
        title: 'General Information',
        content: 'The content on this website is for informational purposes only and should not be considered as professional advice. Users should seek expert guidance where necessary.'
    },
    {
        title: 'Accuracy of Information',
        content: 'We strive to ensure that the information provided is accurate and up-to-date, but we make no warranties or guarantees regarding its completeness or reliability.'
    },
    {
        title: 'Third-Party Links',
        content: 'Our website may contain links to external sites that are not operated by us. We are not responsible for the content or privacy practices of these websites.'
    },
    {
        title: 'Limitation of Liability',
        content: 'Aakam360 shall not be held liable for any direct, indirect, or incidental damages resulting from the use of this website.'
    },
    {
        title: 'Changes to Disclaimer',
        content: 'We may update this disclaimer from time to time. Continued use of the website constitutes acceptance of the revised terms.'
    },
    {
        title: 'Contact Information',
        content: 'For any queries regarding this disclaimer, please contact us at info@aakam360.com.'
    }
];

export default Disclaimer;
