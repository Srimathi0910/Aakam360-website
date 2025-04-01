const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const fs = require("fs");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Ensure 'uploads/' directory exists
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// MongoDB Connection (Use only one)
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Contact Form Schema
const formSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    subject: String,
    message: String,
  },
  { collection: "ContactForm" }
);
const Form = mongoose.model("ContactForm", formSchema);

// Job Application Schema
const jobApplicationSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  mobileNumber: String,
  role: String,
  resume: String,
  agreedToTerms: Boolean,
});
const JobApplication = mongoose.model("JobApplicationForm", jobApplicationSchema);

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// API Routes
app.post("/api/forms", async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving form data" });
  }
});

app.post("/api/job-applications", upload.single("resume"), async (req, res) => {
  try {
    const { fullName, email, mobileNumber, role, agreedToTerms } = req.body;
    const resumePath = req.file?.path || null;

    const newJobApplication = new JobApplication({
      fullName,
      email,
      mobileNumber,
      role,
      resume: resumePath,
      agreedToTerms: agreedToTerms === "true",
    });

    await newJobApplication.save();
    res.status(201).json({ message: "Job application submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving job application" });
  }
});

// Industry Join Form Schema
const industryJoinSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    mobileNumber: String,
    companyName: String,
    companyWebsite: String,
    employeeSize: Number,
    domains: String,
    aboutCompany: String,
    agreedToTerms: Boolean,
  },
  { collection: "IndustryJoinForms" }
);
const IndustryJoin = mongoose.model("IndustryJoinForms", industryJoinSchema);

app.post("/api/industry-join", async (req, res) => {
  try {
    const newEntry = new IndustryJoin(req.body);
    await newEntry.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving form data" });
  }
});

// Institution Form Schema
const institutionSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  designation: String,
  institutionName: String,
  location: String,
  district: String,
  state: String,
  domains: String,
  email: String,
  mobileNumber: String,
  termsAccepted: Boolean,
});
const InstitutionJoinForm = mongoose.model("InstitutionJoinForms", institutionSchema);

app.post("/api/institution-join", async (req, res) => {
  try {
    const newForm = new InstitutionJoinForm(req.body);
    await newForm.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving form data" });
  }
});

// Training Partner Form Schema
const trainingPartnerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  designation: String,
  location: String,
  district: String,
  state: String,
  domains: String,
  contact: String,
  specialization: String,
  portfolioLink: String,
  trainingDetails: String,
  termsAccepted: Boolean,
});
const TrainingPartner = mongoose.model("TrainingPartnerForms", trainingPartnerSchema);

app.post("/api/training-partner", async (req, res) => {
  try {
    const newForm = new TrainingPartner(req.body);
    await newForm.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving form data" });
  }
});

// Startup Form Schema
const startupSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  contact: String,
  designation: String,
  startupName: String,
  website: String,
  registrationNumber: String,
  establishmentYear: String,
  startupStage: String,
  industrySector: String,
  location: String,
  district: String,
  state: String,
  fundingStatus: String,
  collaboration: String,
  support: String,
  pitchDeck: String,
});
const Startup = mongoose.model("startupforms", startupSchema);

app.post("/api/startup-form", upload.single("pitchDeck"), async (req, res) => {
  try {
    const newEntry = new Startup({ ...req.body, pitchDeck: req.file?.path });
    await newEntry.save();
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Internship Application Schema
const internshipApplicationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  contactNumber: String,
  college: String,
  degree: String,
  graduationYear: Number,
  technicalSkills: String,
  internshipDomain: String,
  availability: String,
  resume: String,
  reason: String,
  termsAccepted: Boolean,
});

const InternshipApplication = mongoose.model("InternshipForms", internshipApplicationSchema);

// API Endpoint to Handle Internship Applications
app.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    const { firstName, lastName, email, contactNumber, college, degree, graduationYear, technicalSkills, internshipDomain, availability, reason, termsAccepted } = req.body;

    const newApplication = new InternshipApplication({
      firstName,
      lastName,
      email,
      contactNumber,
      college,
      degree,
      graduationYear,
      technicalSkills,
      internshipDomain,
      availability,
      resume: req.file?.path || "",
      reason,
      termsAccepted: termsAccepted === "true",
    });

    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving application" });
  }
});


// get a quote  Schema
const QuoteSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobileNumber: String,
  country: String,
  state: String,
  city: String,
  purposeofEnquiry: String,
  message: String,
  requirements: String, // File path
  termsAccepted: Boolean,
});

const Quote = mongoose.model("Quote", QuoteSchema);

// API Endpoint to Handle Form Submission
app.post("/api/get-a-quote", upload.single("requirements"), async (req, res) => {
  try {
    const { name, email, mobileNumber, country, state, city, purposeofEnquiry, message, termsAccepted } = req.body;
    const requirements = req.file ? req.file.path : null;

    const newQuote = new Quote({
      name,
      email,
      mobileNumber,
      country,
      state,
      city,
      purposeofEnquiry,
      message,
      requirements,
      termsAccepted,
    });

    await newQuote.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});






// email code
app.use(bodyParser.json());
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Handle form submission
app.post('/send-contact', async (req, res) => {
    const { fullName, email, subject, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'e21it050@shanmugha.edu.in,srimathinagarajan0910@gmail.com',
        subject: `New Contact Form Submission: ${subject}`,
        text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Form submitted successfuly!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
});
// industry send mail
app.post("/sendmail-industry-join", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    mobileNumber,
    companyName,
    companyWebsite,
    employeeSize,
    domains,
    aboutCompany,
    agreedToTerms,
  } = req.body;

  const fullName = `${firstName} ${lastName}`;

  const mailOptions = {
    from: email, // Sender's email
    to: "e21it050@shanmugha.edu.in", // Receiver's email
    subject: `New Industry Join Request from ${fullName}`,
    text: `
      Name: ${fullName}
      Email: ${email}
      Mobile Number: ${mobileNumber}
      Company Name: ${companyName}
      Company Website: ${companyWebsite}
      Employee Size: ${employeeSize}
      Domains: ${domains}
      About Company: ${aboutCompany}
      Agreed to Terms: ${agreedToTerms ? "Yes" : "No"}
    `,
  };

 

  

  try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Form submitted successfuly!' });
  } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});



// institution email send
app.post("/sendmail-institution-join", async (req, res) => {
  const {
    firstName,
    lastName,
    designation,
    institutionName,
    location,
    district,
    state,
    domains,
    email,
    mobileNumber,
    termsAccepted,
  } = req.body;

  const fullName = `${firstName} ${lastName}`;

  const mailOptions = {
    from: email, // Sender's email
    to: "e21it050@shanmugha.edu.in", // Receiver's email
    subject: `New Institution Join Request from ${fullName}`,
    text: `
      Name: ${fullName}
      Designation: ${designation}
      Institution Name: ${institutionName}
      Location: ${location}
      District: ${district}
      State: ${state}
      Domains: ${domains}
      Email: ${email}
      Mobile Number: ${mobileNumber}
      Agreed to Terms: ${termsAccepted ? "Yes" : "No"}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});
// Training sent mail
app.post("/sendmail-training-partner", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    designation,
    location,
    district,
    state,
    domains,
    contact,
    specialization,
    portfolioLink,
    trainingDetails,
    termsAccepted,
  } = req.body;

  const fullName = `${firstName} ${lastName}`;

  const mailOptions = {
    from: email, // Sender's email
    to: "e21it050@shanmugha.edu.in", // Receiver's email
    subject: `New Training Partner Request from ${fullName}`,
    text: `
      Name: ${fullName}
      Designation: ${designation}
      Location: ${location}
      District: ${district}
      State: ${state}
      Domains: ${domains}
      Email: ${email}
      Contact: ${contact}
      Specialization: ${specialization}
      Portfolio Link: ${portfolioLink}
      Training Details: ${trainingDetails}
      Agreed to Terms: ${termsAccepted ? "Yes" : "No"}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});


// Startups mail
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}


// Handle Startup Registration Form Submission
app.post("/sendmail-startup-form", upload.single("pitchDeck"), async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      contact,
      designation,
      startupName,
      website,
      registrationNumber,
      establishmentYear,
      startupStage,
      industrySector,
      location,
      district,
      state,
      fundingStatus,
      collaboration,
      support,
      termsAccepted,
    } = req.body;

    const fullName = `${firstName} ${lastName}`;
    const pitchDeckPath = req.file ? req.file.path : null;

    const mailOptions = {
      from:email ,///`"${fullName}" <${email}>`
      to: "e21it050@shanmugha.edu.in",
      subject: `New Startup Application from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Contact: ${contact}
        Designation: ${designation}
        Startup Name: ${startupName}
        Website: ${website}
        Registration Number: ${registrationNumber}
        Establishment Year: ${establishmentYear}
        Startup Stage: ${startupStage}
        Industry Sector: ${industrySector}
        Location: ${location}
        District: ${district}
        State: ${state}
        Funding Status: ${fundingStatus}
        Collaboration: ${collaboration}
        Support Needed: ${support}
        Pitch Deck Attached: ${pitchDeckPath ? "Yes" : "No"}
        Agreed to Terms: ${termsAccepted === "true" ? "Yes" : "No"}
      `,
      attachments: pitchDeckPath
        ? [
            {
              filename: path.basename(pitchDeckPath),
              path: pitchDeckPath,
              contentType: "application/pdf",
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");

    res.status(200).json({ success: true, message: "Form submitted successfully!" });

    // Delete the file after 1 minute (Optional)
    setTimeout(() => {
      if (pitchDeckPath) {
        fs.unlink(pitchDeckPath, (err) => {
          if (err) console.error("Error deleting file:", err);
          else console.log("Pitch Deck deleted successfully.");
        });
      }
    }, 60000);
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});



// Apply internship mail



// Handle Internship Form Submission
app.post("/sendmail-apply-internship", upload.single("resume"), async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      contactNumber,
      college,
      degree,
      graduationYear,
      technicalSkills,
      internshipDomain,
      availability,
      reason,
      termsAccepted,
    } = req.body;

    const fullName = `${firstName} ${lastName}`;
    const resumePath = req.file ? req.file.path : null;

    const mailOptions = {
      from: email,//`"${fullName}" <${email}>`, // Proper sender format
      to: "e21it050@shanmugha.edu.in", // Recipient
      subject: `New Internship Application from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Contact Number: ${contactNumber}
        College: ${college}
        Degree: ${degree}
        Graduation Year: ${graduationYear}
        Technical Skills: ${technicalSkills}
        Internship Domain: ${internshipDomain}
        Availability: ${availability}
        Reason for Applying: ${reason}
        Resume Attached: ${resumePath ? "Yes" : "No"}
        Agreed to Terms: ${termsAccepted === "true" ? "Yes" : "No"}
      `,
      attachments: resumePath
        ? [
            {
              filename: path.basename(resumePath),
              path: resumePath,
              contentType: "application/pdf", // Ensure correct format
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");

    res.status(200).json({ success: true, message: "Form submitted successfully!" });

    // Delete the file after 1 minute (Optional)
    setTimeout(() => {
      if (resumePath) {
        fs.unlink(resumePath, (err) => {
          if (err) console.error("Error deleting file:", err);
          else console.log("Resume deleted successfully.");
        });
      }
    }, 60000);
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});



// job application send mail
app.post("/api/sendmail-job-applications", upload.single("resume"), async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.file);

    const { fullName, email, mobileNumber, role, agreedToTerms } = req.body;
    const resumePath = req.file ? req.file.path : null;

    // Ensure all required fields are filled
    if (!fullName || !email || !mobileNumber || !role || agreedToTerms === undefined) {
      console.log("Missing Fields:", { fullName, email, mobileNumber, role, agreedToTerms });
      return res.status(400).json({ error: "All fields are required" });
    }

    // Convert agreedToTerms to Boolean
    const agreed = agreedToTerms === "true" || agreedToTerms === true;

    // Email Options
    const mailOptions = {
      from: email,
      to: "e21it050@shanmugha.edu.in", // HR Email
      subject: `New Job Application - ${role}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Mobile: ${mobileNumber}
        Role Applied: ${role}
        Agreed to Terms: ${agreed ? "Yes" : "No"}
      `,
      attachments: req.file
        ? [{ filename: req.file.originalname, path: req.file.path }]
        : [],
    };

    // Send Email
    await transporter.sendMail(mailOptions);
    console.log("Email Sent Successfully");

    res.status(200).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Error submitting job application:", error);
    res.status(500).json({ error: "Error submitting application. Please try again later." });
  }
});


// get a quote send mail
app.post("/sendmail-get-a-quote", upload.single("requirements"), async (req, res) => {
  try {
    const { name, email, mobileNumber, country, state, city, purposeofEnquiry, message, termsAccepted } = req.body;
    const file = req.file;

    if (!name || !email || !mobileNumber || !country || !state || !city || !purposeofEnquiry || !message || termsAccepted === undefined) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Convert termsAccepted to Boolean
    const termsAcceptedBool = termsAccepted === "true" || termsAccepted === true;

    // Prepare email options
    let mailOptions = {
      from: email, // User's email
      to: "e21it050@shanmugha.edu.in", // Change to your recipient
      subject: `New Enquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Mobile: ${mobileNumber}
        Country: ${country}
        State: ${state}
        City: ${city}
        Purpose of Enquiry: ${purposeofEnquiry}
        Message: ${message}
        Terms Accepted: ${termsAcceptedBool ? "Yes" : "No"}
      `,
      attachments: file
        ? [{ filename: file.originalname, path: file.path }] // Attach file
        : [],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Enquiry submitted successfully!" });
  } catch (error) {
    console.error("Error submitting enquiry:", error);
    res.status(500).json({ error: "Error submitting enquiry. Please try again later." });
  }
});