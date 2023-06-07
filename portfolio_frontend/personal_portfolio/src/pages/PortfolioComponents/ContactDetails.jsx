import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const ContactDetails = (props) => {

    const [csrfToekn, setCsrfToken] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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


    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const csrfRef = useRef();

    const handleSubmission = () => {

        const headers = {
            'X-CSRFToken': csrfToekn
        }

        const formData = new FormData();
        formData.append('name', nameRef.current.value);
        formData.append('email', emailRef.current.value);
        formData.append('message', messageRef.current.value);
        formData.append('csrftoken', csrfRef.current.value);
        
        axios.post('http://127.0.0.1:8000/api/sendmessage/', formData, {headers})
        .then(response => {
            const { message } = response.data
            setSuccessMessage(message)
        })
        .catch(error => {
            setErrorMessage(error)
        });        
        
    }

    return(
        <section id='contactDetails' className="portfolio_section px-10 lg:px-40 pt-24 pb-40 text-center">
            <h2>Contact Me</h2>
            <div className='contact_form max-w-screen-sm mt-6 text-center mx-auto'>
                {successMessage && <div>{successMessage}</div>}
                {errorMessage && <div>{errorMessage}</div>}
                {!successMessage && 
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
            </div>            
        </section>
    );
}

export default ContactDetails