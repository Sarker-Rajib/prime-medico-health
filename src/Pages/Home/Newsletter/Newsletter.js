import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import './Newsletter.css';

const Newsletter = () => {

    const handleSubscribe = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        console.log(email);
        toast.success("Subscription successfully done");
        form.reset();
    };

    return (
        <div className='newsletter'>
            <Container>
                <div className='text-center n-wrapper'>
                    <h2 className='section-header-full'>Newsletter</h2>
                    <p className='text-center '>Great to see you ! We value your demand. If you updates about us, you can subscribe. We will send notifications for new updates.</p>
                    <form onSubmit={handleSubscribe}>
                        <div>
                            <input name='email' className='form-control email-input' type="email" placeholder='Enter email' required />
                            <Button type='submit' className="brand-button px-5">Subscribe</Button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Newsletter;