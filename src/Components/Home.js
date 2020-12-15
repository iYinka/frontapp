import React from "react";



export default function Home() {
    return (
        
        <div id="div" className="container">

            <form className="form">
                <div className="div-input">
                <p>Your name</p>
                <input className="form-control" type="text" name="yourName" />
                </div>

                <div className="div-input">
                <p>Your Email</p>
                <input className="form-control" type="text" name="yourEmail" />
                </div>

                <div className="div-input"><p>Your Message</p>
                <textarea type="text" placeholder="Type something if you want" rows="9"/>
                </div>
                
                <div className="div-input">
                <button className='button' type="submit">Send Message</button>
                {/* <input type="submit" value="Send Message" /> */}
                </div>
            </form>
        </div>
    )
}