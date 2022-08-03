import Image from "next/image";
import Link from "next/link";
import React from "react";

const { useState, useEffect, useRef } = React;

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [profileShowDropdown, setProfileShowDropdown] = useState(false);
    const [showMobileDropdown, setShowMobileDropdown] = useState(false);

    const Mobiledropdown = useRef(null);
    useEffect(() => {
        // only add the event listener when the dropdown is opened
        if (showMobileDropdown) return;
        function handleClick(event) {
            if (
                showMobileDropdown.current &&
                !showMobileDropdown.current.contains(event.target)
            ) {
                setShowMobileDropdown(false);
            }
        }
        window.addEventListener("click", handleClick);
        // clean up
        return () => window.removeEventListener("click", handleClick);
    }, [showMobileDropdown]);

    // languages dropdown
    const dropdown = useRef(null);
    useEffect(() => {
        // only add the event listener when the dropdown is opened
        if (showDropdown) return;
        function handleClick(event) {
            if (dropdown.current && !dropdown.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }
        window.addEventListener("click", handleClick);
        // clean up
        return () => window.removeEventListener("click", handleClick);
    }, [showDropdown]);

    // create a React ref for the dropdown element
    const profileDropdown = useRef(null);
    useEffect(() => {
        // only add the event listener when the dropdown is opened
        if (profileShowDropdown) return;
        function handleClick(event) {
            if (
                profileShowDropdown.current &&
                !profileShowDropdown.current.contains(event.target)
            ) {
                setProfileShowDropdown(false);
            }
        }
        window.addEventListener("click", handleClick);
        // clean up
        return () => window.removeEventListener("click", handleClick);
    }, [profileShowDropdown]);

    return (
        <nav className='shadow' style={{ backgroundColor: "transparent" }}>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
                <div className='relative flex h-16 items-center justify-between'>
                    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                        {/* <!-- Mobile menu button--> */}
                        <button
                            type='button'
                            className='inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none '
                            aria-controls='mobile-menu'
                            aria-expanded='false'
                            onClick={() => setShowDropdown((b) => !b)}
                        >
                            <span className='sr-only'>Open main menu</span>
                            <svg
                                style={{ stroke: "#56c1e6" }}
                                className=' block h-6 w-6 '
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='2'
                                stroke='white'
                                aria-hidden='true'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                            <svg
                                className='hidden h-6 w-6'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='2'
                                stroke='currentColor'
                                aria-hidden='true'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        </button>
                    </div>
                    <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                        <div className='flex flex-shrink-0 items-center'>
                            <Image
                                className='hover:cursor-pointer'
                                src='/images/logo.png'
                                alt='logo'
                                height={40}
                                width={100}
                            />
                        </div>
                    </div>
                    <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                        <div className='hidden sm:ml-6 sm:block'>
                            <div className='flex items-center space-x-3'>
                                <Link href='/events'>
                                    <a className=' hidden rounded-md px-3 py-2 text-sm font-semibold  text-gray-700  hover:text-orange-400'>
                                        Events
                                    </a>
                                </Link>
                                <Link href='/about'>
                                    <a className=' hidden rounded-md px-3 py-2 text-sm font-semibold  text-gray-700  hover:text-orange-400'>
                                        About
                                    </a>
                                </Link>
                                {/* Languages menu */}
                                <div className=' relative ml-3 hidden sm:ml-6 sm:block'>
                                    <div>
                                        <button
                                            type='button'
                                            className='flex text-sm  '
                                            id='user-menu-button'
                                            aria-expanded='false'
                                            aria-haspopup='true'
                                            onClick={() =>
                                                setShowDropdown((b) => !b)
                                            }
                                        >
                                            <span className='sr-only'>
                                                Open user menu
                                            </span>
                                            <div className=' w-15 relative flex h-10 flex-row items-center overflow-hidden  text-gray-700  hover:text-orange-400 '>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-5 w-5 '
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    stroke='currentColor'
                                                    strokeWidth='2'
                                                >
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                                                    />
                                                </svg>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-3 w-3'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    stroke='currentColor'
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M19 9l-7 7-7-7'
                                                    />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                    {showDropdown && (
                                        <div
                                            ref={dropdown}
                                            className='w-25 absolute right-0 m-0 mt-2 flex origin-top-right   flex-col place-content-center items-center rounded-md border bg-white py-1 shadow-lg hover:border-b hover:border-orange-300 md:-right-5   '
                                            role='menu'
                                            aria-orientation='vertical'
                                            aria-labelledby='user-menu-button'
                                            tabIndex='-1'
                                        >
                                            {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                                            <a
                                                href='#'
                                                className=' flex  px-3 py-2 text-sm text-gray-700  hover:text-orange-400 '
                                                role='menuitem'
                                                tabIndex='-1'
                                                id='user-menu-item-0'
                                            >
                                                English
                                            </a>
                                            <a
                                                href='#'
                                                className=' flex  px-3 py-2 text-sm text-gray-700 hover:text-orange-400'
                                                role='menuitem'
                                                tabIndex='-1'
                                                id='user-menu-item-0'
                                            >
                                                Turkish
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <Link href='/login'>
                                    <a className=' rounded-md px-3 py-2 text-sm font-semibold text-gray-700  hover:text-orange-400  '>
                                        Log In
                                    </a>
                                </Link>
                                <Link href='/signup'>
                                    <button className='rounded-full py-1 px-3 text-sm font-semibold text-gray-900 hover:bg-primary-100 hover:shadow-lg '>
                                        Sign up
                                    </button>
                                </Link>
                            </div>
                        </div>
                        {/* profile menu */}
                        <div className='relative ml-3 hidden '>
                            <div>
                                <button
                                    type='button'
                                    className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-400'
                                    id='user-menu-button'
                                    aria-expanded='false'
                                    aria-haspopup='true'
                                    onClick={() =>
                                        setProfileShowDropdown((b) => !b)
                                    }
                                >
                                    <span className='sr-only'>
                                        Open user menu
                                    </span>
                                    <div className='bg relative h-10 w-10 overflow-hidden rounded-full bg-sky-200'>
                                        <svg
                                            className='absolute -left-1 h-12 w-12 text-orange-300'
                                            fill='currentColor'
                                            viewBox='0 0 20 20'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                                                clipRule='evenodd'
                                            ></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            {profileShowDropdown && (
                                <div
                                    ref={profileDropdown}
                                    className='absolute right-0 mt-2 w-36 origin-top-right  rounded-md border border-gray-400   bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                                    role='menu'
                                    aria-orientation='vertical'
                                    aria-labelledby='user-menu-button'
                                    tabIndex='-1'
                                >
                                    <a
                                        href='#'
                                        className='block px-4 py-2 text-sm text-gray-700 hover:text-orange-400'
                                        role='menuitem'
                                        tabIndex='-1'
                                        id='user-menu-item-0'
                                    >
                                        Your events
                                    </a>
                                    {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                                    <a
                                        href='#'
                                        className='block px-4 py-2 text-sm text-gray-700 hover:text-orange-400'
                                        role='menuitem'
                                        tabIndex='-1'
                                        id='user-menu-item-0'
                                    >
                                        Your profile
                                    </a>
                                    <a
                                        href='#'
                                        className='block px-4 py-2 text-sm text-gray-700  hover:text-orange-400'
                                        role='menuitem'
                                        tabIndex='-1'
                                        id='user-menu-item-1'
                                    >
                                        Settings
                                    </a>
                                    <a
                                        href='#'
                                        className='block border-t px-4 py-2 text-sm text-gray-700  hover:text-orange-400 '
                                        role='menuitem'
                                        tabIndex='-1'
                                        id='user-menu-item-2'
                                    >
                                        Sign out
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            {showDropdown && (
                <div
                    ref={Mobiledropdown}
                    className='sm:hidden'
                    id='mobile-menu'
                >
                    <div className='flex w-full flex-col items-center space-y-1 px-2 pt-2 pb-1'>
                        <div className='p-2'>
                            <Link
                                href='/allevents'
                                className='block rounded-md  px-3 py-2 text-base font-medium text-gray-700'
                                aria-current='page'
                            >
                                All Events
                            </Link>
                        </div>
                        <div className='p-2'>
                            <Link
                                href='/howitworks'
                                className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 '
                            >
                                How it works
                            </Link>
                        </div>
                        <div className='p-2'>
                            <Link
                                href='/aboutus'
                                className='block rounded-md px-3 py-2 text-base font-medium text-gray-700'
                            >
                                About Us
                            </Link>
                        </div>

                        {/* mobile's languages menu */}
                        <div className='flex flex-row items-center '>
                            <a
                                href='#'
                                className=' flex  px-2 py-2 text-xs  font-medium text-gray-600 hover:text-orange-400 '
                                role='menuitem'
                                tabIndex='-1'
                                id='user-menu-item-0'
                            >
                                English
                            </a>
                            <p className='text-orange-400'>|</p>
                            <a
                                href='#'
                                className=' flex px-2 py-2 text-xs font-medium text-gray-600 hover:text-orange-400'
                                role='menuitem'
                                tabIndex='-1'
                                id='user-menu-item-0'
                            >
                                Turkish
                            </a>
                        </div>
                        <div className='flex w-full flex-row items-center justify-center border-t'>
                            <div className='flex w-full flex-row items-center justify-center justify-items-center py-1 text-sky-400 '>
                                <Link
                                    href='/signin'
                                    className='block  rounded-md border-t px-3 py-2 text-base font-medium '
                                >
                                    Sign in
                                </Link>
                            </div>
                            <p className='text-orange-400'>|</p>
                            <div className=' flex  w-full flex-row items-center justify-center justify-items-center py-1 text-sky-400 '>
                                <Link
                                    href='/signup'
                                    className='block rounded-md bg-orange-400 px-3 py-2 text-base font-medium text-gray-700'
                                >
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;