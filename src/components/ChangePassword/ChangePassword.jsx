import { useTranslation } from "next-i18next";
import { useState } from "react";

import Button from "@/components/Button";

import axios from "@/api/axios";

import InputComponent from "../InputComponent";
const ChangePassword = () => {
    const { t } = useTranslation("common");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [message, setMessage] = useState("");
    async function submitPassword() {
        var bodyFormData = new FormData();
        bodyFormData.append("password", password);
        if (password.length <= 0 || retypePassword.length <= 0) {
            setMessage("Please fill out all the fields");
        } else if (password !== retypePassword) {
            setMessage("Passwords do not match.");
        } else {
            setMessage("");
            try {
                const response = await axios({
                    method: "put",
                    url: "/api/user/",
                    data: bodyFormData,
                    headers: { "Content-Type": "multipart/form-data" },
                    withCredentials: true,
                });
                //const data = await response.json()
                console.log(response);
                // router.push(response.data._id);
            } catch (err) {
                //console.log(err);
                setMessage("The password should not be shorter than 8 digits");
            }
        }
    }
    const handleChange = (e) => {
        setPassword(e.target.value);
    };
    const handleRetypePasswordChange = (e) => {
        setRetypePassword(e.target.value);
    };

    return (
        <div className='m-8 flex justify-center'>
            <div className='align-center h-[200px] w-[400px] justify-center overflow-hidden rounded-lg bg-[#a4e7f4] md:h-[300px] md:w-[600px] lg:h-[450px] lg:w-[900px]'>
                <div className='m-8 lg:m-24 lg:justify-center'>
                    <div className='text-md mb-6 flex font-medium md:mb-8 md:mt-14 md:text-2xl lg:mt-16 lg:mb-12 lg:text-3xl'>
                        <h2>{t("editProfilePage.changePasswordHeader")}</h2>
                    </div>
                    <div className='justify-center overflow-hidden lg:flex-row lg:flex-wrap lg:items-start lg:justify-start'>
                        <form>
                            <div className='flex flex-row justify-center md:justify-between lg:justify-between lg:justify-items-center'>
                                <div className='w-30 mr-4 h-8 md:h-12 md:w-64 lg:w-80'>
                                    <InputComponent
                                        id='passwordInput'
                                        type='password'
                                        placeholder={t(
                                            "editProfilePage.passwordPH"
                                        )}
                                        callback={handleChange}
                                    />
                                </div>
                                <div className='w-30 h-8 md:h-12 md:w-64 lg:w-80'>
                                    <InputComponent
                                        id='passwordInput2'
                                        type='password'
                                        placeholder={t(
                                            "editProfilePage.retypePH"
                                        )}
                                        callback={handleRetypePasswordChange}
                                    />
                                </div>
                            </div>
                            {message}

                            <div className='mt-6 flex flex-row justify-end md:mt-8 lg:mt-12'>
                                <div className='mr-2 justify-end md:mr-4 lg:mr-6'>
                                    <Button
                                        label={t("editProfilePage.submitBtn")}
                                        bgColor='bg-primary-200'
                                        textColor='text-white'
                                        fontWeight='font-medium'
                                        width='w-20 md:w-32 lg:w-36'
                                        height='h-8 md:h-12 lg:h-12'
                                        borderColor=''
                                        fontSize='text-[11px] md:text-xl lg:text-xl'
                                        border=''
                                        onClick={submitPassword}
                                    />
                                </div>
                                <div className=''>
                                    <Button
                                        label={t("editProfilePage.cancelBtn")}
                                        bgColor='bg-white'
                                        textColor='text-black'
                                        fontWeight='font-medium'
                                        width='w-20 md:w-32 lg:w-36'
                                        height='h-8 md:h-12 lg:h-12'
                                        borderColor='border-black'
                                        fontSize='text-[11px] md:text-xl lg:text-xl'
                                        border='border border-b-2 border-r-2'
                                        onClick={() => {
                                            document.getElementById(
                                                "passwordInput"
                                            ).value = "";
                                            document.getElementById(
                                                "passwordInput2"
                                            ).value = "";
                                            setMessage("");
                                        }}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
