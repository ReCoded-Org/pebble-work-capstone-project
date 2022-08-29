import React from "react";

import Button from "../Button";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    const componentDidMount = () => {
        window.scrollTo(0, 0);
    };

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className=''>
            <ul className='flex justify-center overflow-hidden'>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <Button
                            customStyle='m-2 border-solid border-black hover:cursor-pointer focus:bg-secondary-100'
                            onClick={() => {
                                paginate(number);
                                componentDidMount();
                            }}
                            label={number}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
