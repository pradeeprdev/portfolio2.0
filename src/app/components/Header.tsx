"use client";

import React, { useState } from "react";
import { navItems } from "../Data/data";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

const sideMenuVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="fixed w-screen z-10" style={{ maxWidth: "70rem" }}>
      <div className="flex justify-between bg-black items-center py-3 p-5">
        <div className="font-extrabold text-2xl hover:cursor-pointer">
          <a href="#Home">Pradeep</a>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:cursor-pointer hover:text-[#ffbd39] transition duration-200 ease-in-out"
              >
                <a href={`#${item.name}`}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className="flex md:hidden text-secondary items-center cursor-pointer"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Open Menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") setMobileMenu(true);
          }}
        >
          <MenuIcon />
          <span className="ml-1">Menu</span>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <>
            {/* Keep your original overlay as is (semi-transparent black or your current style) */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              aria-label="Close Menu Overlay"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") setMobileMenu(false);
              }}
            />

            {/* Sidebar with light blur background and rounded corners on left */}
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-white bg-opacity-5 backdrop-blur-md text-white shadow-lg flex flex-col p-5 rounded-tl-3xl rounded-bl-3xl"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sideMenuVariants}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close button */}
              <div
                className="self-end cursor-pointer hover:text-[#ffbd39]"
                onClick={() => setMobileMenu(false)}
                aria-label="Close Menu"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setMobileMenu(false);
                }}
              >
                <CloseIcon />
              </div>

              {/* Menu Items */}
              <ul className="mt-10 flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.name}`}
                      className="hover:text-[#ffbd39] transition duration-200 ease-in-out"
                      onClick={() => setMobileMenu(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;