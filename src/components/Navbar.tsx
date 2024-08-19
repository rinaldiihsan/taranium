import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery('(min-width: 1128px)');
  const [isClient, setIsClient] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { pathname } = window.location;

  const isActive = (path: any) => (pathname === path ? 'text-[#D0B2FF] font-medium' : 'text-white');

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (toggled && !matches) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [toggled, matches]);

  const navMotion = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };

  if (!isClient) {
    return null;
  }

  const currentPath = window.location.pathname;
  const navbarColor = currentPath === '/' ? (scrolling ? 'backdrop-blur-lg border-b border-[#666666]' : 'bg-transparent') : 'backdrop-blur-lg border-b border-[#666666]';

  return (
    <nav className={`${navbarColor} fixed top-0 left-0 right-0 w-full z-[999] transition-colors duration-300`}>
      <div className="max-w-[100rem] py-5 mx-auto px-5 md:px-2 flex justify-between items-center">
        <a href="/" className="flex gap-x-2 items-center">
          <img src="/logo.png" alt="Logo Yaspendhar" className="w-[8rem] md:w-[11rem]" />
        </a>

        {matches && (
          <div className="flex gap-x-8 justify-between text-white">
            <a href="/" className={isActive('/')}>
              Home
            </a>
            <a href="/our-story" className={isActive('/our-story')}>
              Our Story
            </a>
            <a href="/academy" className={isActive('/academy')}>
              Taranium Academy
            </a>
            <a href="/funding" className={isActive('/funding')}>
              Funding
            </a>
            <a href="/community" className={isActive('/community')}>
              Community
            </a>
          </div>
        )}

        {matches && <button className="flex bg-gradient-to-br from-[#D0B2FF] to-[#7915EC] px-8 py-2.5 rounded-md font-medium text-white">Contact</button>}

        {!matches && (
          <div className="space-y-1.5 cursor-pointer z-50" onClick={() => setToggled((prevToggle) => !prevToggle)}>
            <motion.span animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }} className="block h-0.5 w-8 bg-[white]" />
            <motion.span animate={{ width: toggled ? 0 : 32 }} className="block h-0.5 w-8 bg-[white]" />
            <motion.span animate={{ rotateZ: toggled ? -45 : 0, y: toggled ? -8 : 0 }} className="block h-0.5 w-8 bg-[white]" />
          </div>
        )}

        {toggled && !matches && (
          <motion.div className="fixed inset-0 z-40 bg-[#1f1f1f] flex justify-center items-center h-[100vh] overflow-y-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div variants={navMotion} animate="visible" initial="hidden" className="flex flex-col gap-y-4 text-white">
              <motion.a variants={itemMotion} href="/" className={isActive('/')}>
                Home
              </motion.a>
              <motion.a variants={itemMotion} href="/our-story" className={isActive('/our-story')}>
                Our Story
              </motion.a>
              <motion.a variants={itemMotion} href="/academy" className={isActive('/academy')}>
                Taranium Academy
              </motion.a>
              <motion.a variants={itemMotion} href="/funding" className={isActive('/funding')}>
                Funding
              </motion.a>
              <motion.a variants={itemMotion} href="/community" className={isActive('/community')}>
                Community
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
