import { useState } from "react";

const NavigationBar = ({ displaySection }) => {
    const [isActive, setIsActive] = useState(1);

    const handleClick = (linkId, compId) =>  {
        
        setIsActive(linkId);
        displaySection(compId)
    }
    
    return(
        <nav className="fixed top-0 right-0 w-full bg-black opacity-70 text-right">
            <ul>
                <li className={isActive === 1 ? 'active' : ''}>
                    <a href="#profile" className={isActive === 1 ? 'active' : ''} 
                    onClick={
                    (event) => {
                        event.preventDefault(); 
                        handleClick(1, 'profile')
                        }
                    }>
                    Profile
                    </a>
                    <span className="pointer"></span>
                </li>
                <li className={isActive === 2 ? 'active' : ''}>
                    <a href="#experiance" className={isActive === 2 ? 'active' : ''} onClick={(event) =>{event.preventDefault(); handleClick(2, 'experiance')}}>Experiance</a>
                    <span className="pointer"></span>
                </li>
                <li className={isActive === 3 ? 'active' : ''}>
                    <a href="#education" className={isActive === 3 ? 'active' : ''} onClick={(event) =>{event.preventDefault(); handleClick(3, 'education')}}>Education</a>
                    <span className="pointer"></span>
                </li>
                <li className={isActive === 4 ? 'active' : ''}>
                    <a href="#techSkills" className={isActive === 4 ? 'active' : ''} onClick={(event) =>{event.preventDefault(); handleClick(4, 'techSkills')}}>Technical Skills</a>
                    <span className="pointer"></span>
                </li>
                <li className={isActive === 5 ? 'active' : ''}>
                    <a href="#softSkills" className={isActive === 5 ? 'active' : ''} onClick={(event) =>{event.preventDefault(); handleClick(5, 'softSkills')}}>Soft Skills</a>
                    <span className="pointer"></span>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar