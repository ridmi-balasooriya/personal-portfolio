import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const ContactDetails = (props) => {

    const { contactD, sMedia } = props;

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const csrfRef = useRef();

    const [csrfToekn, setCsrfToken] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);  
    const [showForm, setShowForm] = useState(true); 

    useEffect(() => {
        const fetcCsfrToken = () => {
            try{
                axios.get('http://127.0.0.1:8000/api/get-csrf-token/')
                .then(respond => {
                    const { csrf_token } = respond.data;
                    setCsrfToken(csrf_token)
                })    
            }catch(error){
                alert(`Fail to fetch CSRF Token ${error}`)
            }
        
        }
        fetcCsfrToken();
    }, [])

    const handleSubmission = () => {

        setShowForm(false);

        const headers = {
            'X-CSRFToken': csrfToekn
        }

        const formData = new FormData();
        formData.append('name', nameRef.current.value);
        formData.append('email', emailRef.current.value);
        formData.append('message', messageRef.current.value);
        formData.append('csrftoken', csrfRef.current.value);
        
        setIsLoading(true);

        axios.post('http://127.0.0.1:8000/api/sendmessage/', formData, {headers})
        .then(response => {
            const { message } = response.data
            setSuccessMessage(message);
        })
        .catch(error => {
            setErrorMessage(error);
        })
        .finally(() => {
            setIsLoading(false);
        });        
        
    }

    return(
        <section id='contactDetails' className="portfolio_section px-10 lg:px-40 pt-24 text-center">
            <h2>Contact Me</h2>
            <div className='contact_form max-w-screen-sm mt-6 text-center mx-auto'>

                {successMessage && 
                    <div>
                        {successMessage}<br />
                        I will reach to you soon.!
                    </div>
                }
                {errorMessage && <div>{errorMessage}</div>}

                {!successMessage && showForm &&
                    <form onSubmit = {e => e.preventDefault()}>
                        <input type="hidden" id="csrftoken" ref={csrfRef} value={csrfToekn} />
                        <div>
                            <input type='text' id='name' ref={nameRef} placeholder='Your Name' required />
                        </div>
                        <div>
                            <input type='email' id='email' ref={emailRef} placeholder='Your Email' />
                        </div>
                        <div>
                            <textarea id='message' ref={messageRef} placeholder='Message' required rows='5'></textarea>
                        </div>
                        <button type='submit'onClick={handleSubmission} className='bg-black bg-opacity-80 rounded-2xl text-white inline-block mx-auto my-2 p-2 w-96 border-gray-300 hover:bg-gray-300 hover:text-black'>Send Message</button>
                    </form>
                }   

                {isLoading &&
                    <div className='sending_progress'>
                        <img src="images/send_icon.png" alt='Sending Email' className='mx-auto my-10' width='100px' />
                        <div className='send_msg'>
                            Sending 
                            <div className='dot-box'>
                                <div className="dot-flashing"></div>
                            </div>
                            
                        </div>
                    </div>
                }    
                {/* <div className="sm_div flex place-content-center mt-6">
                    { Object.entries(sMedia).map(([key, value]) => (
                        value.link &&
                        <div key={key} className="sm w-24 mt-2 mx-3">
                            <a href={value.link} target="_blank" rel="noreferrer" className="inline-block scale-100 hover:opacity-80 hover:scale-110 duration-300">
                                <img src={`images/${value.icon}`} alt={`Visit Ridmi Balasooriya ${value.name}`} className="w-auto" />
                            </a>
                        </div>
                        
                    ))}
                </div>             */}
            </div>            
        </section>
    );
}

export default ContactDetails