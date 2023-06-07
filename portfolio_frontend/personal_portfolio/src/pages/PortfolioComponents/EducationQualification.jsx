const EducationQualification = (props) => {
    const eduQual = props.eduQual

    return(
        <section id='education' className="portfolio_section px-10 lg:px-40 pt-24 text-center">
            <h2>Educational Qualification</h2>
            <div className="eduqualdiv grid grid-cols-4 gap-4 gap-4 place-content-center my-10">
                {
                    Object.entries(eduQual).map(([key, value]) => (
                        <div key={key} className="eduqual px-10 py-10 bg-black bg-opacity-50 rounded-2xl">
                            <h4 className="text-2xl">{value.degree}</h4> 
                            <p className="text-sm mb-4">{value.school}</p> 
                            <p>{value.field}</p>    
                            <p className="mb-4">{value.grade}</p>                            
                            <p className="text-sm my-1">{value.end_date}</p>
                            
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default EducationQualification