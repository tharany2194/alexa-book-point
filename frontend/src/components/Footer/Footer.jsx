import './Footer.css'

import facebookIcon from '../../assets/facebook_icon.png'
import twitterIcon from '../../assets/twitter_icon.png'
import linkedinIcon from '../../assets/linkedin_icon.png'

const Footer = () => {
    var currentYear = new Date().getFullYear()
  return (
    <div className='footer' id='footer'>
        <div className="footer1">
            <div className="footer-content-left">
               <h2>Alexa <br /> Book Point</h2>
               
                <p>Buy your favorite books online with ease! Enjoy exclusive offers and discounts on selected titles. Dive into our collection and find special deals that make reading more affordable. Shop now and unlock more savings with every purchase!</p>
                <div className="footer-social-icons">
                    <img src={facebookIcon} alt="facebook" />
                    <img src={linkedinIcon} alt="linkedin" />
                    <img src={twitterIcon} alt="twitter" />
                </div>

            </div>
            <div className="footer-content-right">
                <h4>GET IN TOUCH</h4> 
                <li>+91 98765433212</li>
                <li>contact@alexabookpoint.com</li>


            </div>
            
        </div>
        <hr />
        <div className="footer2">
          <p className='footer2-copyright'>copyright {currentYear} @Alexa.com-All rights reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
