"use client";
import { useState } from "react";
import Link from "next/link";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
      <div className="px-4 mx-auto lg:max-w-7xl">
        <div className="flex items-center justify-between">
          <Link
            className="flex items-center justify-between py-3 md:py-5 md:block"
            href="/"
          >
            {/* Adicione a classe 'logo' para controlar o tamanho da logo */}
            <img className="logo h-12 md:h-16" src="/logo.png" alt="Logo" />
          </Link>
          <nav
            className={`hidden md:block space-x-4 ${
              toggleMenu ? "" : "hidden"
            }`}
          >
            <ul className="flex space-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/banhoetosa">Banho e Tosa</Link>
              </li>
              <li>
                <Link href="/consultorio">Consultório</Link>
              </li>
              <li>
                <Link href="/contato">Contato</Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/petschiirmer/" passHref>
                  Link para Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/petschirmer/"
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Adicione o ícone do Instagram aqui, se necessário */}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            {toggleMenu ? (
              <div
                className="text-green-600 cursor-pointer"
                onClick={() => setToggleMenu(false)}
              >
                <RiCloseLine size={27} />
              </div>
            ) : (
              <div
                className="text-green-600 cursor-pointer"
                onClick={() => setToggleMenu(true)}
              >
                <RiMenu3Line size={27} />
              </div>
            )}
          </div>
        </div>

        {toggleMenu && (
          <div className="bg-white md:hidden">
            <div className="container mx-auto py-2">
              <ul className="flex flex-col space-y-2">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/banhoetosa">Banho e Tosa</Link>
                </li>
                <li>
                  <Link href="/consultorio">Consultório</Link>
                </li>
                <li>
                  <Link href="/contato">Contato</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;