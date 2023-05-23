const ContactDetails = (props) => {
    const personalData = props.data

    return(
        <h2>Contact Details {personalData.name}</h2>
    );
}

export default ContactDetails