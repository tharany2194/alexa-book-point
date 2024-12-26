import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='about-us'>
        <div className="about-content">
            <h3>About us</h3>
            <p>Welcome to Alexa BookPoint, your trusted source for a diverse range of books catering to every reader&apos;s taste. Established with the mission to foster a love for reading in our community, we pride ourselves on providing excellent service and a wide selection of books. Our journey began in 2021, and since then, we have grown to become a beloved destination for book lovers. Below, you&apos; ll find information about our four branches, their locations, and contact numbers.</p>

        </div>
        <div className="contact-info">
            <div>
                <h3>Chennai</h3>
                <dl>
                   <dt>Address:</dt>
                      <dd>123 ,abc street</dd>
                      <dd>xyx-600000</dd>
                      <dt>Phone:</dt>
                      <dd>+91 1234567890</dd>

               </dl>

            </div>
            <div>
            <h3>Bangalore</h3>
                <dl>
                   <dt>Address:</dt>
                      <dd>456 ,def street</dd>
                      <dd>hjy-600000</dd>
                      <dt>Phone:</dt>
                      <dd>+91 67834567890</dd>

               </dl>
            </div>
            
        </div>

      
    </div>
  )
}

export default AboutUs
