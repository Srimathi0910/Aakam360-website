import React, { useState } from "react";
import './styles.css';
import BlogImage1 from "../src/img/Blog-Image-1.jpg";
import BlogImage2 from "../src/img/Blog-Image-2.jpg";
import BlogImage3 from "../src/img/Blog-Image-3.jpg";
import BlogImage4 from "../src/img/Blog-Image-4.jpg";
import BlogImage5 from "../src/img/Blog-Image-5.jpg";
import BlogImage6 from "../src/img/Blog-Image-6.jpg";
import BlogImage7 from "../src/img/Blog-Image-7.jpg";
import BlogImage8 from "../src/img/Blog-Image-8.jpg";



const blogPosts = [
  {
    id: 1,
    title: "The Role of AI & ML in Business Growth",
    image:BlogImage1,
    content: "Artificial Intelligence (AI) and Machine Learning (ML) are transforming industries by automating tasks, analyzing massive datasets, and making intelligent decisions. Businesses leverage AI for customer service chatbots, personalized recommendations, fraud detection, and predictive analytics.",
    excerpt: "Artificial Intelligence (AI) and Machine Learning (ML) are transforming industries by automating tasks, analyzing massive datasets, and making intelligent decisions. ...",
  },
  {
    id: 2,
    title: "How Blockchain is Revolutionizing Data Security",
    image: BlogImage2,
    content: "Blockchain technology ensures data security, transparency, and trust by using decentralized and immutable ledgers. Unlike traditional databases, blockchain prevents unauthorized modifications, making it ideal for financial transactions, supply chain management, and identity verification.",
    excerpt: "Blockchain technology ensures data security, transparency, and trust by using decentralized and immutable ledgers. Unlike traditional databases, blockchain prevents unauthorized modifications,...",
  },
  {
    id: 3,
    title: "Top Tech Skills in Demand for 2025",
    image: BlogImage3,
    content: "The job market is evolving rapidly, and professionals must stay ahead by acquiring high-demand skills. Key tech skills for 2025 include artificial intelligence, cybersecurity, cloud computing, data science, and blockchain development. Employers are also looking for expertise in DevOps, UI/UX design, and automation technologies.",
    excerpt: "The job market is evolving rapidly, and professionals must stay ahead by acquiring high-demand skills. Key tech skills for 2025 include artificial intelligence, cybersecurity, cloud computing, data science...",
  },
  {
    id: 4,
    title: "The Future of Work: Remote Work vs. Hybrid Models",
    image: BlogImage4,
    content: "The COVID-19 pandemic accelerated the shift towards remote work, and many companies are now adopting hybrid work models. While remote work offers flexibility and reduced operational costs, hybrid models balance in-office collaboration and work-from-home convenience. ",
    excerpt: "The COVID-19 pandemic accelerated the shift towards remote work, and many companies are now adopting hybrid work models. While remote work offers flexibility ...",
  },
  {
    id: 5,
    title: "Cybersecurity Best Practices for Businesses in 2025",
    image: BlogImage5,
    content: "As cyber threats become more sophisticated, businesses must implement robust cybersecurity measures. Key strategies include multi-factor authentication, regular software updates, and employee training on phishing attacks.",
    excerpt: "As cyber threats become more sophisticated, businesses must implement robust cybersecurity measures. Key strategies include multi-factor ...",
  },
  {
    id: 6,
    title: " Green Technology: How Companies Are Going Carbon-Neutral",
    image:BlogImage6,
    content: "Sustainability is a growing priority for businesses worldwide. Companies are investing in renewable energy sources, eco-friendly supply chains, and carbon offset programs to reduce their environmental impact.",
    excerpt: "Sustainability is a growing priority for businesses worldwide. Companies are investing in renewable energy sources, eco-friendly...",
  },
  {
    id: 7,
    title: "How AI Chatbots Are Enhancing Customer Experience",
    image:BlogImage7,
    content: "AI chatbots are revolutionizing customer service by providing instant responses, 24/7 support, and personalized interactions. Businesses use chatbots to handle inquiries, process orders, and offer product recommendations. ",
    excerpt: "AI chatbots are revolutionizing customer service by providing instant responses, 24/7 support, and personalized interactions. Businesses...",
  },
  {
    id: 8,
    title: "How Vertical Farming Can Solve Urban Food Crises",
    image: BlogImage8,
    content: "Urban areas face challenges in food production due to limited space and increasing populations. Vertical farming offers a sustainable solution by using stacked layers to grow crops in controlled environments.",
    excerpt: "Urban areas face challenges in food production due to limited space and increasing populations. Vertical farming offers a sustainable solution...",
  },
];

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="blog-container">
      <h1 className="blog-title">Aakam360 Blog</h1>
      {selectedPost ? (
        <div className="blog-detail">
          <button className="back-button" onClick={() => setSelectedPost(null)}>← Back</button>
          <h2>{selectedPost.title}</h2>
          <img src={selectedPost.image} alt={selectedPost.title}/>
          <p>{selectedPost.content}</p>
        </div>
      ) : (
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card" onClick={() => setSelectedPost(post)}>
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
