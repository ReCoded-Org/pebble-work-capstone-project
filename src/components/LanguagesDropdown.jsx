import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import onClickOutside from "react-onclickoutside";

const Dropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { asPath } = useRouter();
    const { t } = useTranslation("common");

    const dropdown = useRef(null);
    Dropdown.handleClickOutside = () => setShowDropdown(false);
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
    return (
        <div>
            <div className=' relative ml-3 hidden sm:ml-6 sm:block'>
                <div>
                    <button
                        type='button'
                        className='flex text-sm  '
                        id='user-menu-button'
                        aria-expanded='false'
                        aria-haspopup='true'
                        onClick={() => setShowDropdown((b) => !b)}
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
        </div>
    );
};

const clickOutsideConfig = {
    handleClickOutside: () => Dropdown.handleClickOutside,
};
export default onClickOutside(Dropdown, clickOutsideConfig);
