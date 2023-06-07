import { useEffect, useState } from "react";

const NavigationBar = () => {
    const [isActive, setIsActive] = useState(1);

    const handleClick = (linkId, compId) =>  {
        const id = document.querySelector(`#${compId}`);
        const sectionElement = document.querySelectorAll(`main section`);
        sectionElement.forEach( section => {
            section.removeAttribute('style');
        })
        id.style.height = '100vh';
        id.scrollIntoView({behavior: 'auto'})        
        setIsActive(linkId);
    }
    
    useEffect(() => {
        const scrollHandler = () => {
            const sectionElement = document.querySelectorAll('main section');

            for (let i = 0; i < sectionElement.length; i++) {                
                const section = sectionElement[i];
                section.removeAttribute('style');
                const rect = section.getBoundingClientRect();   
                if (rect.bottom -100 >= 0 && rect.top <= window.innerHeight) {
                    const sectionId = document.querySelector(`#${section.id}`);
                    sectionId.style.height = '100vh'
                    setIsActive(i+1)
                    break;
                }
            }
        }

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener('scroll',scrollHandler);
          };
    },[])
   

    
    
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
                <li className={isActive === 6 ? 'active' : ''}>
                    <a href="#contactDetails" className={isActive === 6 ? 'active' : ''} onClick={(event) =>{event.preventDefault(); handleClick(6, 'contactDetails')}}>Contact</a>
                    <span className="pointer"></span>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar