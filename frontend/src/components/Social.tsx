import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Social = () => {
  return (
    <div className="relative">
      <div className="w-[2px] h-44 bg-purple-500 "></div>
      <div className="absolute -top-1 left-0 z-10 -translate-x-1/2 flex flex-col space-y-4 ">
        <Link to={"https:github.com/priyanshu07222"} target="_blank">
          <FaGithub className="text-4xl   bg-black" />
        </Link>
        <Link to={"https://x.com/Priyanshuu_eth"} target="_blank">
          <FaTwitter className="text-4xl  bg-black" />
        </Link>
        <Link to={"https://www.linkedin.com/in/priyanshueth/"} target="_blank">
          <FaLinkedin className="text-4xl bg-black " />
        </Link>
        <Link to={"https://x.com/Priyanshuu_eth"} target="_blank">
          <FaInstagram className="text-4xl  bg-black" />
        </Link>
      </div>
    </div>
  );
};
