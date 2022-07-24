import Link from "next/link";
import React from "react";

// import logo from "../../../pebble-work-capstone-project/public/images/logo.png";
const { useState, useEffect, useRef } = React;

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [profileShowDropdown, setProfileShowDropdown] = useState(false);
    const [showMobileDropdown, setShowMobileDropdown] = useState(false);
    const [showMobileLangDropdown, setShowMobileLangDropdown] = useState(false);
    ////
    const MobileLangdropdown = useRef(null);
    useEffect(() => {
        // only add the event listener when the dropdown is opened
        if (showMobileLangDropdown) return;
        function handleClick(event) {
            if (
                showMobileLangDropdown.current &&
                !showMobileLangDropdown.current.contains(event.target)
            ) {
                setShowMobileLangDropdown(false);
            }
        }
        window.addEventListener("click", handleClick);
        // clean up
        return () => window.removeEventListener("click", handleClick);
    }, [showMobileLangDropdown]);
    ////
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
        <nav>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='relative flex h-16 items-center justify-between'>
                    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                        {/* <!-- Mobile menu button--> */}
                        <button
                            type='button'
                            className='inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                            aria-controls='mobile-menu'
                            aria-expanded='false'
                            onClick={() => setShowDropdown((b) => !b)}
                        >
                            <span className='sr-only'>Open main menu</span>
                            <svg
                                className='block h-6 w-6'
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
                            {/* <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
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
                            <svg
                                width='100'
                                height='40'
                                viewBox='0 0 216 70'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M68.9165 49.9891C69.9721 50.053 70.3215 49.2528 70.4192 48.3587L70.483 41.0969C70.483 40.0413 70.7723 39.4966 72.0496 39.3989C76.753 39.0796 81.1372 37.4491 85.3597 35.4994C95.3714 30.9537 80.1116 22.8955 69.0104 25.9009C67.2184 26.3818 66.9968 26.795 67.2823 28.6509C67.7331 31.4346 67.9548 34.1845 67.8608 37.0021L67.6054 48.4226C67.6693 49.2528 68.0186 49.9253 68.9165 49.9891ZM70.8024 36.0404C70.6108 33.6736 70.4492 31.4684 70.2915 29.2595C70.2276 28.587 70.577 28.3315 71.2494 28.2038C76.306 27.2458 82.4144 28.1099 84.4957 29.8681C88.3012 33.035 82.6699 34.6992 78.0341 35.3717C75.6636 35.691 73.2668 35.8187 70.8024 36.0404Z'
                                    fill='white'
                                />
                                <path
                                    d='M94.704 49.8287C96.7176 50.118 106.955 50.0541 108.908 49.6071C109.994 49.3817 111.403 49.2878 111.467 47.9128C111.497 46.4702 110.122 46.3425 109.002 46.1509C107.627 45.9292 99.0881 46.087 97.5816 46.1208C95.4403 46.1509 95.4403 46.1509 95.5042 44.1373V40.7788C95.5342 38.6036 95.5342 38.5698 97.8371 38.5059C101.004 38.3782 104.171 38.1227 107.274 37.4841C108.108 37.3226 109.483 37.5141 109.483 36.297C109.449 34.9558 108.108 35.3728 107.274 35.3089C103.852 34.9859 100.399 34.7943 96.9768 35.3089C95.7258 35.5005 95.2788 35.0497 95.2487 33.8664C95.1848 32.4613 95.121 31.0864 94.8956 29.6776C94.734 28.5581 95.151 28.205 96.2405 28.205C99.2158 28.205 102.221 28.2388 105.163 28.5881C107.21 28.8436 109.258 28.7797 111.305 28.7497C112.139 28.7159 112.811 28.3327 112.841 27.4386C112.841 26.7023 112.267 26.2853 111.594 26.1275C110.892 25.9359 102.157 25.4851 97.39 25.2935C95.9212 25.2296 94.3847 25.2634 92.9759 25.7743C92.2396 26.0298 91.5671 26.3191 91.7925 27.3409C92.465 30.4778 91.7286 33.6447 91.6986 36.7778C91.631 39.9448 91.3755 43.1117 91.4093 46.2486C91.4394 48.8708 92.048 49.4155 94.704 49.8287Z'
                                    fill='white'
                                />
                                <path
                                    d='M121.17 51.3966C121.711 50.788 122.191 50.6603 122.864 50.788C125.294 51.205 127.695 50.7542 130.092 50.5326C133.45 50.2133 136.651 49.2215 139.593 47.5234C144.679 43.3009 138.537 39.6869 132.718 37.5117C138.826 35.5282 139.593 31.3056 133.45 28.7773C129.036 26.9553 124.464 26.636 119.791 27.5639C118.641 27.8494 117.458 28.1387 117.586 29.2281C118.386 35.592 118.514 41.9898 118.544 48.3875C118.544 50.1795 119.633 53.1886 121.17 51.3966ZM125.133 37.1286C120.655 37.384 121.425 36.1368 121.425 32.5528C121.264 29.8968 121.264 29.8968 123.792 29.8968C127.534 29.9306 136.076 30.9863 135.659 33.5784C135.498 34.8257 128.27 37.2563 125.133 37.1286ZM129.934 47.3318C127.376 47.3318 127.15 47.3318 124.622 47.1741C121.808 46.9825 121.808 46.9487 121.808 44.0071C121.808 40.6486 121.774 40.5847 125.197 40.2316C128.431 39.9123 131.692 39.8484 134.829 40.998C141.448 42.8238 139.018 47.2379 129.934 47.3318Z'
                                    fill='white'
                                />
                                <path
                                    d='M148.365 51.3966C148.906 50.788 149.387 50.6603 150.059 50.788C152.49 51.205 154.89 50.7542 157.287 50.5326C160.646 50.2133 163.846 49.2215 166.788 47.5234C171.875 43.3009 165.732 39.6869 159.913 37.5117C166.022 35.5282 166.788 31.3056 160.646 28.7773C156.232 26.9553 151.66 26.636 146.986 27.5639C145.837 27.8494 144.653 28.1387 144.781 29.2281C145.581 35.592 145.709 41.9898 145.739 48.3875C145.739 50.1795 146.828 53.1886 148.365 51.3966ZM152.328 37.1286C147.85 37.384 148.62 36.1368 148.62 32.5528C148.459 29.8968 148.459 29.8968 150.987 29.8968C154.729 29.9306 163.272 30.9863 162.855 33.5784C162.693 34.8257 155.465 37.2563 152.328 37.1286ZM157.129 47.3318C154.571 47.3318 154.346 47.3318 151.817 47.1741C149.004 46.9825 149.004 46.9487 149.004 44.0071C149.004 40.6486 148.97 40.5847 152.392 40.2316C155.627 39.9123 158.888 39.8484 162.024 40.998C168.644 42.8238 166.213 47.2379 157.129 47.3318Z'
                                    fill='white'
                                />
                                <path
                                    d='M176.951 51.0455C180.182 50.7901 183.446 50.5346 186.677 50.1176C187.635 49.9899 189.397 50.2153 189.269 48.7426C189.172 47.5893 187.571 48.0401 186.613 47.9763C183.093 47.7809 179.577 47.9124 175.832 48.3895C175.801 44.614 175.674 41 175.929 37.386C176.155 34.3168 176.376 31.2438 176.155 28.1745C176.087 27.3743 175.959 26.5741 175.031 26.4765C173.976 26.3187 173.592 27.1489 173.371 27.9829C173.018 29.294 172.124 40.136 173.243 48.0702C173.592 50.6623 174.265 51.2371 176.951 51.0455Z'
                                    fill='white'
                                />
                                <path
                                    d='M197.307 49.8287C199.321 50.118 209.558 50.0541 211.511 49.6071C212.597 49.3817 214.006 49.2878 214.07 47.9128C214.1 46.4702 212.725 46.3425 211.605 46.1509C210.23 45.9292 201.691 46.087 200.185 46.1208C198.043 46.1509 198.043 46.1509 198.107 44.1373V40.7788C198.137 38.6036 198.137 38.5698 200.44 38.5059C203.607 38.3782 206.774 38.1227 209.877 37.4841C210.711 37.3226 212.086 37.5141 212.086 36.297C212.052 34.9558 210.711 35.3728 209.877 35.3089C206.455 34.9859 203.002 34.7943 199.58 35.3089C198.329 35.5005 197.882 35.0497 197.852 33.8664C197.788 32.4613 197.724 31.0864 197.499 29.6776C197.337 28.5581 197.754 28.205 198.844 28.205C201.819 28.205 204.824 28.2388 207.766 28.5881C209.813 28.8436 211.861 28.7797 213.908 28.7497C214.742 28.7159 215.414 28.3327 215.445 27.4386C215.445 26.7023 214.87 26.2853 214.197 26.1275C213.495 25.9359 204.76 25.4851 199.993 25.2935C198.524 25.2296 196.988 25.2634 195.579 25.7743C194.843 26.0298 194.17 26.3191 194.396 27.3409C195.068 30.4778 194.332 33.6447 194.302 36.7778C194.234 39.9448 193.979 43.1117 194.012 46.2486C194.042 48.8708 194.651 49.4155 197.307 49.8287Z'
                                    fill='white'
                                />
                                <path
                                    d='M59.5743 65.4099C59.1926 65.6655 58.7445 65.6024 55.5723 64.9337L52.0815 64.1354C48.4402 63.2916 44.7569 62.6754 41.035 62.2867C37.1801 61.9191 33.3392 62.0276 29.5088 62.6053C26.7183 62.9555 23.9558 63.4421 21.2143 64.0724C19.6457 64.391 18.1402 64.7726 17.4049 64.9652C14.2362 65.7285 12.6642 66.1136 11.6418 66.4637C8.15102 67.6437 7.06212 68.6941 3.95649 69.0477C2.32139 69.2368 1.71567 69.0477 1.29902 68.7606C-0.336081 67.6437 -0.0139632 64.6151 0.112083 63.3686C0.787829 56.8317 5.58808 52.049 6.00473 51.6358C11.8659 45.9568 19.2606 45.127 24.1624 44.5878C35.4645 43.3763 43.8535 47.1367 47.4389 48.7963C56.5002 53.0363 58.6464 57.693 59.0946 58.7784C60.089 61.1068 60.8242 64.5486 59.5743 65.4099Z'
                                    fill='#2E7EAA'
                                />
                                <path
                                    d='M56.661 51.8901C55.8942 51.9566 55.5721 51.0953 53.5553 49.4041C51.9518 48.1122 50.2326 46.9988 48.4015 46.0569C43.9163 43.6305 39.2736 43.0248 36.3291 42.6432C32.4882 42.2195 28.6473 42.1985 24.8029 42.5802C17.2436 43.1544 15.0658 44.5584 14.0119 43.2804C12.2508 41.2392 15.4194 34.2226 20.6048 30.1751C29.4105 23.3161 41.5144 26.8244 43.7588 27.4651C46.8329 28.358 57.4943 31.4496 59.7351 39.6776C61.2406 45.1291 58.6777 51.701 56.661 51.8901Z'
                                    fill='#53C1E4'
                                />
                                <path
                                    d='M16.6348 28.2273C18.557 29.3757 21.1829 26.3786 25.8571 24.6875C29.635 23.315 32.9017 23.4131 35.8813 23.5706C43.9832 23.9873 47.9537 27.7161 49.2001 26.3156C50.4501 24.9116 47.4705 19.9048 44.3964 16.7466C42.7963 15.0905 37.8665 10.0487 30.2127 10.1782C29.4109 10.1782 20.8328 10.4653 16.8939 16.8097C15.2272 19.4881 14.2014 23.5391 15.5494 26.7288C16.029 27.8457 16.5087 28.1328 16.6348 28.2273Z'
                                    fill='#C0D6D1'
                                />
                                <path
                                    d='M33.0313 8.45606C35.3946 8.66964 37.6354 9.30687 39.7537 10.3713C44.0463 12.6331 44.6555 15.5987 46.3816 15.2801C48.1113 14.9614 49.8724 10.977 49.2002 7.68928C48.3038 3.22515 43.4056 0.546678 39.4666 0.0705038C35.5277 -0.409171 31.8128 1.6951 30.983 2.26931C28.4201 4.08647 26.0497 7.21311 26.7535 8.33002C27.4607 9.44342 29.1869 8.10594 33.0313 8.45606Z'
                                    fill='#F5C798'
                                />
                            </svg>
                        </div>
                    </div>
                    <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                        <div className='hidden sm:ml-6 sm:block'>
                            <div className='flex space-x-4'>
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                {/* <a
                                    href='#'
                                    className='rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'
                                    aria-current='page'
                                >
                                    Dashboard
                                </a> */}

                                <Link href='/login'>
                                    <a className='flex items-center'>
                                        <button className='logIn-btn py-2 px-3 text-sm font-medium md:p-4 '>
                                            Log In
                                        </button>
                                    </a>
                                </Link>
                                <Link href='/signup'>
                                    <button className='signUp-btn mx-2 mt-2 py-2 font-bold md:p-4'>
                                        Sign Up
                                    </button>
                                </Link>
                            </div>
                        </div>
                        {/* Languages menu */}
                        <div className='relative ml-3 hidden sm:ml-6 sm:block'>
                            <div>
                                <button
                                    type='button'
                                    className='flex text-sm  '
                                    id='user-menu-button'
                                    aria-expanded='false'
                                    aria-haspopup='true'
                                    onClick={() => setShowDropdown((b) => !b)}
                                >
                                    <span className='sr-only'>
                                        Open user menu
                                    </span>
                                    <div className='w-15 relative flex h-10 flex-row items-center overflow-hidden  '>
                                        <svg
                                            className='mr-2 h-5 w-5 rounded-full'
                                            aria-hidden='true'
                                            xmlns='http://www.w3.org/2000/svg'
                                            xmlnsXlink='http://www.w3.org/1999/xlink'
                                            viewBox='0 0 3900 3900'
                                        >
                                            <path
                                                fill='#b22234'
                                                d='M0 0h7410v3900H0z'
                                            />
                                            <path
                                                d='M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0'
                                                stroke='#fff'
                                                strokeWidth='300'
                                            />
                                            <path
                                                fill='#3c3b6e'
                                                d='M0 0h2964v2100H0z'
                                            />
                                            <g fill='#fff'>
                                                <g id='d'>
                                                    <g id='c'>
                                                        <g id='e'>
                                                            <g id='b'>
                                                                <path
                                                                    id='a'
                                                                    d='M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z'
                                                                />
                                                                <use
                                                                    xLinkHref='#a'
                                                                    y='420'
                                                                />
                                                                <use
                                                                    xLinkHref='#a'
                                                                    y='840'
                                                                />
                                                                <use
                                                                    xLinkHref='#a'
                                                                    y='1260'
                                                                />
                                                            </g>
                                                            <use
                                                                xLinkHref='#a'
                                                                y='1680'
                                                            />
                                                        </g>
                                                        <use
                                                            xLinkHref='#b'
                                                            x='247'
                                                            y='210'
                                                        />
                                                    </g>
                                                    <use
                                                        xLinkHref='#c'
                                                        x='494'
                                                    />
                                                </g>
                                                <use xLinkHref='#d' x='988' />
                                                <use xLinkHref='#c' x='1976' />
                                                <use xLinkHref='#e' x='2470' />
                                            </g>
                                        </svg>
                                        En
                                    </div>
                                </button>
                            </div>
                            {/* 
          <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
                            {showDropdown && (
                                <div
                                    ref={dropdown}
                                    className='absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                                    role='menu'
                                    aria-orientation='vertical'
                                    aria-labelledby='user-menu-button'
                                    tabIndex='-1'
                                >
                                    {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                                    <a
                                        href='#'
                                        className=' flex flex-row px-4 py-2 text-sm text-gray-700'
                                        role='menuitem'
                                        tabIndex='-1'
                                        id='user-menu-item-0'
                                    >
                                        <svg
                                            width='20px'
                                            height='20px'
                                            viewBox='0 0 64 64'
                                            xmlns='http://www.w3.org/2000/svg'
                                            xmlnsXlink='http://www.w3.org/1999/xlink'
                                            aria-hidden='true'
                                            role='img'
                                            className='iconify iconify--emojione mr-2 h-5 w-5 rounded-full border-b-4'
                                            preserveAspectRatio='xMidYMid meet'
                                        >
                                            <circle
                                                cx='32'
                                                cy='32'
                                                r='30'
                                                fill='#699635'
                                            ></circle>
                                            <g fill='#fff'>
                                                <path d='M31.7 26.7c-.1-.9.4-1.8 1.3-1.6c.7.1 1.5.8 1.1 1.5c-.6 1.1-2.2 1.1-3.2 1.7c.1.6 3-.1 3.5-.1s1 .2.7.8c-.3.6-1.3.6-1.9.7c-.6.1-1.6.1-1.9.6c-.6.8.6.9 1 1.1c1 .5-.6 1-1 .9c-1.5-.3-1.8-1.1-2.7-2.1c-.9 1.2-3.7 3.9-4.3 1.1c-1 .4-2 .9-3.1 1c.5-.7 1.5-1 2.3-1.4c1-.5 1-1.4 1.6-2.2c.2.3 0 .7.1 1.1c.8-.4 1.8-1.2 1.4-2.2c0-.1-1.2-2.5-.2-2.1c.9.4.6 1.3.8 2c.3 1.3-.3 2-1.3 2.8c-.4.3-1.5 1.5-.2 1.5c.9 0 1.7-1 2.2-1.6c.6-.8.4-1.6 0-2.5c-.3-.7-1-2.2-.1-2.7c.7 1.1 1 2.4 1.3 3.7c.2 1.1.4 2.2 1.6 2.5c-.1-.8.4-1.4 1.1-1.7c-.5-.4-3.3.1-2.2-1.4c.1-.7 2.1-1 2.1-1.4'></path>
                                                <path d='M16.4 30.4c.5 1.4 2.2.9 3.2.5c1.6-.8 1.6-2 1.6-3.6c-.6.3-.5 1.4-.7 1.9c-.4.8-1.7 1.5-2.6 1.4c-1.3-.2-1.9-2.4-.9-3.2c.2.7-.3 2.2.9 2.3c.9.1 2.7-1 2.4-2c-1.2.4-1.9 0-1.5-1.3c.3-1.2 1.5-.3 2 .3c1.9-1.1-1.5-5.3.5-6.4c.4.7 1 1.6.5 2.3c-.6.8 0 2.5.1 3.4c1-.9.2.7 1 .8c.5.1.7-1.2 1-1.2c.1.3.1 1.2.6 1.1c.6-.2-.1-1 .5-1.2c.2.5.1 2-.6 1.9c-.6-.1-.5-.5-1.2-.1c-.6.3-.8 0-1.2-.3c-.1 1.2.3 2.5-.4 3.6c-.6.9-1.8 1.4-2.8 1.6c-2.6.5-3.3-2.1-2.4-4.2c.2.6-.2 1.7 0 2.4'></path>
                                                <path d='M40.8 30.9c.5 1.3 1.5-1.4 1.8-1.8c.8-1.2 2 1.9 2.5-.1c.3-1.3-.1-2.6-.2-3.9c-.1-.9-.4-1.7-1-2.4c-.6-.8-1.2-1.5-.9-2.5c1 .4 1 1.2 1.5 2c.1-.6-.3-1.4.1-1.9c.5-.7.9 1.2.9 1.4c.1.5-.4.7-.1 1.5c.2.6.6 1.2 1 1.7c-.1-.6-1-4.7 0-4.7c.3 0 .6 1.2.6 1.4c.2.6-.2 1.1-.2 1.8c-.1 1.2.1 2.6.9 3.5c.4.5 1.9 2.3 1.1 2.9c-.6-.7-1-1.5-1.5-2.2c0 .8.2 1.7-.2 2.3c-.4-.2-.2-1.5-.2-1.8c0-1.1-.7-2-1.3-2.9c-.2 1.5 1 4.3-.4 5.4c-.9.8-2.1-1-2.4-.3c-.3.5-1 2.3-1.8 2.1c-1-.2-1.7-3-.6-3.3c.1.5.1 1.2.4 1.8'></path>
                                                <path d='M19.4 24.1c.7.1 0-2.3 0-2.7c.1-.4.4-.6.6-.2c.3.6.3 1.3.4 1.9c0 .5.1 1.1-.3 1.5c-.6.6-1.4.3-1.7-.5c-1.4 1.2.4 3.3-.8 4.5c-.2-1.1 0-2.3-.4-3.3c-.2-.5-1.1-.3-1.2-1.2c0-.4.3-1.5-.1-1.8c-.2.4-.4 3.5-1.4 2.6c-.8-.6-.6-2.6-.3-3.4c.6.3-.1 2.5.7 2.6c.4.1.5-1.6.6-1.9c.3-.5 1.3-1.9 1.1-.5c-.1.6-.6 2.5.6 2.4c-.1-1-.2-2-.4-3c-.1-.5.2-1.5.6-.6c.3.6.1.9 0 1.5c-.1.7.2 1.4.3 2c.6-.5-.2-2.4.3-3.2c1.2.7-.1 3.1 1.4 3.3'></path>
                                                <path d='M32.3 24.3c-.5.7-1.4.1-1.8-.4c-.5.6-1.5 1.6-2.3.8c-.6-.6.1-1.7-.4-2.2c-.3.5-.8 2.9-1.7 1.8c-.5-.6-1.2-2.7-.1-3.2c-.1.8-.3 1.7.2 2.4s1-1.1 1.2-1.5c.3-.7 1.3-1.9 1.1-.4c-.1.6-.3 2 .3 2.4c.4.3.9-.2 1.1-.5c.4-.5.2-1.3.1-1.9c-.1-.5-.3-1.1 0-1.6c.4-.6.7.8.7 1.1c0 .3.4 3.4 1.1 2.4c.7-.9-1.2-2.9.1-3.4c.5-.2 1.4 1.8.4 1.2c.3.9.7 2.2 0 3'></path>
                                                <path d='M36.1 25.5c.1 1.3 1.2 4.9-.3 5.7c-.2-.4 0-1 .1-1.5c.1-.9-.1-1.8-.2-2.6c-.2-1.9-.4-3.3-1.7-4.8c-.3-.4-.8-.7-.9-1.3c0-.2-.1-1.1.3-.9c.3.1 2 1.6 1.1 1.6c.1.2.5 1 .7 1c0-.5-.6-2 0-2.3c.5-.3 1.1 1.6.9 2c-.2.5-.2.8 0 1.5c.2.8.7 1.5 1.1 2.2c.6 1 1.8 2.4 1.5 3.7c-.6-.3-1-1.7-1.3-2.3c-.2-.5-.4-1-.7-1.4c-.1-.1-.7-.9-.6-.4v-.2'></path>
                                                <path d='M50 27.4c.1 2.1-.6 4.8-3.2 4.8c0-.6 1.3-1.2 1.7-1.5c1-.8.9-2.3.8-3.4c-.1-1.5-.2-3-.5-4.5c-.1-.9-.6-2.2.2-2.8c.5.4 1.2 1.5.9 1.9c-.5.6 0 5.1.1 5.5'></path>
                                                <path d='M37.2 31.9c2.6-1.5 1.8-4.7 1.6-7.2c-.1-.7-.1-1.4-.2-2.1c0-.5-.4-1.2-.2-1.7c.5-1.3.9-.1 1 .7c.1.5-.3.6-.2 1c.1.8.1 1.6.2 2.4c.1 1.3.3 2.6.2 3.8c-.2 1.9-1.2 4-3.5 3.6c.1-.2.8-.3 1.1-.5'></path>
                                                <path d='M41.4 26.9c.1 1 .5 2.8 0 3.7c-.4.6-.4-.4-.5-.5c-.1-.8-.1-1.6-.1-2.5c-.2-2.2-.9-4.4-.9-6.5c0-2.7 2.3 1.5 1 1.3c.1 1.5.3 3 .5 4.5'></path>
                                                <path d='M25.1 21.8c.2.5-2.3 1.8-2.6 1.8c-.1-.5 1.1-1.2 1.4-1.4c.3-.3.5-.3.4-.7c-.2-.4-.1-1.1.4-1.3c1-.3.3 1.2.4 1.6'></path>
                                                <path d='M14.8 30.7c0 .8.3.4.7.2c.2.4-.3 1.5-.8 1c-.7-.7-.1-2.3.2-3c.2.5-.2 1.3-.1 1.8'></path>
                                                <path d='M43 24.5c.1-.4-.2-.8.1-1.2c.4-.5.8.1.6.3c-.2.2-.5-.2-.5.4c0 .3.2.9-.1 1.2c-.2-.1-1.1-1.4-1-1.6c.4-.4.8.8.9.9'></path>
                                                <path d='M16.9 26.2c-.2.4-2.5 1.7-2.6 1.4c0-.3 2.9-2 2.6-1.4'></path>
                                                <path d='M33.9 31.3c-.3.9 1 .1 1.3 0c-.4.7-1.8 1.3-1.6 0c-.1 0-.3.1-.4.1c-.2-.2 1-1 .7-.1'></path>
                                                <path d='M44.8 31c.3 0 .8.9.5 1.1c-.2.2-1.1.3-.6-.1c.6-.6.1-1 .1-1'></path>
                                                <path d='M30.7 25.9c.1-.2.1-.5.2-.7c1 .8-1.6 2.1-1.1.2c.2.2.2.5.4.6c0-.2.1-.5.1-.7c.2.2.2.5.4.6'></path>
                                                <path d='M42.4 27.2c-.3-.4 1.5-1.5 1.8-1.7c.2.3-1.2 1.4-1.8 1.7'></path>
                                                <path d='M48 23.2c-.2-.6-.8-1.8-.2-2.3c.4.3.6 1.8.2 2.3'></path>
                                                <path d='M37.1 21.2c-.1-.2-.4-.4-.4-.7c.1-.4.3-.3.5-.1c.3.4.5 1.5 0 1.8c0-.3.1-.7-.1-1'></path>
                                                <path d='M24.9 23.9c0 .6-1 1.2-1.1.4c-.1-.3.4-1.4.6-1.1c-.4.9-.4 1.2.5.7'></path>
                                                <path d='M37.4 22.8c.4 1 .2.1.6-.1c.7 1.3-1.5 1-1 .2c.1.1.2.3.2.4c.1-.1.1-.3.2-.5'></path>
                                                <path d='M43.8 27.4c-.5-.4.1-.9.4-.4c.2.3.2 1.1-.2 1.3c0-.3.1-.7-.2-.9'></path>
                                                <path d='M23.3 29.6c0-.2-.1-1.7.2-1.5c.4.2.3 1.3-.2 1.5'></path>
                                                <path d='M19.1 20.2c.1.3.2.7.4.2c.8.9-2 .6-1-.3c0 .1.2.7.6.1'></path>
                                                <path d='M29.3 22.4c0-.4-.6-2.1-.1-2.1c.6.1.5 1.6.1 2.1'></path>
                                                <path d='M15.3 21.5c-.3-.1.2-.6 0-1c-.2.1-.4-.2-.2-.4c.8-.6.5 1.4.2 1.4'></path>
                                                <path d='M41.2 41.8l-.4-1.2l-.4 1.2H18.5s.2 1.8 2.4 1.8h19.4V45h5.3v-3.2h-4.4m3.4 2.4H41v-1h3.6v1'></path>
                                            </g>
                                        </svg>
                                        AR
                                    </a>
                                    <a
                                        href='#'
                                        className=' flex flex-row px-4 py-2 text-sm text-gray-700'
                                        role='menuitem'
                                        tabIndex='-1'
                                        id='user-menu-item-0'
                                    >
                                        <svg
                                            className='mr-2 h-5 w-5 rounded-full'
                                            aria-hidden='true'
                                            xmlns='http://www.w3.org/2000/svg'
                                            xmlnsXlink='http://www.w3.org/1999/xlink'
                                            viewBox='0 0 3900 3900'
                                        >
                                            <path
                                                fill='#b22234'
                                                d='M0 0h7410v3900H0z'
                                            />
                                            <path
                                                d='M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0'
                                                stroke='#fff'
                                                strokeWidth='300'
                                            />
                                            <path
                                                fill='#3c3b6e'
                                                d='M0 0h2964v2100H0z'
                                            />
                                            <g fill='#fff'>
                                                <g id='d'>
                                                    <g id='c'>
                                                        <g id='e'>
                                                            <g id='b'>
                                                                <path
                                                                    id='a'
                                                                    d='M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z'
                                                                />
                                                                <use
                                                                    xLinkHref='#a'
                                                                    y='420'
                                                                />
                                                                <use
                                                                    xLinkHref='#a'
                                                                    y='840'
                                                                />
                                                                <use
                                                                    xLinkHref='#a'
                                                                    y='1260'
                                                                />
                                                            </g>
                                                            <use
                                                                xLinkHref='#a'
                                                                y='1680'
                                                            />
                                                        </g>
                                                        <use
                                                            xLinkHref='#b'
                                                            x='247'
                                                            y='210'
                                                        />
                                                    </g>
                                                    <use
                                                        xLinkHref='#c'
                                                        x='494'
                                                    />
                                                </g>
                                                <use xLinkHref='#d' x='988' />
                                                <use xLinkHref='#c' x='1976' />
                                                <use xLinkHref='#e' x='2470' />
                                            </g>
                                        </svg>
                                        EN
                                    </a>
                                    <a
                                        href='#'
                                        className=' flex flex-row px-4 py-2 text-sm text-gray-700'
                                        role='menuitem'
                                        tabIndex='-1'
                                        id='user-menu-item-0'
                                    >
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            xmlnsXlink='http://www.w3.org/1999/xlink'
                                            width='18px'
                                            height='18px'
                                            viewBox='0 0 300 300'
                                            version='1.1'
                                            fill='red'
                                            className='mr-2'
                                        >
                                            <g id='surface1'>
                                                <path
                                                    style={{
                                                        stroke: "none",
                                                        fillRule: "nonzero",
                                                        fill: "rgb(88.627451%,2.35,941%,7.45098%)",
                                                        fillOpacity: "1",
                                                    }}
                                                    d='M 300 150 C 300 232.84375 232.84375 300 150 300 C 67.15625 300 0 232.84375 0 150 C 0 67.15625 67.15625 0 150 0 C 232.84375 0 300 67.15625 300 150 Z M 300 150 '
                                                />
                                                <path
                                                    style={{
                                                        stroke: "none",
                                                        fillRule: "nonzero",
                                                        fill: "rgb(100%,100%,100%)",
                                                        fillOpacity: "1",
                                                    }}
                                                    d='M 296.355469 149.796875 C 296.355469 230.628906 230.828125 296.15625 150 296.15625 C 69.171875 296.15625 3.644531 230.628906 3.644531 149.796875 C 3.644531 68.96875 69.171875 3.441406 150 3.441406 C 230.828125 3.441406 296.355469 68.96875 296.355469 149.796875 Z M 296.355469 149.796875 '
                                                />
                                                <path
                                                    style={{
                                                        stroke: "none",
                                                        fillRule: "nonzero",
                                                        fill: "rgb(88.627451%,2.35,941%,7.45098%)",
                                                        fillOpacity: "1",
                                                    }}
                                                    d='M 290.953125 149.796875 C 290.953125 227.644531 227.847656 290.75 150 290.75 C 72.152344 290.75 9.046875 227.644531 9.046875 149.796875 C 9.046875 71.953125 72.152344 8.84375 150 8.84375 C 227.847656 8.84375 290.953125 71.953125 290.953125 149.796875 Z M 290.953125 149.796875 '
                                                />
                                                <path
                                                    style={{
                                                        stroke: "none",
                                                        fillRule: "nonzero",
                                                        fill: "rgb(100%,100%,100%)",
                                                        fillOpacity: "1",
                                                    }}
                                                    d='M 33.699219 149.804688 C 33.660156 112.128906 58.554688 78.972656 94.746094 68.492188 C 130.9375 58.015625 169.695312 72.746094 189.792969 104.617188 C 171.070312 83.742188 141.414062 76.578125 115.226562 86.601562 C 89.039062 96.625 71.746094 121.761719 71.746094 149.800781 C 71.746094 177.84375 89.039062 202.976562 115.226562 213 C 141.414062 223.023438 171.070312 215.859375 189.792969 194.988281 C 169.695312 226.855469 130.941406 241.585938 94.75 231.109375 C 58.558594 220.636719 33.664062 187.480469 33.699219 149.804688 Z M 33.699219 149.804688 '
                                                />
                                                <path
                                                    style={{
                                                        stroke: "none",
                                                        fillRule: "nonzero",
                                                        fill: "rgb(100%,100%,100%)",
                                                        fillOpacity: "1",
                                                    }}
                                                    d='M 266.300781 124.945312 L 237.082031 134.441406 L 219.011719 109.582031 L 219.011719 140.308594 L 189.792969 149.804688 L 219.011719 159.296875 L 219.011719 190.019531 L 237.082031 165.167969 L 266.296875 174.65625 L 248.242188 149.804688 Z M 266.300781 124.945312 '
                                                />
                                            </g>
                                        </svg>
                                        TR
                                    </a>
                                </div>
                            )}
                        </div>
                        {/* <!-- Profile dropdown --> */}
                        <div className='relative ml-3'>
                            <div>
                                <button
                                    type='button'
                                    className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
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

                                    <div className='relative h-10 w-10 overflow-hidden rounded-full bg-gray-100 '>
                                        <svg
                                            className='absolute -left-1 h-12 w-12 text-gray-400'
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
                            {/* 
          <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
                            {profileShowDropdown && (
                                <div
                                    ref={profileDropdown}
                                    className='absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                                    role='menu'
                                    aria-orientation='vertical'
                                    aria-labelledby='user-menu-button'
                                    tabIndex='-1'
                                >
                                    {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                                    <a
                                        href='#'
                                        className='block px-4 py-2 text-sm text-gray-700'
                                        role='menuitem'
                                        tabIndex='-1'
                                        id='user-menu-item-0'
                                    >
                                        Your Profile
                                    </a>
                                    <a
                                        href='#'
                                        className='block px-4 py-2 text-sm text-gray-700'
                                        role='menuitem'
                                        tabIndex='-1'
                                        id='user-menu-item-1'
                                    >
                                        Settings
                                    </a>
                                    <a
                                        href='#'
                                        className='block px-4 py-2 text-sm text-gray-700'
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
                    <div className='space-y-1 px-2 pt-2 pb-3'>
                        {/* <!-- Current: "bg-gray-900(mys deleted it) text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white(mys deleted it)" --> */}
                        <a
                            href='#'
                            className='block rounded-md  px-3 py-2 text-base font-medium text-white'
                            aria-current='page'
                        >
                            All Events
                        </a>

                        <a
                            href='#'
                            className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                        >
                            How it works
                        </a>

                        <a
                            href='#'
                            className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 '
                        >
                            About Us
                        </a>
                        {/* mobile's languages menu */}
                        <div className='relative ml-3'>
                            <div>
                                <button
                                    type='button'
                                    className='flex  text-sm  '
                                    id='user-menu-button'
                                    aria-expanded='false'
                                    aria-haspopup='true'
                                    onClick={() =>
                                        setShowMobileLangDropdown((b) => !b)
                                    }
                                >
                                    <span className='sr-only'>
                                        Open user menu
                                    </span>
                                    <div className='w-15 relative flex h-10 flex-row items-center overflow-hidden  '>
                                        <svg
                                            className='mr-2 h-5 w-5 rounded-full'
                                            aria-hidden='true'
                                            xmlns='http://www.w3.org/2000/svg'
                                            xmlnsXlink='http://www.w3.org/1999/xlink'
                                            viewBox='0 0 3900 3900'
                                        >
                                            <path
                                                fill='#b22234'
                                                d='M0 0h7410v3900H0z'
                                            />
                                            <path
                                                d='M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0'
                                                stroke='#fff'
                                                strokeWidth='300'
                                            />
                                            <path
                                                fill='#3c3b6e'
                                                d='M0 0h2964v2100H0z'
                                            />
                                            <g fill='#fff'>
                                                <g id='d'>
                                                    <g id='c'>
                                                        <g id='e'>
                                                            <g id='b'>
                                                                <path
                                                                    id='a'
                                                                    d='M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z'
                                                                />
                                                                <use
                                                                    xLinkHref='#a'
                                                                    y='420'
                                                                />
                                                                <use
                                                                    xLinkHref='#a'
                                                                    y='840'
                                                                />
                                                                <use
                                                                    xLinkHref='#a'
                                                                    y='1260'
                                                                />
                                                            </g>
                                                            <use
                                                                xLinkHref='#a'
                                                                y='1680'
                                                            />
                                                        </g>
                                                        <use
                                                            xLinkHref='#b'
                                                            x='247'
                                                            y='210'
                                                        />
                                                    </g>
                                                    <use
                                                        xLinkHref='#c'
                                                        x='494'
                                                    />
                                                </g>
                                                <use xLinkHref='#d' x='988' />
                                                <use xLinkHref='#c' x='1976' />
                                                <use xLinkHref='#e' x='2470' />
                                            </g>
                                        </svg>
                                        En
                                    </div>
                                </button>
                            </div>
                            {/* 
          <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
                            {showDropdown && (
                                <div
                                    ref={MobileLangdropdown}
                                    className='absolute left-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                                    role='menu'
                                    aria-orientation='vertical'
                                    aria-labelledby='user-menu-button'
                                    tabIndex='-1'
                                >
                                    {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                                    <a
                                        href='#'
                                        className=' flex flex-row px-4 py-2 text-sm text-gray-700'
                                        role='menuitem'
                                        tabIndex='-1'
                                        id='user-menu-item-0'
                                    >
                                        <svg
                                            width='20px'
                                            height='20px'
                                            viewBox='0 0 64 64'
                                            xmlns='http://www.w3.org/2000/svg'
                                            xmlnsXlink='http://www.w3.org/1999/xlink'
                                            aria-hidden='true'
                                            role='img'
                                            className='iconify iconify--emojione mr-2 h-5 w-5 rounded-full border-b-4'
                                            preserveAspectRatio='xMidYMid meet'
                                        >
                                            <circle
                                                cx='32'
                                                cy='32'
                                                r='30'
                                                fill='#699635'
                                            ></circle>
                                            <g fill='#fff'>
                                                <path d='M31.7 26.7c-.1-.9.4-1.8 1.3-1.6c.7.1 1.5.8 1.1 1.5c-.6 1.1-2.2 1.1-3.2 1.7c.1.6 3-.1 3.5-.1s1 .2.7.8c-.3.6-1.3.6-1.9.7c-.6.1-1.6.1-1.9.6c-.6.8.6.9 1 1.1c1 .5-.6 1-1 .9c-1.5-.3-1.8-1.1-2.7-2.1c-.9 1.2-3.7 3.9-4.3 1.1c-1 .4-2 .9-3.1 1c.5-.7 1.5-1 2.3-1.4c1-.5 1-1.4 1.6-2.2c.2.3 0 .7.1 1.1c.8-.4 1.8-1.2 1.4-2.2c0-.1-1.2-2.5-.2-2.1c.9.4.6 1.3.8 2c.3 1.3-.3 2-1.3 2.8c-.4.3-1.5 1.5-.2 1.5c.9 0 1.7-1 2.2-1.6c.6-.8.4-1.6 0-2.5c-.3-.7-1-2.2-.1-2.7c.7 1.1 1 2.4 1.3 3.7c.2 1.1.4 2.2 1.6 2.5c-.1-.8.4-1.4 1.1-1.7c-.5-.4-3.3.1-2.2-1.4c.1-.7 2.1-1 2.1-1.4'></path>
                                                <path d='M16.4 30.4c.5 1.4 2.2.9 3.2.5c1.6-.8 1.6-2 1.6-3.6c-.6.3-.5 1.4-.7 1.9c-.4.8-1.7 1.5-2.6 1.4c-1.3-.2-1.9-2.4-.9-3.2c.2.7-.3 2.2.9 2.3c.9.1 2.7-1 2.4-2c-1.2.4-1.9 0-1.5-1.3c.3-1.2 1.5-.3 2 .3c1.9-1.1-1.5-5.3.5-6.4c.4.7 1 1.6.5 2.3c-.6.8 0 2.5.1 3.4c1-.9.2.7 1 .8c.5.1.7-1.2 1-1.2c.1.3.1 1.2.6 1.1c.6-.2-.1-1 .5-1.2c.2.5.1 2-.6 1.9c-.6-.1-.5-.5-1.2-.1c-.6.3-.8 0-1.2-.3c-.1 1.2.3 2.5-.4 3.6c-.6.9-1.8 1.4-2.8 1.6c-2.6.5-3.3-2.1-2.4-4.2c.2.6-.2 1.7 0 2.4'></path>
                                                <path d='M40.8 30.9c.5 1.3 1.5-1.4 1.8-1.8c.8-1.2 2 1.9 2.5-.1c.3-1.3-.1-2.6-.2-3.9c-.1-.9-.4-1.7-1-2.4c-.6-.8-1.2-1.5-.9-2.5c1 .4 1 1.2 1.5 2c.1-.6-.3-1.4.1-1.9c.5-.7.9 1.2.9 1.4c.1.5-.4.7-.1 1.5c.2.6.6 1.2 1 1.7c-.1-.6-1-4.7 0-4.7c.3 0 .6 1.2.6 1.4c.2.6-.2 1.1-.2 1.8c-.1 1.2.1 2.6.9 3.5c.4.5 1.9 2.3 1.1 2.9c-.6-.7-1-1.5-1.5-2.2c0 .8.2 1.7-.2 2.3c-.4-.2-.2-1.5-.2-1.8c0-1.1-.7-2-1.3-2.9c-.2 1.5 1 4.3-.4 5.4c-.9.8-2.1-1-2.4-.3c-.3.5-1 2.3-1.8 2.1c-1-.2-1.7-3-.6-3.3c.1.5.1 1.2.4 1.8'></path>
                                                <path d='M19.4 24.1c.7.1 0-2.3 0-2.7c.1-.4.4-.6.6-.2c.3.6.3 1.3.4 1.9c0 .5.1 1.1-.3 1.5c-.6.6-1.4.3-1.7-.5c-1.4 1.2.4 3.3-.8 4.5c-.2-1.1 0-2.3-.4-3.3c-.2-.5-1.1-.3-1.2-1.2c0-.4.3-1.5-.1-1.8c-.2.4-.4 3.5-1.4 2.6c-.8-.6-.6-2.6-.3-3.4c.6.3-.1 2.5.7 2.6c.4.1.5-1.6.6-1.9c.3-.5 1.3-1.9 1.1-.5c-.1.6-.6 2.5.6 2.4c-.1-1-.2-2-.4-3c-.1-.5.2-1.5.6-.6c.3.6.1.9 0 1.5c-.1.7.2 1.4.3 2c.6-.5-.2-2.4.3-3.2c1.2.7-.1 3.1 1.4 3.3'></path>
                                                <path d='M32.3 24.3c-.5.7-1.4.1-1.8-.4c-.5.6-1.5 1.6-2.3.8c-.6-.6.1-1.7-.4-2.2c-.3.5-.8 2.9-1.7 1.8c-.5-.6-1.2-2.7-.1-3.2c-.1.8-.3 1.7.2 2.4s1-1.1 1.2-1.5c.3-.7 1.3-1.9 1.1-.4c-.1.6-.3 2 .3 2.4c.4.3.9-.2 1.1-.5c.4-.5.2-1.3.1-1.9c-.1-.5-.3-1.1 0-1.6c.4-.6.7.8.7 1.1c0 .3.4 3.4 1.1 2.4c.7-.9-1.2-2.9.1-3.4c.5-.2 1.4 1.8.4 1.2c.3.9.7 2.2 0 3'></path>
                                                <path d='M36.1 25.5c.1 1.3 1.2 4.9-.3 5.7c-.2-.4 0-1 .1-1.5c.1-.9-.1-1.8-.2-2.6c-.2-1.9-.4-3.3-1.7-4.8c-.3-.4-.8-.7-.9-1.3c0-.2-.1-1.1.3-.9c.3.1 2 1.6 1.1 1.6c.1.2.5 1 .7 1c0-.5-.6-2 0-2.3c.5-.3 1.1 1.6.9 2c-.2.5-.2.8 0 1.5c.2.8.7 1.5 1.1 2.2c.6 1 1.8 2.4 1.5 3.7c-.6-.3-1-1.7-1.3-2.3c-.2-.5-.4-1-.7-1.4c-.1-.1-.7-.9-.6-.4v-.2'></path>
                                                <path d='M50 27.4c.1 2.1-.6 4.8-3.2 4.8c0-.6 1.3-1.2 1.7-1.5c1-.8.9-2.3.8-3.4c-.1-1.5-.2-3-.5-4.5c-.1-.9-.6-2.2.2-2.8c.5.4 1.2 1.5.9 1.9c-.5.6 0 5.1.1 5.5'></path>
                                                <path d='M37.2 31.9c2.6-1.5 1.8-4.7 1.6-7.2c-.1-.7-.1-1.4-.2-2.1c0-.5-.4-1.2-.2-1.7c.5-1.3.9-.1 1 .7c.1.5-.3.6-.2 1c.1.8.1 1.6.2 2.4c.1 1.3.3 2.6.2 3.8c-.2 1.9-1.2 4-3.5 3.6c.1-.2.8-.3 1.1-.5'></path>
                                                <path d='M41.4 26.9c.1 1 .5 2.8 0 3.7c-.4.6-.4-.4-.5-.5c-.1-.8-.1-1.6-.1-2.5c-.2-2.2-.9-4.4-.9-6.5c0-2.7 2.3 1.5 1 1.3c.1 1.5.3 3 .5 4.5'></path>
                                                <path d='M25.1 21.8c.2.5-2.3 1.8-2.6 1.8c-.1-.5 1.1-1.2 1.4-1.4c.3-.3.5-.3.4-.7c-.2-.4-.1-1.1.4-1.3c1-.3.3 1.2.4 1.6'></path>
                                                <path d='M14.8 30.7c0 .8.3.4.7.2c.2.4-.3 1.5-.8 1c-.7-.7-.1-2.3.2-3c.2.5-.2 1.3-.1 1.8'></path>
                                                <path d='M43 24.5c.1-.4-.2-.8.1-1.2c.4-.5.8.1.6.3c-.2.2-.5-.2-.5.4c0 .3.2.9-.1 1.2c-.2-.1-1.1-1.4-1-1.6c.4-.4.8.8.9.9'></path>
                                                <path d='M16.9 26.2c-.2.4-2.5 1.7-2.6 1.4c0-.3 2.9-2 2.6-1.4'></path>
                                                <path d='M33.9 31.3c-.3.9 1 .1 1.3 0c-.4.7-1.8 1.3-1.6 0c-.1 0-.3.1-.4.1c-.2-.2 1-1 .7-.1'></path>
                                                <path d='M44.8 31c.3 0 .8.9.5 1.1c-.2.2-1.1.3-.6-.1c.6-.6.1-1 .1-1'></path>
                                                <path d='M30.7 25.9c.1-.2.1-.5.2-.7c1 .8-1.6 2.1-1.1.2c.2.2.2.5.4.6c0-.2.1-.5.1-.7c.2.2.2.5.4.6'></path>
                                                <path d='M42.4 27.2c-.3-.4 1.5-1.5 1.8-1.7c.2.3-1.2 1.4-1.8 1.7'></path>
                                                <path d='M48 23.2c-.2-.6-.8-1.8-.2-2.3c.4.3.6 1.8.2 2.3'></path>
                                                <path d='M37.1 21.2c-.1-.2-.4-.4-.4-.7c.1-.4.3-.3.5-.1c.3.4.5 1.5 0 1.8c0-.3.1-.7-.1-1'></path>
                                                <path d='M24.9 23.9c0 .6-1 1.2-1.1.4c-.1-.3.4-1.4.6-1.1c-.4.9-.4 1.2.5.7'></path>
                                                <path d='M37.4 22.8c.4 1 .2.1.6-.1c.7 1.3-1.5 1-1 .2c.1.1.2.3.2.4c.1-.1.1-.3.2-.5'></path>
                                                <path d='M43.8 27.4c-.5-.4.1-.9.4-.4c.2.3.2 1.1-.2 1.3c0-.3.1-.7-.2-.9'></path>
                                                <path d='M23.3 29.6c0-.2-.1-1.7.2-1.5c.4.2.3 1.3-.2 1.5'></path>
                                                <path d='M19.1 20.2c.1.3.2.7.4.2c.8.9-2 .6-1-.3c0 .1.2.7.6.1'></path>
                                                <path d='M29.3 22.4c0-.4-.6-2.1-.1-2.1c.6.1.5 1.6.1 2.1'></path>
                                                <path d='M15.3 21.5c-.3-.1.2-.6 0-1c-.2.1-.4-.2-.2-.4c.8-.6.5 1.4.2 1.4'></path>
                                                <path d='M41.2 41.8l-.4-1.2l-.4 1.2H18.5s.2 1.8 2.4 1.8h19.4V45h5.3v-3.2h-4.4m3.4 2.4H41v-1h3.6v1'></path>
                                            </g>
                                        </svg>{" "}
                                        AR
                                    </a>
                                    <a
                                        href='#'
                                        className=' flex flex-row px-4 py-2 text-sm text-gray-700'
                                        role='menuitem'
                                        tabIndex='-1'
                                        id='user-menu-item-0'
                                    >
                                        <svg
                                            className='mr-2 h-5 w-5 rounded-full'
                                            aria-hidden='true'
                                            xmlns='http://www.w3.org/2000/svg'
                                            xmlnsXlink='http://www.w3.org/1999/xlink'
                                            viewBox='0 0 3900 3900'
                                        >
                                            <path
                                                fill='#b22234'
                                                d='M0 0h7410v3900H0z'
                                            />
                                            <path
                                                d='M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0'
                                                stroke='#fff'
                                                strokeWidth='300'
                                            />
                                            <path
                                                fill='#3c3b6e'
                                                d='M0 0h2964v2100H0z'
                                            />
                                            <g fill='#fff'>
                                                <g id='d'>
                                                    <g id='c'>
                                                        <g id='e'>
                                                            <g id='b'>
                                                                <path
                                                                    id='a'
                                                                    d='M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z'
                                                                />
                                                                <use
                                                                    xLinkHref='#a'
                                                                    y='420'
                                                                />
                                                                <use
                                                                    xLinkHref='#a'
                                                                    y='840'
                                                                />
                                                                <use
                                                                    xLinkHref='#a'
                                                                    y='1260'
                                                                />
                                                            </g>
                                                            <use
                                                                xLinkHref='#a'
                                                                y='1680'
                                                            />
                                                        </g>
                                                        <use
                                                            xLinkHref='#b'
                                                            x='247'
                                                            y='210'
                                                        />
                                                    </g>
                                                    <use
                                                        xLinkHref='#c'
                                                        x='494'
                                                    />
                                                </g>
                                                <use xLinkHref='#d' x='988' />
                                                <use xLinkHref='#c' x='1976' />
                                                <use xLinkHref='#e' x='2470' />
                                            </g>
                                        </svg>
                                        EN
                                    </a>
                                    <a
                                        href='#'
                                        className=' flex flex-row px-4 py-2 text-sm text-gray-700'
                                        role='menuitem'
                                        tabIndex='-1'
                                        id='user-menu-item-0'
                                    >
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            xmlnsXlink='http://www.w3.org/1999/xlink'
                                            width='18px'
                                            height='18px'
                                            viewBox='0 0 300 300'
                                            version='1.1'
                                            fill='red'
                                            className='mr-2'
                                        >
                                            <g id='surface1'>
                                                <path
                                                    style={{
                                                        stroke: "none",
                                                        fillRule: "nonzero",
                                                        fill: "rgb(88.627451%,2.35,941%,7.45098%)",
                                                        fillOpacity: "1",
                                                    }}
                                                    d='M 300 150 C 300 232.84375 232.84375 300 150 300 C 67.15625 300 0 232.84375 0 150 C 0 67.15625 67.15625 0 150 0 C 232.84375 0 300 67.15625 300 150 Z M 300 150 '
                                                />
                                                <path
                                                    style={{
                                                        stroke: "none",
                                                        fillRule: "nonzero",
                                                        fill: "rgb(100%,100%,100%)",
                                                        fillOpacity: "1",
                                                    }}
                                                    d='M 296.355469 149.796875 C 296.355469 230.628906 230.828125 296.15625 150 296.15625 C 69.171875 296.15625 3.644531 230.628906 3.644531 149.796875 C 3.644531 68.96875 69.171875 3.441406 150 3.441406 C 230.828125 3.441406 296.355469 68.96875 296.355469 149.796875 Z M 296.355469 149.796875 '
                                                />
                                                <path
                                                    style={{
                                                        stroke: "none",
                                                        fillRule: "nonzero",
                                                        fill: "rgb(88.627451%,2.35,941%,7.45098%)",
                                                        fillOpacity: "1",
                                                    }}
                                                    d='M 290.953125 149.796875 C 290.953125 227.644531 227.847656 290.75 150 290.75 C 72.152344 290.75 9.046875 227.644531 9.046875 149.796875 C 9.046875 71.953125 72.152344 8.84375 150 8.84375 C 227.847656 8.84375 290.953125 71.953125 290.953125 149.796875 Z M 290.953125 149.796875 '
                                                />
                                                <path
                                                    style={{
                                                        stroke: "none",
                                                        fillRule: "nonzero",
                                                        fill: "rgb(100%,100%,100%)",
                                                        fillOpacity: "1",
                                                    }}
                                                    d='M 33.699219 149.804688 C 33.660156 112.128906 58.554688 78.972656 94.746094 68.492188 C 130.9375 58.015625 169.695312 72.746094 189.792969 104.617188 C 171.070312 83.742188 141.414062 76.578125 115.226562 86.601562 C 89.039062 96.625 71.746094 121.761719 71.746094 149.800781 C 71.746094 177.84375 89.039062 202.976562 115.226562 213 C 141.414062 223.023438 171.070312 215.859375 189.792969 194.988281 C 169.695312 226.855469 130.941406 241.585938 94.75 231.109375 C 58.558594 220.636719 33.664062 187.480469 33.699219 149.804688 Z M 33.699219 149.804688 '
                                                />
                                                <path
                                                    style={{
                                                        stroke: "none",
                                                        fillRule: "nonzero",
                                                        fill: "rgb(100%,100%,100%)",
                                                        fillOpacity: "1",
                                                    }}
                                                    d='M 266.300781 124.945312 L 237.082031 134.441406 L 219.011719 109.582031 L 219.011719 140.308594 L 189.792969 149.804688 L 219.011719 159.296875 L 219.011719 190.019531 L 237.082031 165.167969 L 266.296875 174.65625 L 248.242188 149.804688 Z M 266.300781 124.945312 '
                                                />
                                            </g>
                                        </svg>
                                        TR
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
