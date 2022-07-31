import React from "react";

import InputComponent from "../InputComponent";

const ChooseLocationAndEventType = () => {
    // const [title, setTitle] = useState("");
    return (
        <>
            <div className='flex flex-col justify-center gap-10 py-3 md:flex-row'>
                <div className='mx-4'>
                    <h1 className='text-3xl font-bold'>
                        First, set your events’s location:
                    </h1>
                    <p className='my-1 w-full text-gray-500'>
                        Pebble events can be both local or online. Choose where
                        you want to host your event.
                    </p>
                    <div className='relative w-full py-5'>
                        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                            <svg
                                aria-hidden='true'
                                className='h-5 w-5 text-gray-500 dark:text-gray-400'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                                    clipRule='evenodd'
                                ></path>
                            </svg>
                        </div>
                        <InputComponent
                            placeholder='Search for a city'
                            className='w-full rounded border px-9 py-1 shadow hover:border-primary-200 focus:outline-none'
                            // onChange={(event) => {
                            //     setTitle(event.target.value);
                            //     console.log("jerjkeh");
                            // }}
                        />
                    </div>
                </div>
                <div className='mx-4'>
                    <div className='my-10 text-center'>
                        <span>selected location!</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseLocationAndEventType;
{
    /* <div className='flex flex-col justify-center gap-10'>
<div>
    <div>
        <h1 className='text-bold py-2  text-3xl'>
            First, set your events’s location:
        </h1>
        <p
            style={{ width: "433px" }}
            className='matext-lg py-1 text-gray-500'
        >
            Pebble events can be both local or online. Choose
            where you want to host your event.
        </p>
    </div>
    <div>
        <InputComponent className='rounded border px-2 py-1 shadow' />
    </div>
</div>
<div></div>
</div> */
}
