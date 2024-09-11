import './Footer.css';
import { Slide } from 'react-awesome-reveal';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>

const Footer = () => {
    return (
      <footer>
       <Slide direction="up" triggerOnce>
       <div className="footer-section social">
                <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100088579052568" target="_blank">
                      <i className="fab fa-facebook-f"></i></a>
                    <a href="https://x.com/detodofut_tw" target="_blank">
                      <i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/juan_sansberro_18/?igsh=cnhubThnYXI4eTV4" target="_blank">
                      <i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/juan-manuel-sansberro-pereyra-a50a1329a/" target="_blank">
                      <i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
       </Slide>
      </footer>
    );
  };
  
  export default Footer;