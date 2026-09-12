import footerLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="border-t border-gray-100 px-6 py-12 container mx-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        <div className="md:col-span-1">
          <img
            src={footerLogo}
            alt="Dev Stack"
            className="h-8 mx-auto md:mx-0"
          />
          <p className="mt-4 text-sm text-gray-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="mt-4 flex justify-center md:justify-start gap-4 text-sm font-medium text-gray-700">
            <a href="" className="hover:text-pink-500">
              GitHub
            </a>
            <a href="" className="hover:text-pink-500">
              Twitter
            </a>
            <a href="" className="hover:text-pink-500">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <p className="text-xs font-semibold tracking-wide text-gray-900">
            PRODUCT
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-gray-500">
            <a href="" className="hover:text-pink-500">
              Home
            </a>
            <a href="" className="hover:text-pink-500">
              Technologies
            </a>
            <a href="" className="hover:text-pink-500">
              Projects
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <p className="text-xs font-semibold tracking-wide text-gray-900">
            COMPANY
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-gray-500">
            <a href="" className="hover:text-pink-500">
              About
            </a>
            <a href="" className="hover:text-pink-500">
              Contact
            </a>
            <a href="" className="hover:text-pink-500">
              Careers
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <p className="text-xs font-semibold tracking-wide text-gray-900">
            LEGAL
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-gray-500">
            <a href="" className="hover:text-pink-500">
              Privacy Policy
            </a>
            <a href="" className="hover:text-pink-500">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="" className="hover:text-pink-500">
            Privacy
          </a>
          <a href="" className="hover:text-pink-500">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
