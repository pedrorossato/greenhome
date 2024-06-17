'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

import NavbarLinks from '@/components/navbar/navbar.links';

export default function Navbar(): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  return (
    <header className="bg-white h-28 shadow-lg w-full fixed z-[999]">
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <nav className="w-full flex py-1 justify-between items-center navbar">
            <Image
              src="/logo.png"
              alt="logo"
              height={100}
              width={56}
              style={{ filter: 'drop-shadow(0 0 0.1rem white)' }}
            />
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              {NavbarLinks.map(
                (nav: { id: string; title: string }, index: number) => (
                  <li
                    key={nav.id}
                    style={{ filter: 'drop-shadow(0 0 0.5rem white)' }}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${
                      pathname === nav.id ? 'border-b-2 border-green-700' : ''
                    } ${index === NavbarLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                  >
                    <Link href={`${nav.id}`}>{nav.title}</Link>
                  </li>
                ),
              )}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
              {toggle ? (
                <MdClose
                  className="text-black cursor-pointer"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                />
              ) : (
                <GiHamburgerMenu
                  className="text-black cursor-pointer"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                />
              )}

              <div
                className={`${
                  !toggle ? 'hidden' : 'flex'
                } p-6 fixed top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar drop-shadow-2xl z-[999] bg-white `}
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                  {NavbarLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] text-black ${
                        pathname === nav.id
                          ? 'border-b-2 border-primary-blue'
                          : ''
                      } ${index === NavbarLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                      onClick={() => {
                        router.push(nav.id);
                      }}
                    >
                      {nav.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
