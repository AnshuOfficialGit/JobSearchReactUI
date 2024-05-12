import Login from "./pages/auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterType from "./pages/auth/RegisterType";
import RecruiterRegister from "./pages/auth/RecruiterRegister";
import JobSeekerRegister from "./pages/auth/JobSeekerRegister";
import Dashboard from "./pages/recruiter/Dashboard";
import JobList from "./pages/recruiter/jobs/JobList";
import Upload from "./pages/recruiter/jobs/Upload";
import EditJob from "./pages/recruiter/jobs/EditJob";
import JobDetails from "./pages/recruiter/jobs/JobDetails";
import JobApplicants from "./pages/recruiter/jobs/JobApplicants";
import ApplicantsDetails from "./pages/recruiter/jobs/ApplicantsDetails";
import Profile from "./pages/recruiter/Profile";
import SeekerDashboard from "./pages/jobseeker/SeekerDashboard";
import SeekerJobDetails from "./pages/jobseeker/SeekerJobDetails";
import JobSeekerProfile from "./pages/jobseeker/JobSeekerProfile";
import AddEducation from "./pages/jobseeker/AddEducation";
import AddEmployement from "./pages/jobseeker/AddEmployement";
import AddSkills from "./pages/jobseeker/AddSkills";
import AddProjects from "./pages/jobseeker/AddProjects";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>


          <Route path="/" element={<Login />} />
          <Route path="/register/type" element={<RegisterType />} />
          <Route path="/recruiter/register" element={<RecruiterRegister />} />
          <Route path="/jobseeker/register" element={<JobSeekerRegister />} />

          <Route path="/recruiter/dashboard" element={<Dashboard />} />
          <Route path="/recruiter/jobs" element={<JobList />} />
          <Route path="/recruiter/upload/job" element={<Upload />} />
          <Route path="/recruiter/edit/job" element={<EditJob />} />
          <Route path="/recruiter/job/details" element={<JobDetails />} />
          <Route path="/recruiter/job/applicants" element={<JobApplicants />} />
          <Route path="recruiter/applicant/details/1" element={<ApplicantsDetails />} />
          <Route path="recruiter/profile" element={<Profile />} />


          <Route path="/jobseeker/dashboard" element={<SeekerDashboard />} />
          <Route path="/jobseeker/job/details" element={<SeekerJobDetails />} />
          <Route path="/jobseeker/profile" element={<JobSeekerProfile />} />
          <Route path="/jobseeker/add/education" element={<AddEducation />} />
          <Route path="/jobseeker/add/employment" element={<AddEmployement />} />
          <Route path="/jobseeker/add/skills" element={<AddSkills />} />
          <Route path="/jobseeker/add/projects" element={<AddProjects />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
