import "../../styles/footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-body">
        <div className="footer-right">
          <div className="footer-brand">
            <img src="/assets/Logo.png"></img>
            <p>Lume</p>
          </div>
          <div className="footer-links">
            <p>Quick Links</p>
            <p>Home</p>
            <p>Courses</p>
            <p>Create</p>
            <p>Dashboard</p>
          </div>
          <div className="footer-links">
            <p>Support and Help</p>
            <p>Contact us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms of services</p>
          </div>
        </div>
        <div className="footer-left">
          <div className="footer-div">
            <div>
              <h3>Join our newsletter</h3>
              <p>
                Stay updated! Subscribe for new courses, exclusive content, and
                more.
              </p>
            </div>
            <p>© 2025 Lume. All rights reserved</p>
          </div>
          <div className="footer-div">
            <div className="footer-input"><input placeholder="Enter email"></input><div className="footer-send-email"><i className="fa-solid fa-paper-plane"></i></div></div>
            <div className="footer-icons">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
