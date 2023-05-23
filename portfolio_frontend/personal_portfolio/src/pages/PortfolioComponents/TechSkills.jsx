const TechSkills = (props) => {
    const techSkills = props.techSkills

    return(
        <section id='techSkills' className="portfolio_section px-10 lg:px-40 pt-24 text-center">
            <h2>Skills</h2>          
            {
                Object.entries(techSkills).map(([key, value]) => (
                    <div className="skilldiv inline-block m-3 p-4 bg-black bg-opacity-50 rounded-2xl">
                        <div key={key} class="progress-bar" style={{'--progress':`${value.status}%`}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <span className="skillspan block bg-black rounded-full p-6">{value.status}%</span>
                        </div>
                        <div className="my-4">{value.skill_name}</div>
                    </div>
                    
                ))
            }

        </section>
    );
}

export default TechSkills