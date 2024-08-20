import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative w-full pt-[100px] pb-[20px] md:px-6 lg:px-10 bg-[#17181D]">
      <div className="md:max-w-[80rem] py-5 px-5 md:px-0 lg:mx-auto flex flex-col gap-y-[10rem]">
        <div className="flex flex-col md:flex-row lg:items-start justify-start gap-y-20 md:gap-y-0 gap-x-0 md:gap-x-[20rem]">
          <div>
            <img src="/logo-footer-2.png" alt="logo" className="w-[8rem]" />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-y-14 gap-x-0 md:gap-y-0 md:gap-x-14">
            <div className="flex flex-col gap-y-5 ">
              <h1 className="text-white font-semibold text-lg">Menu's</h1>
              <div className="flex flex-col gap-y-3 text-white">
                <a href="/">Home</a>
                <a href="/our-story">Our Story</a>
                <a href="/academy">Taranium Academy</a>
                <a href="/funding">Funding</a>
                <a href="/community">Community</a>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <h1 className="text-white font-semibold text-lg">Follow Us</h1>
              <div className="flex flex-row gap-x-6">
                <a href="https://www.linkedin.com/company/taranium-foundation/">
                  <svg width="30" height="30" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_596_2589)">
                      <path
                        d="M15.1667 24.5H10.5V10.5H15.1667V12.8333C16.1614 11.5678 17.6699 10.8133 19.2792 10.7765C22.1732 10.7926 24.5084 13.1476 24.5 16.0417V24.5H19.8333V16.625C19.6467 15.3214 18.5287 14.3542 17.2118 14.357C16.6358 14.3752 16.0921 14.6274 15.7062 15.0554C15.3202 15.4834 15.1254 16.0502 15.1667 16.625V24.5ZM8.16667 24.5H3.5V10.5H8.16667V24.5ZM5.83333 8.16667C4.54467 8.16667 3.5 7.122 3.5 5.83333C3.5 4.54467 4.54467 3.5 5.83333 3.5C7.122 3.5 8.16667 4.54467 8.16667 5.83333C8.16667 6.45217 7.92083 7.04566 7.48325 7.48325C7.04566 7.92083 6.45217 8.16667 5.83333 8.16667Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_596_2589">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center border-t border-[#343539] pt-10">
          <div className="flex flex-col">
            <p className="text-white">© {year} Taranium. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
