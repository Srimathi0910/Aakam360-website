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
  startDate: String,     // Should be in the request
  endDate: String,       // Should be in the request
  resume: String,
  reason: String,
  termsAccepted: Boolean,
});

const InternshipApplication = mongoose.model("InternshipForms", internshipApplicationSchema);

// API Endpoint to Handle Internship Applications
app.post("/apply", upload.single("resume"), async (req, res) => {
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
      startDate,          // ✅ Now properly extracted
      endDate,            // ✅ Now properly extracted
      reason,
      termsAccepted,
    } = req.body;

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
      startDate,
      endDate,
      resume: req.file?.path || "",
      reason,
      termsAccepted: termsAccepted === "true",
    });

    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Error saving application:", error);
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

// Handle form submission contact form
app.post('/send-contact', async (req, res) => {
  const { fullName, email, subject, message } = req.body;

  // Email to Admin
  const adminMailOptions = {
      from: {
          name: 'Aakam360 Contact Form',
          address: 'srimathinagarajan2003@gmail.com'
      },
      to: 'e21it050@shanmugha.edu.in',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
          <div style="color: #555; line-height: 1.6; font-family: Arial, sans-serif; font-size:15px">
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Email:</strong> <span style="text-decoration: none; color: #555;">${email}</span></p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong> ${message}</p>
          </div>`
  };

  // Thank You Email to Sender
  const senderMailOptions = {
      from: {
          name: 'Aakam360 Team',
          address: 'srimathinagarajan2003@gmail.com'
      },
      to: email,
      subject: 'Thank You for Contacting Aakam360!',
      html: `
          <div style="color: #333; line-height: 1.6; font-family: Arial, sans-serif; font-size:15px">
              <p>Hi ${fullName},</p>
              <p>Thank you for reaching out to Aakam360. We have received your message regarding "<strong>${subject}</strong>".</p>
              <p>Our team will get back to you shortly.</p>
              <p>Best Regards,<br>Aakam360 Team</p>
          </div>`
  };

  try {
      // Send to admin
      await transporter.sendMail(adminMailOptions);

      // Send thank you to sender
      await transporter.sendMail(senderMailOptions);

      res.status(200).json({ success: true, message: 'Form submitted successfully!' });
  } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});


// quote mail send
app.post("/sendmail-get-a-quote", upload.single("requirements"), async (req, res) => {
  try {
    const {
      name,
      email,
      mobileNumber,
      country,
      state,
      city,
      purposeofEnquiry,
      message,
      termsAccepted
    } = req.body;
    const file = req.file;

    if (
      !name || !email || !mobileNumber || !country || !state || !city ||
      !purposeofEnquiry || !message || termsAccepted === undefined
    ) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const termsAcceptedBool = termsAccepted === "true" || termsAccepted === true;

    // Admin Email
    const mailOptions = {
      from: {
        name: 'Aakam360 Enquiry Form',
        address: 'srimathinagarajan2003@gmail.com'
      },
      to: "e21it050@shanmugha.edu.in",
      subject: `New Enquiry from ${name}`,
      html: `
        <div style="color: #555; font-family: Arial, sans-serif; line-height: 1.6;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobileNumber}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>State:</strong> ${state}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Purpose of Enquiry:</strong> ${purposeofEnquiry}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Terms Accepted:</strong> ${termsAcceptedBool ? "Yes" : "No"}</p>
        </div>
      `,
      attachments: file
        ? [{ filename: file.originalname, path: file.path }]
        : [],
    };

    // Thank You Email to Sender
    const thankYouMailOptions = {
      from: {
        name: 'Aakam360 Team',
        address: 'srimathinagarajan2003@gmail.com'
      },
      to: email,
      subject: 'Thank You for Your Enquiry – Aakam360',
      html: `
        <div style="color: #333; font-family: Arial, sans-serif; line-height: 1.6;">
          <p>Hi ${name},</p>
          <p>Thank you for getting in touch with us through our "Get a Quote" form.</p>
          <p>We have received your enquiry about "<strong>${purposeofEnquiry}</strong>" and our team will respond to you shortly.</p>
          <p>If you have any additional information or questions, feel free to reply to this email.</p>
          <p>Warm regards,<br/>The Aakam360 Team</p>
        </div>
      `
    };

    // Send emails
    await transporter.sendMail(mailOptions);          // To Admin
    await transporter.sendMail(thankYouMailOptions);  // To Sender

    res.status(200).json({ message: "Enquiry submitted successfully!" });

  } catch (error) {
    console.error("Error submitting enquiry:", error);
    res.status(500).json({ error: "Error submitting enquiry. Please try again later." });
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

    const agreed = agreedToTerms === "true" || agreedToTerms === true;

    // Email to Admin (HR)
    const mailOptions = {
      from: {
        name: 'Aakam360 Job Application Form',
        address: 'srimathinagarajan2003@gmail.com'
      },
      to: "e21it050@shanmugha.edu.in", // HR Email
      subject: `New Job Application - ${role}`,
      html: `
        <div style="color: #555; font-family: Arial, sans-serif; line-height: 1.6;">
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobileNumber}</p>
          <p><strong>Role Applied:</strong> ${role}</p>
          <p><strong>Agreed to Terms:</strong> ${agreed ? "Yes" : "No"}</p>
        </div>
      `,
      attachments: req.file
        ? [{ filename: req.file.originalname, path: req.file.path }]
        : [],
    };

    // Thank You Email to Applicant
    const thankYouMailOptions = {
      from: {
        name: 'Aakam360 Careers',
        address: 'srimathinagarajan2003@gmail.com'
      },
      to: email,
      subject: `Thank You for Applying for ${role} – Aakam360`,
      html: `
        <div style="color: #333; font-family: Arial, sans-serif; line-height: 1.6;">
          <p>Hi ${fullName},</p>
          <p>Thank you for applying for the <strong>${role}</strong> position at <strong>Aakam360</strong>.</p>
          <p>We have received your application and our HR team will review your resume shortly. If your qualifications match our requirements, we will reach out to you for the next steps.</p>
          <p>In the meantime, if you have any questions, feel free to reply to this email.</p>
          <p>Best regards,<br/>Aakam360 Careers Team</p>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(mailOptions);          // To Admin (HR)
    await transporter.sendMail(thankYouMailOptions);  // To Applicant

    console.log("Emails sent successfully");
    res.status(200).json({ message: "Application submitted successfully!" });

  } catch (error) {
    console.error("Error submitting job application:", error);
    res.status(500).json({ error: "Error submitting application. Please try again later." });
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
    from: {
      name: 'Aakam360 Industry Form',
      address: 'srimathinagarajan2003@gmail.com'
    },
    to: "e21it050@shanmugha.edu.in", // Receiver's email (Admin/HR)
    subject: `New Industry Join Request from ${fullName}`,
    html: `
      <div style="color: #555; line-height: 1.6; font-family: Arial, sans-serif; font-size:15px">
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Company Website:</strong> ${companyWebsite}</p>
        <p><strong>Employee Size:</strong> ${employeeSize}</p>
        <p><strong>Domains:</strong> ${domains}</p>
        <p><strong>About Company:</strong> ${aboutCompany}</p>
        <p><strong>Agreed to Terms:</strong> ${agreedToTerms ? "Yes" : "No"}</p>
      </div>
    `,
  };

  // Thank You Email to the sender
  const thankYouMailOptions = {
    from: {
      name: 'Aakam360 Team',
      address: 'srimathinagarajan2003@gmail.com'
    },
    to: email,
    subject: `Thank You for Joining Aakam360 as an Industry Partner`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; font-size: 15px; line-height: 1.6;">
        <p>Dear ${fullName},</p>
        <p>Thank you for expressing interest in collaborating with <strong>Aakam360</strong> as an industry partner.</p>
        <p>We’ve received your details and our team will get back to you soon after reviewing the information.</p>
        <p>If you have any questions, feel free to reply to this email.</p>
        <p>Looking forward to a meaningful collaboration.</p>
        <p>Warm regards,<br/>Aakam360 Team</p>
      </div>
    `
  };

  try {
    // Send to admin
    await transporter.sendMail(mailOptions);

    // Send to applicant
    await transporter.sendMail(thankYouMailOptions);

    res.status(200).json({ success: true, message: 'Form submitted successfully!' });
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

  // Email to admin
  const mailOptions = {
    from: {
      name: 'Aakam360 Institution Form',
      address: 'srimathinagarajan2003@gmail.com'
    },
    to: "e21it050@shanmugha.edu.in", // Admin
    subject: `New Institution Join Request from ${fullName}`,
    html: `
      <div style="color: #555; font-family: Arial, sans-serif; line-height: 1.6;">
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Designation:</strong> ${designation}</p>
        <p><strong>Institution Name:</strong> ${institutionName}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>District:</strong> ${district}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Domains:</strong> ${domains}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
        <p><strong>Agreed to Terms:</strong> ${termsAccepted ? "Yes" : "No"}</p>
      </div>
    `
  };

  // Thank You Email to institution sender
  const thankYouMailOptions = {
    from: {
      name: 'Aakam360 Team',
      address: 'srimathinagarajan2003@gmail.com'
    },
    to: email, // Sender's email
    subject: `Thank You for Joining Aakam360 as an Institutional Partner`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; font-size: 15px; line-height: 1.6;">
        <p>Dear ${fullName},</p>
        <p>Thank you for your interest in joining <strong>Aakam360</strong> as an institutional partner.</p>
        <p>We have successfully received your details. Our team will review the information and get in touch with you shortly.</p>
        <p>If you have any questions or need further assistance, feel free to reach out to us.</p>
        <p>Warm regards,<br/>Aakam360 Team</p>
      </div>
    `
  };

  try {
    // Send to admin
    await transporter.sendMail(mailOptions);

    // Send to applicant
    await transporter.sendMail(thankYouMailOptions);

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

  // Email to admin
  const mailOptions = {
    from: {
      name: 'Aakam360 Training & Partner Form',
      address: 'srimathinagarajan2003@gmail.com'
    },
    to: "e21it050@shanmugha.edu.in", // Admin
    subject: `New Training Partner Request from ${fullName}`,
    html: `
      <div style="color: #555; font-family: Arial, sans-serif; line-height: 1.6;">
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Designation:</strong> ${designation}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>District:</strong> ${district}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Domains:</strong> ${domains}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Specialization:</strong> ${specialization}</p>
        <p><strong>Portfolio Link:</strong> <a href="${portfolioLink}">${portfolioLink}</a></p>
        <p><strong>Training Details:</strong> ${trainingDetails}</p>
        <p><strong>Agreed to Terms:</strong> ${termsAccepted ? "Yes" : "No"}</p>
      </div>
    `
  };

  // Thank You Email to the sender
  const thankYouMailOptions = {
    from: {
      name: 'Aakam360 Team',
      address: 'srimathinagarajan2003@gmail.com'
    },
    to: email, // Applicant's email
    subject: `Thank You for Joining as a Training Partner with Aakam360`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; font-size: 15px; line-height: 1.6;">
        <p>Dear ${fullName},</p>
        <p>Thank you for applying to become a <strong>Training Partner</strong> with <strong>Aakam360</strong>.</p>
        <p>We’ve successfully received your submission and our team will be reviewing your details shortly.</p>
        <p>We appreciate your interest and look forward to collaborating with you in empowering learners.</p>
        <p>If you have any queries, feel free to contact us.</p>
        <p>Warm regards,<br/>Aakam360 Team</p>
      </div>
    `
  };

  try {
    // Send to admin
    await transporter.sendMail(mailOptions);

    // Send thank-you email to applicant
    await transporter.sendMail(thankYouMailOptions);

    res.status(200).json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});



// Startups mail
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

    // === Email to Admin ===
    const adminMailOptions = {
      from: {
        name: 'Aakam360 Startup Form',
        address: 'srimathinagarajan2003@gmail.com'
      },
      to: "e21it050@shanmugha.edu.in",
      subject: `New Startup Application from ${fullName}`,
      html: `
        <div style="color: #555; font-family: Arial, sans-serif; line-height: 1.6;">
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact:</strong> ${contact}</p>
          <p><strong>Designation:</strong> ${designation}</p>
          <p><strong>Startup Name:</strong> ${startupName}</p>
          <p><strong>Website:</strong> <a href="${website}">${website}</a></p>
          <p><strong>Registration Number:</strong> ${registrationNumber}</p>
          <p><strong>Establishment Year:</strong> ${establishmentYear}</p>
          <p><strong>Startup Stage:</strong> ${startupStage}</p>
          <p><strong>Industry Sector:</strong> ${industrySector}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>District:</strong> ${district}</p>
          <p><strong>State:</strong> ${state}</p>
          <p><strong>Funding Status:</strong> ${fundingStatus}</p>
          <p><strong>Collaboration:</strong> ${collaboration}</p>
          <p><strong>Support Needed:</strong> ${support}</p>
          <p><strong>Pitch Deck Attached:</strong> ${pitchDeckPath ? "Yes" : "No"}</p>
          <p><strong>Agreed to Terms:</strong> ${termsAccepted === "true" ? "Yes" : "No"}</p>
        </div>
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

    // === Thank You Email to Applicant ===
    const thankYouMailOptions = {
      from: {
        name: 'Aakam360 Team',
        address: 'srimathinagarajan2003@gmail.com'
      },
      to: email,
      subject: `Thank You for Applying – Aakam360 Startup Program`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; font-size: 15px; line-height: 1.6;">
          <p>Dear ${fullName},</p>
          <p>Thank you for submitting your startup application to <strong>Aakam360</strong>.</p>
          <p>We’ve received your details and will review your pitch deck and proposal shortly.</p>
          <p>If you have any questions, feel free to reach out to us at <a href="mailto:srimathinagarajan2003@gmail.com">srimathinagarajan2003@gmail.com</a>.</p>
          <p>We appreciate your interest and wish you all the best on your startup journey!</p>
          <p>Warm regards,<br/>Aakam360 Team</p>
        </div>
      `
    };

    // Send admin mail
    await transporter.sendMail(adminMailOptions);

    // Send thank-you mail
    await transporter.sendMail(thankYouMailOptions);

    console.log("Emails sent successfully!");
    res.status(200).json({ success: true, message: "Form submitted successfully!" });

    // Delete the pitch deck after 1 minute
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
      startDate,
      endDate,
      reason,
      termsAccepted,
    } = req.body;

    const fullName = `${firstName} ${lastName}`;
    const resumePath = req.file ? req.file.path : null;
    const formattedAvailability =
      startDate && endDate
        ? `${startDate} to ${endDate}`
        : availability || "Not specified";

    // 1. Send mail to admin
    const adminMailOptions = {
      from: {
        name: "Aakam360 Internship Apply Form",
        address: "srimathinagarajan2003@gmail.com",
      },
      to: "e21it050@shanmugha.edu.in",
      subject: `New Internship Application from ${fullName}`,
      html: `
        <div style="color: #333; font-family: Arial, sans-serif; line-height: 1.6;">
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact Number:</strong> ${contactNumber}</p>
          <p><strong>College:</strong> ${college}</p>
          <p><strong>Degree:</strong> ${degree}</p>
          <p><strong>Graduation Year:</strong> ${graduationYear}</p>
          <p><strong>Technical Skills:</strong> ${technicalSkills}</p>
          <p><strong>Internship Domain:</strong> ${internshipDomain}</p>
          <p><strong>Availability:</strong> ${formattedAvailability}</p>
          <p><strong>Reason for Applying:</strong> ${reason}</p>
          <p><strong>Resume Attached:</strong> ${resumePath ? "Yes" : "No"}</p>
          <p><strong>Agreed to Terms:</strong> ${termsAccepted === "true" || termsAccepted === true ? "Yes" : "No"}</p>
        </div>
      `,
      attachments: resumePath
        ? [
            {
              filename: req.file.originalname || path.basename(resumePath),
              path: resumePath,
              contentType: req.file.mimetype || "application/octet-stream",
            },
          ]
        : [],
    };

    await transporter.sendMail(adminMailOptions);
    console.log("Admin email sent successfully!");

    // 2. Send thank-you confirmation mail to applicant
    const userMailOptions = {
      from: {
        name: "Aakam360 Team",
        address: "srimathinagarajan2003@gmail.com",
      },
      to: email,
      subject: `Thank You for Applying for Internship at Aakam360`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <h2 style="color: #007BFF;">Hi ${firstName},</h2>
          <p>Thank you for applying for an internship at <strong>Aakam360</strong>. We have received your application successfully.</p>
          <p>Our team will review your profile and get back to you shortly if you are shortlisted.</p>
          <p>We appreciate your interest in joining us and wish you the best!</p>
          <br />
          <p style="color: #555;">Warm regards,<br/>Aakam360 Team</p>
        </div>
      `,
    };

    await transporter.sendMail(userMailOptions);
    console.log("Confirmation email sent to applicant!");

    res.status(200).json({ success: true, message: "Form submitted successfully!" });

    // Optional cleanup: delete resume after 1 minute
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
