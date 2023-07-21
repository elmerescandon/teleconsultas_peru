import "./Footer.scss";

const Footer = () => {
  return (
    <footer className=" footer bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/3">
          {/* First column with links */}
          <div className="mb-4">
            <h4 className="font-bold text-xl mb-2">Links</h4>
            <ul className="list-none">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/faq">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="/terms">Terms and Conditions</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          {/* Second column with social media icons */}
          <div className="mb-4">
            <h4 className="font-bold text-xl mb-2">Social Media</h4>
            <ul className="flex space-x-4">
              {/* Replace the following links with actual social media URLs */}
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          {/* Third column with logo and description */}
          <div className="mb-4">
            <p className="text-xl font-bold">MediConnect</p>
            <p>
              At MediConnect, our mission is to revolutionize the way healthcare
              is delivered by providing a user-friendly telemedicine platform
              that connects patients with qualified doctors from the comfort of
              their homes. We aim to empower patients with accessible,
              convenient, and high-quality medical consultations while enabling
              doctors to expand their reach and impact more lives.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
