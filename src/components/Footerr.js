import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Footerr = () =>{
    return(
        <div className="footer-container">
            <div className="logo-container">
            <div className='footer-logo'><a href='#'><img className='h-16' src='https://s3-alpha-sig.figma.com/img/e61b/6571/33af368e1471bcf0efe704356a08337d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PndaR0n15CXJE697DLem4EfPdXtiHsNFXjYAARtWY7WcUj-VLdogWhk5mp0rE8sPPDiihCLnfYKQ9VGenKTqyS5xFVjIMpBhNdDdu4Xuzb7cUglVrDPREnYS7FWeMdzjw6xOvz1eFKtqjbn77OSNTZ2QU9WNuVpQ5Ym1FA6vnlg7c19hErnf0p0Q5yBvWUP5bg95NhlTtFa1GSZmRIGtTuVh6L-MsuVDWqFn9BeDulsUbhxk9j1lkzb6Udh-CmU3EK0PIWYGMYB7oqtBICHXCwFPapIG98gsOKLZgdJhAAMM65K9oAoYqxo6ErNjjMFJGx1-6jIkWI~ljnD1KlcpiQ__'></img></a></div>
            </div>

            <div className="contact">
                <h2>Contact Us</h2>
                <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
                <h3 className="email">example2020@gmail.com</h3>
                <br></br>
                <span className="number">(904) 443-0343</span>
            </div>

            <div className="more">
                <div className="m-left">
                    <h2>More</h2>
                    <ul className="more-list">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>

            <div className="socials">
                <h2>Social Links</h2>
                <div className="social-icons">
                <a href="#" className="instagram"><FaInstagram /></a>
                <a href="#" className="twitter"><FaTwitter /></a>
                <a href="#" className="facebook"><FaFacebookF /></a>
                </div>

                <div className="end">
                <p>&copy; 2022 Food Truck Example</p>
                </div>
                
            </div>

        </div>
    )
}

export default Footerr;