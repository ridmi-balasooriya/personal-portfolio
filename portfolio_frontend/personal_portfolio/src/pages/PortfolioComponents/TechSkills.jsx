const TechSkills = (props) => {
    const techSkills = props.techSkills

    return(
        <section id='techSkills' className="portfolio_section px-10 lg:px-40 pt-24 text-center show">
            <h2>Skills</h2>          
            {
                Object.entries(techSkills).map(([key, value]) => (
                    <div className="skilldiv inline-block m-3 p-4 bg-black bg-opacity-50 rounded-2xl w-1/6">
                        <div className="my-2">{value.skill_name}</div>
                        <div className="progress_div flex">
                            <progress value={value.status} max="100" style={{'--progress':`${value.status}%`}}></progress>
                            <span className="text-xs inline-block px-2">{value.status}%</span>
                        </div>                        
                    </div>
                    
                ))
            }

        </section>
    );
}

export default TechSkills