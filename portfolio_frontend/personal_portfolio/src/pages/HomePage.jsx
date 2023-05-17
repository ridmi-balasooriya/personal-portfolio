import { useState, useEffect } from 'react';
import '../styles/home.css';
import PersonalData from './PortfolioComponents/PersonalData';

const HomePage = () => {

    const [pPortfolio, setpPortfolio] = useState();
    let personalInfo = {};
    // let contactDetails = {};
    // let socialMedia = {};
    // let workingExperiance = [];
    // let educationQualification = [];
    // let skills = [];
    // let softSkills = [];
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
        // contactDetails = pPortfolio.portfolio.contact_details;
        // socialMedia = pPortfolio.portfolio.social_media;
        // workingExperiance = pPortfolio.portfolio.working_experiance;
        // educationQualification = pPortfolio.portfolio.educational_qualification;
        // skills = pPortfolio.portfolio.skills;
        // softSkills = pPortfolio.portfolio.soft_skills;
        // personalProjects = pPortfolio.portfolio.personal_projects
    }
    
    
    return (
        <div className="bg-black">
            <PersonalData data = {personalInfo}  />
        </div>
    );
}

export default HomePage;