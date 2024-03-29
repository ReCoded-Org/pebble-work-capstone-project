import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import React from "react";

import useAuth from "@/hooks/useAuth";

import axios from "@/api/axios";

const { useState, useEffect, useRef } = React;

const Navbar = ({ closeMobileMenu, showMobileDropdown, open }) => {
    const { t } = useTranslation("common");
    // we get the user information with useAuth.
    const { auth, setAuth } = useAuth();
    const { asPath } = useRouter();
    const [showDropdown, setShowDropdown] = useState(false);
    const [profileShowDropdown, setProfileShowDropdown] = useState(false);
    // const [showMobileDropdown, setShowMobileDropdown] = useState(false);
    const Mobiledropdown = useRef(null);
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
    const dropdown = useRef(null);
    const close = () => {
        setTimeout(() => {
            setProfileShowDropdown(false);
        }, 250);
    };

    const closeLanguagesMenu = () => {
        setTimeout(() => {
            setShowDropdown(false);
        }, 250);
    };
    const profileDropdown = useRef(null);
    useEffect(() => {
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
        return () => window.removeEventListener("click", handleClick);
    }, [profileShowDropdown]);

    const handleSignOut = async () => {
        try {
            const response = await axios.get("/api/auth/signout", {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            });
            setAuth({});
            console.log(response);
        } catch (err) {
            //console.log(err);
        }
    };

    return (
        <nav
            className='relative z-50 bg-white shadow-md'
            // style={{ backgroundColor: "transparent" }}
        >
            <div className='mx-auto max-w-7xl  sm:px-6  lg:px-8  '>
                <div className='relative flex h-16 items-center justify-between'>
                    <div className='absolute inset-y-0 left-0 flex w-full items-center sm:hidden '>
                        {/* <!-- Mobile menu button--> */}
                        <button
                            type='button'
                            className='inline-flex items-center justify-center rounded-md p-2 px-4 text-gray-400  hover:text-white focus:outline-none '
                            aria-controls='mobile-menu'
                            aria-expanded='false'
                            onClick={open}
                            onBlur={closeMobileMenu}
                        >
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
                        {showMobileDropdown && (
                            <div
                                ref={Mobiledropdown}
                                className=' absolute z-50  w-full '
                                id='mobile-menu'
                            >
                                <div className='absolute z-50  mt-8 flex  w-full  flex-col  items-center border-b  bg-white pt-2 pb-1  shadow-lg '>
                                    <div className='p-2'>
                                        <Link
                                            href='/events'
                                            className='block rounded-md  px-3 py-2 text-base font-medium text-gray-700'
                                            aria-current='page'
                                        >
                                            {t("common.nav.allEvents")}
                                        </Link>
                                    </div>
                                    <div className='p-2'>
                                        <Link
                                            href='/#how-it-works'
                                            className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 '
                                        >
                                            {t("common.nav.howItWorks")}
                                        </Link>
                                    </div>
                                    <div className='p-2'>
                                        <Link
                                            href='/about'
                                            className='block rounded-md px-3 py-2 text-base font-medium text-gray-700'
                                        >
                                            {t("common.nav.aboutUs")}
                                        </Link>
                                    </div>

                                    {/* mobile's languages menu */}
                                    <div className='flex flex-row items-center py-1  '>
                                        <Link
                                            href={asPath}
                                            locale='en'
                                            className=' flex  px-2 py-2 text-xs  font-medium text-gray-600 hover:text-orange-400 '
                                            role='menuitem'
                                            tabIndex='-1'
                                            id='user-menu-item-0'
                                        >
                                            {t("common.nav.english")}
                                        </Link>

                                        <p className='mx-3 text-orange-400'>
                                            |
                                        </p>
                                        <Link
                                            href={asPath}
                                            locale='tr'
                                            className=' flex px-2 py-2 text-xs font-medium text-gray-600 hover:text-orange-400'
                                            role='menuitem'
                                            tabIndex='-1'
                                            id='user-menu-item-0'
                                        >
                                            {t("common.nav.turkish")}
                                        </Link>
                                    </div>
                                    <div className='flex w-full flex-row items-center justify-center border-t'>
                                        <div className='flex w-full flex-row items-center justify-center justify-items-center py-1 text-sky-400 '>
                                            <Link
                                                href='/signin'
                                                className='block  rounded-md border-t px-3 py-2 text-base font-medium '
                                            >
                                                {t("common.nav.signIn")}
                                            </Link>
                                        </div>
                                        <p className='text-orange-400'>|</p>
                                        <div className=' flex  w-full flex-row items-center justify-center justify-items-center py-1 text-sky-400 '>
                                            <Link
                                                href='/signup'
                                                className='block rounded-md bg-orange-400 px-3 py-2 text-base font-medium text-gray-700'
                                            >
                                                {t("common.nav.signUp")}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                        <Link
                            className='flex flex-shrink-0 items-center'
                            href='/'
                        >
                            <Image
                                className='hover:cursor-pointer'
                                src='/images/logo.png'
                                alt='logo'
                                height={40}
                                width={100}
                            />
                        </Link>
                    </div>
                    <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                        <div className='hidden sm:ml-6  sm:block'>
                            <div className='flex items-center space-x-3'>
                                <Link href='/events'>
                                    <a className=' hidden rounded-md px-3 py-2 text-sm font-semibold  text-gray-700  hover:text-orange-400'>
                                        {t("common.nav.events")}
                                    </a>
                                </Link>
                                <Link href='/about'>
                                    <a className=' hidden rounded-md px-3 py-2 text-sm font-semibold  text-gray-700  hover:text-orange-400'>
                                        {t("common.nav.about")}
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
                                            onBlur={closeLanguagesMenu}
                                        >
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
                                            id='langMenu'
                                            ref={dropdown}
                                            className='w-25 absolute right-0 z-50 m-0 mt-2 flex origin-top-right   flex-col place-content-center items-center rounded-md border bg-white  shadow-lg hover:border-b hover:border-orange-300 md:-right-5   '
                                            role='menu'
                                            aria-orientation='vertical'
                                            aria-labelledby='user-menu-button'
                                            tabIndex='-1'
                                        >
                                            <div className='rounded px-2 py-1 hover:bg-gray-100'>
                                                <Link
                                                    href={asPath}
                                                    locale='en'
                                                    className=' flex text-sm text-gray-700 hover:text-orange-400 '
                                                    role='menuitem'
                                                    tabIndex='-1'
                                                    id='user-menu-item-0'
                                                >
                                                    {t("common.nav.english")}
                                                </Link>
                                            </div>

                                            <div className=' w-full rounded px-2 py-1 hover:bg-gray-100'>
                                                <Link
                                                    href={asPath}
                                                    locale='tr'
                                                    className=' flex text-sm text-gray-700 hover:text-orange-400'
                                                    role='menuitem'
                                                    tabIndex='-1'
                                                    id='user-menu-item-0'
                                                >
                                                    {t("common.nav.turkish")}
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* If there is NO authorized email, then user is not signed in. Show the sign in and out buttons */}
                                {!auth?.id && (
                                    <>
                                        <Link href='/signin'>
                                            <a className=' rounded-md px-3 py-2 text-sm font-semibold text-gray-800  hover:text-orange-400  '>
                                                {t("common.nav.login")}
                                            </a>
                                        </Link>
                                        <Link href='/signup'>
                                            <button className='rounded-full bg-primary-200 py-1  px-3 text-sm font-semibold text-gray-800 hover:bg-orange-400 hover:text-white hover:shadow-lg '>
                                                {t("common.nav.signUp")}
                                            </button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                        {/* profile menu */}
                        {/* If there is authorized email, then user is signed in. Show profile menu */}
                        {auth?.id && (
                            <div className='relative ml-3 mr-2   hover:border-primary-200'>
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
                                        onBlur={close}
                                    >
                                        <span className='sr-only'>
                                            Open user menu
                                        </span>
                                        <div className='bg relative h-10 w-10 overflow-hidden rounded-full bg-sky-200'>
                                            {!auth?.profileImage && (
                                                <Image
                                                    src='/images/userAvatar.jpeg'
                                                    alt={`${auth.firstName} profilephoto`}
                                                    width='100%'
                                                    height='100%'
                                                    layout='responsive'
                                                    objectFit='cover'
                                                />

                                                // <svg
                                                //     className='absolute -left-1 h-12 w-12 text-orange-300'
                                                //     fill='currentColor'
                                                //     viewBox='0 0 20 20'
                                                //     xmlns='http://www.w3.org/2000/svg'
                                                // >
                                                //     <path
                                                //         fillRule='evenodd'
                                                //         d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                                                //         clipRule='evenodd'
                                                //     ></path>
                                                // </svg>
                                            )}
                                            {auth?.profileImage && (
                                                <Image
                                                    src={auth.profileImage}
                                                    alt={`${auth.firstName} profilephoto`}
                                                    width='100%'
                                                    height='100%'
                                                    layout='responsive'
                                                    objectFit='cover'
                                                />
                                            )}
                                        </div>
                                    </button>
                                </div>
                                {/* The z-50 index below is to make the menu dropdown show over content, instead of showing behind */}
                                {profileShowDropdown && (
                                    <div
                                        ref={profileDropdown}
                                        className=' absolute right-0 z-50 mt-2 w-36 origin-top-right   rounded-md border border-gray-400 bg-white   shadow-lg  ring-1 ring-black ring-opacity-5 hover:border-primary-200 focus:outline-none'
                                        role='menu'
                                        aria-orientation='vertical'
                                        aria-labelledby='user-menu-button'
                                        tabIndex='-1'
                                    >
                                        <div className='rounded  py-1 pl-2 hover:bg-gray-100'>
                                            <Link
                                                href='/events'
                                                className='block px-4 py-2 text-sm text-gray-700 hover:text-orange-400'
                                                role='menuitem'
                                                tabIndex='-1'
                                                id='user-menu-item-0'
                                            >
                                                {t("common.nav.yourEvents")}
                                            </Link>
                                        </div>
                                        <div className='rounded  py-1 pl-2 hover:bg-gray-100'>
                                            <Link
                                                href='/yourevents'
                                                className='block px-4 py-2 text-sm text-gray-700 hover:text-orange-400'
                                                role='menuitem'
                                                tabIndex='-1'
                                                id='user-menu-item-0'
                                            >
                                                {t("common.nav.myEvents")}
                                            </Link>
                                        </div>

                                        <div className='py-1 pl-2 hover:bg-gray-100'>
                                            <Link
                                                href='/editprofile'
                                                className='block px-4 py-2 text-sm text-gray-700 hover:text-orange-400'
                                                role='menuitem'
                                                tabIndex='-1'
                                                id='user-menu-item-0'
                                            >
                                                {t("common.nav.yourProfile")}
                                            </Link>
                                        </div>
                                        <div className='py-1 pl-2 hover:bg-gray-100'>
                                            <Link
                                                href='/eventcreation'
                                                className='block px-4 py-2 text-sm text-gray-700  hover:text-orange-400'
                                                role='menuitem'
                                                tabIndex='-1'
                                                id='user-menu-item-1'
                                            >
                                                {t("common.nav.settings")}
                                            </Link>
                                        </div>
                                        <div className='border-t py-1 pl-2 hover:bg-primary-200 hover:text-white '>
                                            <button onClick={handleSignOut}>
                                                <Link
                                                    href='/'
                                                    className='block border-t px-4 py-2 text-sm text-gray-700  hover:text-orange-400 '
                                                    role='menuitem'
                                                    tabIndex='-1'
                                                    id='user-menu-item-2'
                                                >
                                                    {t("common.nav.signOut")}
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
