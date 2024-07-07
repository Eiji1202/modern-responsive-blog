import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center gap-8">
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter
            fontSize={25}
            className="opacity-50 hover:opacity-80"
          />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            fontSize={25}
            className="opacity-50 hover:opacity-80"
          />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            fontSize={25}
            className="opacity-50 hover:opacity-80"
          />
        </a>
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-slate=700">
        &copy; compileTab. All rights reserved.
      </p>
    </div>
  );
};
