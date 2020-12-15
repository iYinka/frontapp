import React from 'react';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Avatar from "./Avatar";



function Contact() {
    return (
        <div id="contact">
            <div>
                 <Avatar img="https://gorevity.com/wp-content/uploads/2019/08/Why-Following-Up-With-Leads-is-Important.png" />
            </div>

            <div className="contact-address" >
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flex_wrap: 'wrap'
                }}>
                    <AddLocationIcon />
                    <p className="contact" >151 New Park Ave, Hartford, CT 06016 United States</p>
                </div>
                
               
                    <div className="info" style={{
                        display: 'flex',
                        alignItems: 'center',
                        flex_wrap: 'wrap'
                    }}>
                        <PhoneIcon /><p className="contact" >+1 (203) 302-9545</p>
                    </div>
                    <div className="info email" style={{
                        display: 'flex',
                        alignItems: 'center',
                        flex_wrap: 'wrap'
                    }}>
                        <EmailIcon /><p className="contact" >contactus@inveritasoft.com</p>
                    </div>
               
                
            </div>
            

            <div className="social-media">
                <FacebookIcon className='social' height='14' width='10' color="primary"/>
                <TwitterIcon className='social' color="primary" />
                <InstagramIcon className='social' style = {{color : "pink" }} />
            </div>

        </div>
    );
}

export default Contact;