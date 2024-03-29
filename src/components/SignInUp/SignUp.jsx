import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import React, { useEffect, useRef, useState } from "react";

import axios from "../../api/axios";

const PWD_REGEX = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%]).{8,24}$/;
const SIGNUP_URL = "/api/auth/user/signup";

const SignUp = () => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const [domLoaded, setDomLoaded] = useState(false);
    const emailRef = useRef();
    const nameRef = useRef();
    const surnameRef = useRef();
    const pwdRef = useRef();
    const errRef = useRef();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState("");

    // should start with name input field already focused, but not working
    // useEffect(() => {
    //     nameRef.focus();
    // }, []);

    useEffect(() => {
        const result = email.includes("@");
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
    }, [pwd]);

    useEffect(() => {
        setErrMsg("");
    }, [email, pwd]);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    const handleSignUp = async (e) => {
        e.preventDefault();
        // re-check email and password in case sign up button is activated with hack
        // email should be verified by checking if the server response says "email is already used"
        const v1 = email.includes("@");
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }

        const user = {
            email: email,
            password: pwd,
            firstName: name,
            lastName: surname,
            dateOfBirth: "1899-04-04",
            gender: "male",
        };
        try {
            const response = await axios.post(
                SIGNUP_URL,
                JSON.stringify(user),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            //console.log(response.data);
            router.push("/signin");
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 400) {
                // change the email valid state here
                setErrMsg("Email already in use");
            }
            errRef.current.focus();
        }

        // instance.post('/api/auth/user/signup', {
        //     email: "jangismarifet4321@gmail.com",
        //     password: "123asd123",
        //     firstName: "Jangis",
        //     lastName: "Marifet",
        //     dateOfBirth: "1989-11-13",
        //     gender: "other"
        // })
        // .then(function (response) {
        //     console.log("response");
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log("error");
        //     console.log(error);
        // });
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
                        {t("common.nav.signUp")}
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
                        <div className=' flex flex-row justify-between py-1'>
                            <div className='w-80'>
                                <input
                                    type='text'
                                    id='name'
                                    ref={nameRef}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className='focus:shadow-outline mx-px  w-40 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:ring-secondary-200'
                                    placeholder={t("signUpPage.name")}
                                />
                            </div>
                            <div>
                                <input
                                    type='text'
                                    id='surname'
                                    ref={surnameRef}
                                    onChange={(e) => setSurname(e.target.value)}
                                    required
                                    className='focus:shadow-outline  w-40 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:ring-secondary-200'
                                    placeholder={t("signUpPage.surname")}
                                />
                            </div>
                        </div>
                        <div className='ml-px w-80'>
                            <input
                                type='email'
                                id='email'
                                ref={emailRef}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                aria-invalid={validEmail ? "false" : "true"}
                                aria-describedby='emailnote'
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                                className='focus:shadow-outline w-80 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:ring-secondary-200'
                                placeholder={t("signUpPage.mail")}
                            />
                            {/* show error message if email is not valid. change classnames to tailwindcss  */}
                            <p
                                id='emailnote'
                                className={
                                    emailFocus && email && !validEmail
                                        ? "rounded bg-primary-200 bg-opacity-25"
                                        : "hidden"
                                }
                            >
                                Email address already in use.
                            </p>
                        </div>
                        <div className='ml-px py-1'>
                            <input
                                type='password'
                                id='password'
                                ref={pwdRef}
                                onChange={(e) => setPwd(e.target.value)}
                                required
                                aria-invalid={validPwd ? "false" : "true"}
                                aria-describedby='pwdnote'
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                                className='focus:shadow-outline w-80 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:ring-secondary-200'
                                placeholder={t("signUpPage.password")}
                            />
                            {/* show error message if email is not valid. change classnames to tailwindcss  */}
                            <p
                                id='pwdnote'
                                className={
                                    pwdFocus && pwd && !validPwd
                                        ? "rounded bg-primary-200 bg-opacity-25"
                                        : "hidden"
                                }
                            >
                                8 to 24 characters.
                                <br />
                                Must include uppercase and lowercase letters, a
                                number and a special character.
                                <br />
                                Allowed special characters:{" "}
                                <span aria-label='exclamation mark'>
                                    !
                                </span>{" "}
                                <span aria-label='at symbol'>@</span>{" "}
                                <span aria-label='hashtag'>#</span>{" "}
                                <span aria-label='dollar sign'>$</span>{" "}
                                <span aria-label='percent'>%</span>
                            </p>
                        </div>
                        <p className='signin m-1 flex text-xs italic text-gray-700'>
                            {t("signUpPage.haveAccount")}
                            <Link href='/signin'>
                                <div className='cursor-pointer border-b border-primary-200 pl-1 text-primary-200'>
                                    {t("common.nav.signIn")}
                                </div>
                            </Link>
                        </p>
                        <div className=' py-1'>
                            <button
                                disabled={
                                    !validEmail || !validPwd ? true : false
                                }
                                className='w-80 rounded bg-primary-200 px-2 py-1 md:w-auto '
                                onClick={handleSignUp}
                            >
                                {t("common.nav.signUp")}
                            </button>
                        </div>
                        <div className='flex flex-row items-center justify-center py-1'>
                            <Image
                                src='/svg/line.svg'
                                alt='line'
                                width={190}
                                height={2}
                            />
                            <div className='text-sm text-gray-400'>
                                {" "}
                                {t("signUpPage.or")}
                            </div>
                            <Image
                                src='/svg/line.svg'
                                alt='line'
                                width={190}
                                height={2}
                            />
                        </div>
                        <div className='flex justify-center py-1'>
                            <button className=' flex w-96 flex-row items-center justify-center rounded border-2 border-b-4  border-black bg-transparent py-1 font-normal text-black hover:border-primary-200 hover:text-primary-200'>
                                <Image
                                    className='px-1'
                                    src='/svg/google.svg'
                                    alt='google'
                                    height={30}
                                    width={30}
                                />
                                {t("signUpPage.google")}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    );
};

export default SignUp;
