import { useState, useEffect } from 'react';
import '../styles/home.css';
import PersonalData from './PortfolioComponents/PersonalData';
import WorkingExperiance from './PortfolioComponents/WorkingExperiance';
import EducationQualification from './PortfolioComponents/EducationQualification';
import TechSkills from './PortfolioComponents/TechSkills';
import SoftSkills from './PortfolioComponents/SoftSkills';

const HomePage = () => {

    const [pPortfolio, setpPortfolio] = useState();
    let personalInfo = {};
    //let contactDetails = {};
    let socialMedia = {};
    let workingExperiance = [];
    let educationQualification = [];
    let techSkills = [];
    let softSkills = [];
    // let personalProjects = [];


    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/data/')
        .then(response => response.json())
        .then(data => setpPortfolio(data))
        .catch(error => {
            alert(error)
        })
    }, [])
    
    if(pPortfolio){        
        personalInfo = pPortfolio.portfolio.personal_info;
        //contactDetails = pPortfolio.portfolio.contact_details;
        socialMedia = pPortfolio.portfolio.social_media;
        workingExperiance = pPortfolio.portfolio.working_experiance;
        educationQualification = pPortfolio.portfolio.education_qualification;
        techSkills = pPortfolio.portfolio.tech_skills;
        softSkills = pPortfolio.portfolio.soft_skills;
        // personalProjects = pPortfolio.portfolio.personal_projects
    }

    return (
        <div className="main_div py-8">
            <PersonalData pInfo = {personalInfo} sMedia = {socialMedia}  />  
            <WorkingExperiance workExp = {workingExperiance} />
            <EducationQualification eduQual = {educationQualification} />
            <TechSkills techSkills = {techSkills} />
            <SoftSkills softSkills = {softSkills} />
        </div>
    );
}

export default HomePage;