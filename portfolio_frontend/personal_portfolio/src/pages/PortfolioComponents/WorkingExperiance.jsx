const WorkingExperiance = (props) => {
    const workExp = props.workExp

    return(
        <section id='workExp' className="portfolio_section px-10 lg:px-40 pt-24 text-center">
            <h2>Working Experiance</h2>
            <div className="workexpdiv grid grid-cols-3 gap-4 gap-4 place-content-center my-10">
                {
                    Object.entries(workExp).map(([key, value]) => (
                        <div key={key} className="workexp px-10 py-10 bg-black bg-opacity-50 rounded-2xl">
                            <h4 className="text-2xl">{value.title}</h4>
                            <p className="text-sm my-1">From {value.start_date} To {value.end_date}</p>
                            <p className=" mb-4">{value.company}</p>                            
                            <ul>
                                {value.skills.map(skill => (
                                    <li key={skill} className="inline-block text-sm m-1 px-4 py-2 bg-gray-300 bg-opacity-90 text-black rounded-lg">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default WorkingExperiance