import { logo } from '../assets';
import { footerLinks, socials } from './data';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__logo-container">
          <img src={logo} alt="" className="logo" aria-label='logo'/>
        </div>
        <div className="footer__links-container">
          {footerLinks.map((links) => {
            const { heading, subLinks, id } = links;
            return (
              <div className="sublinks-container" key={id}>
                <h4>{heading}</h4>
                <ul>
                  {subLinks.map((link_) => {
                    const { id, link } = link_;
                    return (
                      <li key={id}>
                        <a href="#">{link}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="footer__socials-container">
          {socials.map(({ icon, name, id }) => {
            return (
              <a href="#" key={id}>
                <img src={icon} alt={name} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
