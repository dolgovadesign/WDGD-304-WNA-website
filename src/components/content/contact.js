import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/app';
import 'firebase/firestore';
import './contact.css';

// Validates email format using a regular expression
function validEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

// Create Contact component
export default function Contact() {
    // Store contact information and validation error in component's state
    const [contact, setContact] = useState({});
    const [error, setError] = useState();

    // Comment submission
    const onSubmit = async (event) => {
        event.preventDefault();

        // Validate contact information

        // Validate name (present and not empty string)
        if (!contact.name || !contact.name.length) {
            setError(`Please provide a name`);
            return;
        }

        // Validate email (present and not empty string, valid email format)
        if (!contact.email || !contact.email.length || !validEmail(contact.email)) {
            setError(`Please provide a valid email`);
            return;
        }

        // Validate subject (present and not empty string)
        if (!contact.subject || !contact.subject.length) {
            setError(`Please provide a subject for the comment`);
            return;
        }

        // Validate comment (present and not empty string)
        if (!contact.comment || !contact.comment.length) {
            setError(`Please provide a comment`);
            return;
        }

        // Clears previous errors, if any
        setError(undefined);

        try {
            // Saves contact information into Firestore "contacts" collection
            await firebase.firestore().doc(`contacts/${contact.name}`).set(contact);
            // Shows success message
            alert(`Thank you, ${contact.name}! Your comment has been successfully submitted!`);
            // Resets the contact form
            setContact({});
        } catch (error) {
            // Logs the error to the console
            console.error(error);
        }
    };

    return (
        <div id="contact" className="section" >
            <h3 className="section-name">Contact</h3>
            <div className="contact-content">
                <div className="contact-info">
                    <p>Please leave your message below</p>
                    {/* Create submission form */}
                    <form onSubmit={onSubmit}>
                        {error && <span className="validation-error">{error}</span>}
                        {/* Create input fields */}
                        <input 
                            className="contact-input contact-section" 
                            type="text" 
                            placeholder="Name" 
                            required={true}
                            name="Name" 
                            value={contact.name || ''} 
                            onChange={e => setContact({ ...contact, name: e.target.value })} />
                        <input 
                            className="contact-input contact-section" 
                            type="text" 
                            placeholder="Email" 
                            required={true}
                            name="Email" 
                            value={contact.email || ''} 
                            onChange={e => setContact({ ...contact, email: e.target.value })} />
                        <input 
                            className="contact-input contact-section" 
                            type="text" 
                            placeholder="Subject" 
                            required={true}
                            name="Subject" 
                            value={contact.subject || ''}
                            onChange={e => setContact({ ...contact, subject: e.target.value })} />
                        {/* Create text area */}
                        <textarea 
                            className="contact-input contact-section contact-comment" 
                            placeholder="Comment" 
                            required={true}
                            name="Comment"
                            value={contact.comment || ''} 
                            onChange={e => setContact({ ...contact, comment: e.target.value })} />
                        {/* Create button */}
                        <button className="contact-button contact-section" type="submit">
                            {/* Add icon to the button */}
                            <FontAwesomeIcon icon={faPaperPlane} />  SEND MESSAGE
                    </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
