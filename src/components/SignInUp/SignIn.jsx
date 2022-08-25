import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import useAuth from "@/hooks/useAuth";

import axios from "@/api/axios";

const SIGNIN_URL = "/api/auth/signin";

function SignIn() {
    const [domLoaded, setDomLoaded] = useState(false);

    let { auth, setAuth } = useAuth();

    const router = useRouter();

    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [email, pwd]);

    const handleSignIn = async (e) => {
        e.preventDefault();
        const user = {
            email: email,
            password: pwd,
        };
        try {
            const response = await axios.post(
                SIGNIN_URL,
                JSON.stringify(user),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            console.log(response.data.user)
            const authData = { ...auth };
            authData["email"] = email;
            authData["firstName"] = response.data.user.firstName;
            setAuth(authData);
            router.push("/events");
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response", err);
            } else if (err.response?.status === 400) {
                setErrMsg("Invalid email or password");
            } else {
                setErrMsg("Login Failed");
            }
            errRef.current.focus();
        }
    };

    return (
                domLoaded && (
                    <form className='m-5  flex h-full flex-col  items-center  justify-around   lg:flex-row'>
                        <div className='h-100 flex w-96 flex-col items-center justify-center text-center 2xl:scale-150 '>
                            <Image
                                src='/svg/signupinMan.svg'
                                alt='logo'
                                height={300}
                                width={300}
                            />
                        </div>
                        <div className='flex w-96 flex-col items-center justify-center py-1 text-center lg:items-start  2xl:scale-150'>
                            <h1 className='py-3 text-3xl font-semibold md:flex'>
                                Sign In
                            </h1>
                            <p
                                ref={errRef}
                                className={
                                    errMsg
                                        ? "rounded bg-primary-200 bg-opacity-25"
                                        : "hidden"
                                }
                                aria-live='assertive'
                            >
                                {errMsg}
                            </p>
                            <div className='w-80'>
                                <div className='ml-px w-80'>
                                    <input
                                        type='email'
                                        id='email'
                                        ref={emailRef}
                                        autoComplete='off'
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        required
                                        className='focus:shadow-outline w-80 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:ring-secondary-200'
                                        placeholder='Email address'
                                    />
                                </div>
                                <div className='ml-px py-1'>
                                    <input
                                        type='password'
                                        id='password'
                                        autoComplete='off'
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        required
                                        className='focus:shadow-outline w-80 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:ring-secondary-200'
                                        placeholder='Password'
                                    />
                                </div>
                                <div className='flex flex-row items-center justify-center py-1'>
                                    <Image
                                        src='/svg/line.svg'
                                        alt='line'
                                        width={190}
                                        height={2}
                                    />
                            <div className='text-sm text-gray-400'>OR</div>
                                    <Image
                                        src='/svg/line.svg'
                                        alt='line'
                                        width={190}
                                        height={2}
                                    />
                                </div>
                                <p className='m-1 flex text-xs italic text-gray-700'>
                                    Don&apos;t have an account? &nbsp;
                                    <Link href='/signup'>
                                        <div className='cursor-pointer border-b border-primary-200 text-primary-200'>
                                            Sign Up
                                        </div>
                                    </Link>
                                </p>
                                <div className=' py-1'>
                                    <button
                                        className='w-80 rounded bg-primary-200 px-2 py-1 md:w-auto '
                                        onClick={handleSignIn}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                )
    );
}

export default SignIn;
