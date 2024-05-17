import logo from "../assets/kiranLogo.png";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="mb-13 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="mt-8 ml-8 mb-8 flex items-center justify-center gap-4 text-3xl">
      <a href="https://github.com/git-kirants" class=" hover:text-blue-500">
      <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/kiran-t-shibu/" class=" hover:text-blue-500">
      <FaLinkedin />
      </a>
      <a href="https://x.com/weeb_kiran" class=" hover:text-blue-500">
      <FaTwitter />
      </a>
      </div>
    </nav>
  );
};

export default Navbar;
