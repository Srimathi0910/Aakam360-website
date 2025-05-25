// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from './ThemeContext';
// import Lottie from "lottie-react"; 
// import { useState, useEffect } from "react";
// import loadingAnimation from "../src/img/Loading.json"; // Correct path
// import './styles.css';
// import Header from './Header';
// import Allone from './Allone';
// import Our_5i from './Our_5i';
// import Do from './Do';
// import Our_mentors from './Our_mentors';
// import Our_partners from './Our_partners';
// import Our_usp from './Our_usp';
// import Our_outcomes from './Our_outcomes';
// import History from './History';
// import Events from './Events';
// import Career from './Career';
// import Technology from './Technology';
// import Feedback from './Feedback';
// import Contact from './Contact';
// import Footer from './Footer';
// import Banking from './Banking';
// import ConsumerGoodsDistribution from './ConsumerGoodsDistribution';
// import CommunicationMedia from './CommunicationMedia';
// import Education from './Education';
// import EnergyResource from './EnergyResource';
// import HealthCare  from'./HealthCare';
// import HighTech from './HighTech';
// import LifeScience from './LifeScience';
// import Manufacturing from './Manufacturing';
// import PublicServices from './PublicServices';
// import Retail from './Retail';
// import TravelAndLogistics from './TravelAndLogistics';
// import Cloud from './Cloud';
// import BlockChain from './BlockChain';
// import IoT from './IoT';
// import Metaverse from './Metaverse';
// import FutureOfWork from './FutureOfWork';
// import HealthWellness from './HealthWellness';
// import Sustainability from './Sustainability';
// import AIML from './AIML';
// import Cybersecurity from './Cybersecurity';
// import PrivacyPolicy from './PrivacyPolicy';
// import Disclaimer from './Disclaimer';
// import Our_5i_explain from'./Our_5i_explain';
// import ScrollToTop from './ScrollToTop'; 
// import Industry_join from './Industry_join';
// import Institution_join from './Institution_join';
// import TrainingAndPartner from './TrainingAndPartner';
// import StartupsForm from './StartupsForm';
// import ApplyInternshipForm from './ApplyInternshipForm';
// import LearnMore from './LearnMore';
// import BlogPage from './BlogPage';
// import Services1 from './Services1';
// import Services2 from './Services2';
// import Services3 from './Services3';
// import Services4 from './Services4';
// import Services5 from './Services5';
// import JobApplyForm from './JobApplyForm';
// import Message from './Message';
// import Message1 from './Message1';
// import GetAQuote from './GetAQuote';
// import Infrastructure from'./Infrastructure';
// import InnovationForm from './InnovationForm';
// import LoginPage from'./LoginPage';
// import SignUp from './SignUp';



// // import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';




// const App = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate content loading time
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000); // Adjust time as needed
//   }, []);
//   return (
//     <ThemeProvider>
//       {loading ? (
//         <div className="loader-container">
//           <Lottie animationData={loadingAnimation} loop={true} className="lottie-animation" />
//         </div>
//       ) : (
//       <Router>
//         <ScrollToTop />
//         <Header />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Allone />} />  {/* Home section */}
//             <Route path="/our-5i" element={<Our_5i />} />
//             <Route path="/our-5i-explain" element={<Our_5i_explain />} />
//             <Route path="/career" element={<Career />} />
//             <Route path="/technology" element={<Technology />} />
//             <Route path="/feedback" element={<Feedback />} />
//             <Route path="/do" element={<Do />} />
//             <Route path="/our-mentors" element={<Our_mentors />} />
//             <Route path="/our-partners" element={<Our_partners />} />
//             <Route path="/our-usp" element={<Our_usp />} />
//             <Route path="/our-outcomes" element={<Our_outcomes />} />
//             <Route path="/history" element={<History />} />
//             <Route path="/events" element={<Events />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/banking" element={<Banking />} />
//             <Route path="/consumerGoods" element={<ConsumerGoodsDistribution />} />
//             <Route path="/communication-media" element={<CommunicationMedia />} />
//             <Route path="/education" element={<Education />} />
//             <Route path="/energy-resourse" element={<EnergyResource />} />
//             <Route path="/healthcare" element={<HealthCare  />} />
//             <Route path="/high-tech" element={<HighTech  />} />
//             <Route path="/life-science" element={<LifeScience />} />
//             <Route path="/manufacturing" element={<Manufacturing />} />
//             <Route path="/public-services" element={<PublicServices />} />
//             <Route path="/retail" element={<Retail />} />
//             <Route path="/travel-logistics" element={<TravelAndLogistics />} />
//             <Route path="/cloud" element={<Cloud />} />
//             <Route path="/blockchain" element={<BlockChain />} />
//             <Route path="/iot" element={<IoT />} />
//             <Route path="/metaverse" element={<Metaverse />} />
//             <Route path="/future-of-Work"element={<FutureOfWork />}/>
//             <Route path="/health-wellness"element={<HealthWellness />}/>
//             <Route path="/sustainability"element={<Sustainability />}/>
//             <Route path="/ai-ml"element={<AIML />}/>
//             <Route path="/cybersecurity"element={<Cybersecurity />}/>
//             <Route path="/privacy-policy"element={<PrivacyPolicy />}/>
//             <Route path="/disclaimer"element={<Disclaimer />}/>
//             <Route path="/industry-apply-form"element={<Industry_join />}/>
//             <Route path="/institution-apply-form"element={<Institution_join />}/>
//             <Route path="/training-partner-apply-form"element={<TrainingAndPartner />}/>
//             <Route path="/startup-apply-form"element={<StartupsForm />}/>
//             <Route path="/apply-internship-form"element={<ApplyInternshipForm />}/>
//             <Route path="/LearnMore"element={<LearnMore />}/>
//             <Route path="/blog"element={<BlogPage/>}/>
//             <Route path="/Business-Consulting-Solutions"element={<Services1/>}/>
//             <Route path="/Technology-Innovation"element={<Services2/>}/>
//             <Route path="/Education-Training"element={<Services3/>}/>
//             <Route path="/Mentorship-Career-Guidance"element={<Services4/>}/>
//             <Route path="/Research-Development"element={<Services5/>}/>
//             <Route path="/job-apply-form"element={<JobApplyForm/>}/>
//             <Route path="/submitted"element={<Message/>}/>
//             <Route path="/Applied"element={<Message1/>}/>
//             <Route path="/getaquote"element={<GetAQuote/>}/>
//             <Route path="/Infrastructure"element={<Infrastructure/>}/>
//             <Route path="/InnovationIdeaForm"element={<InnovationForm/>}/>
//             <Route path="/LoginPage"element={<LoginPage />} />
//             <Route path="/SignUp"element={<SignUp />} />
            

            


            
            


            
//           </Routes>
//         </div>
//         <Footer />
//     </Router>
//       )}
//     </ThemeProvider>
    
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from './ThemeContext';
// import Lottie from "lottie-react";
// import loadingAnimation from "../src/img/Loading.json";
// import './styles.css';

// // Components
// import Header from './Header';
// import Allone from './Allone';
// import Our_5i from './Our_5i';
// import Do from './Do';
// import Our_mentors from './Our_mentors';
// import Our_partners from './Our_partners';
// import Our_usp from './Our_usp';
// import Our_outcomes from './Our_outcomes';
// import History from './History';
// import Events from './Events';
// import Career from './Career';
// import Technology from './Technology';
// import Feedback from './Feedback';
// import Contact from './Contact';
// import Footer from './Footer';
// import Banking from './Banking';
// import ConsumerGoodsDistribution from './ConsumerGoodsDistribution';
// import CommunicationMedia from './CommunicationMedia';
// import Education from './Education';
// import EnergyResource from './EnergyResource';
// import HealthCare from './HealthCare';
// import HighTech from './HighTech';
// import LifeScience from './LifeScience';
// import Manufacturing from './Manufacturing';
// import PublicServices from './PublicServices';
// import Retail from './Retail';
// import TravelAndLogistics from './TravelAndLogistics';
// import Cloud from './Cloud';
// import BlockChain from './BlockChain';
// import IoT from './IoT';
// import Metaverse from './Metaverse';
// import FutureOfWork from './FutureOfWork';
// import HealthWellness from './HealthWellness';
// import Sustainability from './Sustainability';
// import AIML from './AIML';
// import Cybersecurity from './Cybersecurity';
// import PrivacyPolicy from './PrivacyPolicy';
// import Disclaimer from './Disclaimer';
// import Our_5i_explain from './Our_5i_explain';
// import ScrollToTop from './ScrollToTop';
// import Industry_join from './Industry_join';
// import Institution_join from './Institution_join';
// import TrainingAndPartner from './TrainingAndPartner';
// import StartupsForm from './StartupsForm';
// import ApplyInternshipForm from './ApplyInternshipForm';
// import LearnMore from './LearnMore';
// import BlogPage from './BlogPage';
// import Services1 from './Services1';
// import Services2 from './Services2';
// import Services3 from './Services3';
// import Services4 from './Services4';
// import Services5 from './Services5';
// import JobApplyForm from './JobApplyForm';
// import Message from './Message';
// import Message1 from './Message1';
// import GetAQuote from './GetAQuote';
// import Infrastructure from './Infrastructure';
// import InnovationForm from './InnovationForm';
// import LoginPage from './LoginPage';
// import SignUp from './SignUp';

// const App = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   }, []);

//   if (loading) {
//     return (
//       <div className="loader-container">
//         <Lottie animationData={loadingAnimation} loop={true} className="lottie-animation" />
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <ThemeProvider>
//         {/* <ScrollToTop />  */}
//         <Header />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Allone />} />
//             <Route path="/our-5i" element={<Our_5i />} />
//             <Route path="/our-5i-explain" element={<Our_5i_explain />} />
//             <Route path="/career" element={<Career />} />
//             <Route path="/technology" element={<Technology />} />
//             <Route path="/feedback" element={<Feedback />} />
//             <Route path="/do" element={<Do />} />
//             <Route path="/our-mentors" element={<Our_mentors />} />
//             <Route path="/our-partners" element={<Our_partners />} />
//             <Route path="/our-usp" element={<Our_usp />} />
//             <Route path="/our-outcomes" element={<Our_outcomes />} />
//             <Route path="/history" element={<History />} />
//             <Route path="/events" element={<Events />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/banking" element={<Banking />} />
//             <Route path="/consumerGoods" element={<ConsumerGoodsDistribution />} />
//             <Route path="/communication-media" element={<CommunicationMedia />} />
//             <Route path="/education" element={<Education />} />
//             <Route path="/energy-resourse" element={<EnergyResource />} />
//             <Route path="/healthcare" element={<HealthCare />} />
//             <Route path="/high-tech" element={<HighTech />} />
//             <Route path="/life-science" element={<LifeScience />} />
//             <Route path="/manufacturing" element={<Manufacturing />} />
//             <Route path="/public-services" element={<PublicServices />} />
//             <Route path="/retail" element={<Retail />} />
//             <Route path="/travel-logistics" element={<TravelAndLogistics />} />
//             <Route path="/cloud" element={<Cloud />} />
//             <Route path="/blockchain" element={<BlockChain />} />
//             <Route path="/iot" element={<IoT />} />
//             <Route path="/metaverse" element={<Metaverse />} />
//             <Route path="/future-of-Work" element={<FutureOfWork />} />
//             <Route path="/health-wellness" element={<HealthWellness />} />
//             <Route path="/sustainability" element={<Sustainability />} />
//             <Route path="/ai-ml" element={<AIML />} />
//             <Route path="/cybersecurity" element={<Cybersecurity />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/disclaimer" element={<Disclaimer />} />
//             <Route path="/industry-apply-form" element={<Industry_join />} />
//             <Route path="/institution-apply-form" element={<Institution_join />} />
//             <Route path="/training-partner-apply-form" element={<TrainingAndPartner />} />
//             <Route path="/startup-apply-form" element={<StartupsForm />} />
//             <Route path="/apply-internship-form" element={<ApplyInternshipForm />} />
//             <Route path="/LearnMore" element={<LearnMore />} />
//             <Route path="/blog" element={<BlogPage />} />
//             <Route path="/Business-Consulting-Solutions" element={<Services1 />} />
//             <Route path="/Technology-Innovation" element={<Services2 />} />
//             <Route path="/Education-Training" element={<Services3 />} />
//             <Route path="/Mentorship-Career-Guidance" element={<Services4 />} />
//             <Route path="/Research-Development" element={<Services5 />} />
//             <Route path="/job-apply-form" element={<JobApplyForm />} />
//             <Route path="/submitted" element={<Message />} />
//             <Route path="/Applied" element={<Message1 />} />
//             <Route path="/getaquote" element={<GetAQuote />} />
//             <Route path="/Infrastructure" element={<Infrastructure />} />
//             <Route path="/InnovationIdeaForm" element={<InnovationForm />} />
//             <Route path="/LoginPage" element={<LoginPage />} />
//             <Route path="/SignUp" element={<SignUp />} />
//           </Routes>
//         </div>
//         {/* <Footer /> */}
//       </ThemeProvider>
//     </Router>
//   );
// };

// export default App;




import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lottie from 'lottie-react';
import loadingAnimation from "../src/img/Loading.json";

// Theme + Role Selector
import { ThemeProvider } from './ThemeContext';
import RoleSelector from './RoleSelector';

// Components
import Header from './Header';
import Allone from './Allone';
import Our_5i from './Our_5i';
import Do from './Do';
import Our_mentors from './Our_mentors';
import Our_partners from './Our_partners';
import Our_usp from './Our_usp';
import Our_outcomes from './Our_outcomes';
import History from './History';
import Events from './Events';
import Career from './Career';
import Technology from './Technology';
import Feedback from './Feedback';
import Contact from './Contact';
import Banking from './Banking';
import ConsumerGoodsDistribution from './ConsumerGoodsDistribution';
import CommunicationMedia from './CommunicationMedia';
import Education from './Education';
import EnergyResource from './EnergyResource';
import HealthCare from './HealthCare';
import HighTech from './HighTech';
import LifeScience from './LifeScience';
import Manufacturing from './Manufacturing';
import PublicServices from './PublicServices';
import Retail from './Retail';
import TravelAndLogistics from './TravelAndLogistics';
import Cloud from './Cloud';
import BlockChain from './BlockChain';
import IoT from './IoT';
import Metaverse from './Metaverse';
import FutureOfWork from './FutureOfWork';
import HealthWellness from './HealthWellness';
import Sustainability from './Sustainability';
import AIML from './AIML';
import Cybersecurity from './Cybersecurity';
import PrivacyPolicy from './PrivacyPolicy';
import Disclaimer from './Disclaimer';
import Our_5i_explain from './Our_5i_explain';
import Industry_join from './Industry_join';
import Institution_join from './Institution_join';
import TrainingAndPartner from './TrainingAndPartner';
import StartupsForm from './StartupsForm';
import ApplyInternshipForm from './ApplyInternshipForm';
import LearnMore from './LearnMore';
import BlogPage from './BlogPage';
import Services1 from './Services1';
import Services2 from './Services2';
import Services3 from './Services3';
import Services4 from './Services4';
import Services5 from './Services5';
import JobApplyForm from './JobApplyForm';
import Message from './Message';
import Message1 from './Message1';
import GetAQuote from './GetAQuote';
import Infrastructure from './Infrastructure';
import InnovationForm from './InnovationForm';
import LoginPage from './LoginPage';
import SignUp from './SignUp';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(sessionStorage.getItem('userRole'));

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleRoleSelection = (role) => {
    sessionStorage.setItem('userRole', role);
    setUserRole(role);
  };

  if (loading) {
    return (
      <div className="loader-container">
        <Lottie animationData={loadingAnimation} loop={true} className="lottie-animation" />
      </div>
    );
  }

  if (!userRole) {
    return <RoleSelector onSelectRole={handleRoleSelection} />;
  }

  return (
    <Router>
      <ThemeProvider>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Allone />} />
            <Route path="/our-5i" element={<Our_5i />} />
            <Route path="/our-5i-explain" element={<Our_5i_explain />} />
            <Route path="/career" element={<Career />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/do" element={<Do />} />
            <Route path="/our-mentors" element={<Our_mentors />} />
            <Route path="/our-partners" element={<Our_partners />} />
            <Route path="/our-usp" element={<Our_usp />} />
            <Route path="/our-outcomes" element={<Our_outcomes />} />
            <Route path="/history" element={<History />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/consumerGoods" element={<ConsumerGoodsDistribution />} />
            <Route path="/communication-media" element={<CommunicationMedia />} />
            <Route path="/education" element={<Education />} />
            <Route path="/energy-resourse" element={<EnergyResource />} />
            <Route path="/healthcare" element={<HealthCare />} />
            <Route path="/high-tech" element={<HighTech />} />
            <Route path="/life-science" element={<LifeScience />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/public-services" element={<PublicServices />} />
            <Route path="/retail" element={<Retail />} />
            <Route path="/travel-logistics" element={<TravelAndLogistics />} />
            <Route path="/cloud" element={<Cloud />} />
            <Route path="/blockchain" element={<BlockChain />} />
            <Route path="/iot" element={<IoT />} />
            <Route path="/metaverse" element={<Metaverse />} />
            <Route path="/future-of-Work" element={<FutureOfWork />} />
            <Route path="/health-wellness" element={<HealthWellness />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/ai-ml" element={<AIML />} />
            <Route path="/cybersecurity" element={<Cybersecurity />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/industry-apply-form" element={<Industry_join />} />
            <Route path="/institution-apply-form" element={<Institution_join />} />
            <Route path="/training-partner-apply-form" element={<TrainingAndPartner />} />
            <Route path="/startup-apply-form" element={<StartupsForm />} />
            <Route path="/apply-internship-form" element={<ApplyInternshipForm />} />
            <Route path="/LearnMore" element={<LearnMore />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/Business-Consulting-Solutions" element={<Services1 />} />
            <Route path="/Technology-Innovation" element={<Services2 />} />
            <Route path="/Education-Training" element={<Services3 />} />
            <Route path="/Mentorship-Career-Guidance" element={<Services4 />} />
            <Route path="/Research-Development" element={<Services5 />} />
            <Route path="/job-apply-form" element={<JobApplyForm />} />
            <Route path="/submitted" element={<Message />} />
            <Route path="/Applied" element={<Message1 />} />
            <Route path="/getaquote" element={<GetAQuote />} />
            <Route path="/Infrastructure" element={<Infrastructure />} />
            <Route path="/InnovationIdeaForm" element={<InnovationForm />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
