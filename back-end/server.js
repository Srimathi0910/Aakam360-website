const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const fs = require("fs");

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

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
