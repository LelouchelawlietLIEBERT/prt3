import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a href={socialImg.link} target="_blank">
              <div key={index} className="icon">
                <img src={socialImg.imgPath} alt="social icon" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
