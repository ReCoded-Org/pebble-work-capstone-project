import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

import useAuth from "@/hooks/useAuth";

import Button from "@/components/Button";

import axios from "@/api/axios";

import InputComponent from "../InputComponent";

const NameLocation = () => {
    const { auth, setAuth } = useAuth();
    const [fileUpload, setFileUpload] = useState();
    const [toUpload, setToUpload] = useState(false);
    const fileRef = useRef();
    const router = useRouter();
    let profileImage = auth?.profileImage;
    if (!auth?.profileImage) {
        profileImage = "/images/user.png";
    }

    // handlePhoto handles the things to change when a photo is selected
    function handlePhoto(e) {
        const file = Array.from(e.target.files)[0];
        setFileUpload(file);
        setToUpload(true);
    }
    // submitPhoto handles what should happen when upload is clicked
    const submitPhoto = async () => {
        var photoData = new FormData();
        photoData.append("profileImage", fileUpload);
        try {
            const response = await axios({
                method: "put",
                url: "/api/user/",
                data: photoData,
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
            });
            fileRef.current.value = "";
            setFileUpload();
            profileImage = response.data.profileImage;
            console.log("response", response);
            const authData = { ...auth };
            authData.profileImage = profileImage;
            setAuth(authData);
            toast.success("Photo submitted!");
            //router.reload(window.location.pathname)
        } catch (err) {
            console.log("error", err);
        }
    };
    return (
        <div className='m-4 mt-4 md:m-12 lg:ml-16'>
            <h1 className='m-4 text-xl font-medium md:m-6 md:text-3xl lg:m-12 lg:text-5xl'>
                Edit Profile
            </h1>
            <div className='flex flex-row items-center justify-center overflow-hidden lg:ml-8 lg:justify-start'>
                <div className='m-1 mr-2 w-20 overflow-hidden rounded-full md:mr-6 md:w-40 lg:w-44'>
                    <Image
                        src={profileImage}
                        alt='name-location'
                        width='100%'
                        height='100%'
                        layout='responsive'
                        objectFit='cover'
                    />
                </div>
                <div className='m-1 flex flex-col md:m-2'>
                    <input
                        ref={fileRef}
                        type='file'
                        onChange={handlePhoto}
                        accept='image/x-png,image/gif,image/jpeg'
                    />
                    {toUpload && (
                        <Button
                            label='Upload Photo'
                            bgColor='bg-primary-200'
                            textColor='text-white'
                            onClick={submitPhoto}
                        />
                    )}

                    {/* <Button
                        type="file"
                        label='Upload New'
                        bgColor='bg-primary-200'
                        textColor='text-white'
                        fontWeight='font-medium'
                        width='w-20 md:w-44 lg:w-48'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor=''
                        fontSize='text-[11px] md:text-xl lg:text-xl'
                        border=''
                        onClick={submitPhoto}
                    /> */}
                </div>
                {/* <div className='m-1 md:m-2'>
                    <Button
                        label='Choose From Library'
                        bgColor='bg-white'
                        textColor='text-black'
                        fontWeight='font-medium'
                        width='w-30 md:w-60 lg:w-64'
                        height='h-8 md:h-14 lg:h-14'
                        borderColor='border-black'
                        fontSize='text-[11px] md:text-xl lg:text-xl'
                        border='border border-b-2 border-r-2'
                    />
                </div> */}
            </div>
            <div className='m-4 mt-8 md:m-8 md:mt-12'>
                <label className='text-[12px] font-medium md:text-xl lg:text-xl'>
                    Name (Required)
                </label>
                <div className='mt-1 mb-3 h-8 md:mt-2 md:mb-9 md:h-14 md:w-[490px] lg:h-12  lg:w-[600px]'>
                    <input
                        type='text'
                        name='Name'
                        placeholder='Name'
                        required
                        className='h-full w-full rounded-md border-2 border-black p-2'
                    />
                </div>
                <label className='text-[12px] font-medium md:text-xl lg:text-xl'>
                    Your Location
                </label>
                <div className='mt-1 mb-3 h-8 md:mt-2 md:mb-9 md:h-14 md:w-[490px] lg:h-12 lg:w-[600px]'>
                    <InputComponent placeholder='Location' />
                </div>
            </div>
        </div>
    );
};

export default NameLocation;
