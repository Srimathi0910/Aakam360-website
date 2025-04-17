// import React, { useEffect } from 'react';

// const Chatbot = () => {
//   useEffect(() => {
//     // Step 1: Set chatbot configuration in the window object
//     window.embeddedChatbotConfig = {
//       chatbotId: "KWSarCgMSNolyqWmpy_xx",
//       domain: "www.chatbase.co"
//     };

//     // Step 2: Create script element
//     const script = document.createElement('script');
//     script.src = "https://www.chatbase.co/embed.min.js";
//     script.setAttribute("chatbotId", "KWSarCgMSNolyqWmpy_xx");
//     script.setAttribute("domain", "www.chatbase.co");
//     script.defer = true;

//     // Append the script to the document body
//     document.body.appendChild(script);

//     // Step 3: Clean up the script when the component unmounts
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []); // The empty dependency array ensures this effect runs only once

// };

// export default Chatbot;