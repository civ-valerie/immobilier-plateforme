"use client";

import { Popover, Transition } from "@headlessui/react";
import { clsxm } from "@zolplay/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const navigationItems = [
  { href: "/", text: "La démo" },
  { href: "/informations", text: "Comment ça marche" },
  { href: "", text: "Plateforme" },
];

function LoginPopup({ isOpen, onClose }) {
  const [password, setPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const router = useRouter();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setValidationMessage("");
  };

  const handleAccessClick = () => {
    if (password === "civision1995") {
      console.log("redirecting you to sandbox");
      router.push("/sandbox");
    } else {
      setValidationMessage("Le mot de passe ne correspond pas.");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={clsxm(
        "group relative p-2 mt-5",
        "rounded-sm bg-transparent",
        "shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md",
        "dark:from-zinc-900/70 dark:to-zinc-800/90 dark:ring-zinc-100/10",
        "[--spotlight-color:rgb(200_107_56_/_0.2)] dark:[--spotlight-color:rgb(217_249_157_/_0.07)]"
      )}
    >
      <button onClick={onClose} className="w-full flex justify-end">
        x
      </button>
      <div className=" p-4 rounded">
        {/* Your login form goes here */}
        <span className="w-80 flex items-center justify-center">
          Utilisez le mot de passe fourni par CIVISION INC. pour accéder à la
          plateforme.
        </span>

        <div className="grid grid-flow-row mt-5">
          <span>Mot de passe</span>

          <input
            type="password"
            className="border p-1 my-2 bg-transparent border-[#c86b38] rounded-md shadow-sm"
            onChange={handlePasswordChange}
          />
          {validationMessage && (
            <span className="text-red-500 text-sm mb-2">
              {validationMessage}
            </span>
          )}
          <button
            onClick={handleAccessClick}
            className="bg-[#c86b38] cursor-pointer text-white rounded-md px-6 py-2 hover:bg-[#c86b38]/90 focus:outline-none focus:ring-2 focus:ring-[#c86b38] focus:ring-opacity-50 transition-all duration-300 ease-in-out flex items-center justify-center"
          >
            ACCÉDER
          </button>
        </div>
        <span className="mt-5 w-80 flex items-center justify-center">
          Veuillez contacter CIVISION INC. pour accès illimité.
        </span>
      </div>
    </div>
  );
}

function NavItem({ href, text, onClick }) {
  const isActive = usePathname() === href;

  // If an onClick handler is provided, use it instead of the Link component
  if (onClick) {
    return (
      <li>
        <button
          onClick={onClick}
          className={clsxm(
            "relative block whitespace-nowrap px-3 py-2 transition",
            "hover:text-[#c86b38] dark:hover:text-[#c86b38]"
          )}
        >
          {text}
        </button>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={href}
        className={clsxm(
          "relative block whitespace-nowrap px-3 py-2 transition",
          isActive
            ? "text-[#c86b38] dark:text-[#c86b38]"
            : "hover:text-[#c86b38] dark:hover:text-[#c86b38]"
        )}
      >
        {text}
        {isActive && (
          <motion.span
            className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-lime-700/0 via-[#c86b38] to-lime-700/0 dark:from-lime-400/0 dark:via-[#c86b38] dark:to-lime-400/0"
            layoutId="active-nav-item"
          />
        )}
      </Link>
    </li>
  );
}

function Desktop({ className, ...props }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);
  const handleMouseMove = React.useCallback(
    ({ clientX, clientY, currentTarget }) => {
      const bounds = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - bounds.left);
      mouseY.set(clientY - bounds.top);
      radius.set(Math.sqrt(bounds.width ** 2 + bounds.height ** 2) / 2.5);
    },
    [mouseX, mouseY, radius]
  );
  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, var(--spotlight-color) 0%, transparent 65%)`;
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);

  const handleConnexionClick = () => {
    setLoginPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setLoginPopupOpen(false);
  };

  return (
    <nav
      onMouseMove={handleMouseMove}
      className={clsxm(
        "group relative p-2",
        "rounded-sm bg-gradient-to-b from-zinc-50/70 to-white/90",
        "shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md",
        "dark:from-zinc-900/70 dark:to-zinc-800/90 dark:ring-zinc-100/10",
        "[--spotlight-color:rgb(200_107_56_/_0.2)] dark:[--spotlight-color:rgb(217_249_157_/_0.07)]",
        className
      )}
      {...props}
    >
      {/* Spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background }}
        aria-hidden="true"
      />

      <ul className="flex bg-transparent px-3 text-sm font-medium text-zinc-800 dark:text-zinc-200 ">
        {navigationItems.map((item) => {
          if (item.text === "Plateforme") {
            return (
              <NavItem
                key={item.href}
                text={item.text}
                onClick={handleConnexionClick}
              />
            );
          }
          return <NavItem key={item.href} href={item.href} text={item.text} />;
        })}
      </ul>
      <LoginPopup isOpen={isLoginPopupOpen} onClose={closeLoginPopup} />
    </nav>
  );
}

function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  );
}

function Mobile(props) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-gradient-to-b from-zinc-50/20 to-white/80 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md focus:outline-none focus-visible:ring-2 dark:from-zinc-900/30 dark:to-zinc-800/80 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20 dark:focus-visible:ring-yellow-500/80">
        Navigation
        {/* Chevron */}
        <svg
          viewBox="0 0 8 6"
          aria-hidden="true"
          className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
        >
          <path
            d="M1.75 1.75 4 4.25l2.25-2.5"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={React.Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={React.Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-gradient-to-b from-zinc-100/75 to-white p-8 ring-1 ring-zinc-900/5 dark:from-zinc-900/50 dark:to-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="关闭菜单" className="-m-1 p-1">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                >
                  <path
                    d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Item
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-500/20 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                {navigationItems.map(({ href, text }) => (
                  <MobileNavItem key={href} href={href}>
                    {text}
                  </MobileNavItem>
                ))}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export const NavigationBar = {
  Desktop,
  Mobile,
};
