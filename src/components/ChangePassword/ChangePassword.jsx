import InputComponent from "../InputComponent";
import Button from "../Button";

const ChangePassword = () => {
    return (
        <div className='m-8 h-48 justify-center overflow-hidden rounded-lg bg-secondary-200 md:m-20 md:h-64 lg:mr-[300px] lg:ml-[300px] lg:h-80'>
            <div className='text-md m-4 mt-6 flex font-medium md:m-6 md:mt-8 md:text-2xl lg:mt-16 lg:ml-12 lg:text-3xl'>
                <h2>Change Password</h2>
            </div>
            <div className='justify-center overflow-hidden lg:ml-8 lg:flex-row lg:flex-wrap lg:items-start lg:justify-start'>
                <form>
                    <div className='m-2 flex flex-row justify-center lg:justify-items-center'>
                        <div className='w-30 m-1 h-8 md:m-2 md:h-12 md:w-64 lg:w-80'>
                            <InputComponent
                                type='password'
                                placeholder='Password'
                            />
                        </div>

                        <div className='w-30 m-1 h-8 md:m-2 md:h-12 md:w-64 lg:w-80'>
                            <InputComponent
                                type='password'
                                placeholder='Retype password'
                            />
                        </div>
                    </div>
                    <div className='m-4 flex flex-row justify-end lg:mr-12'>
                        <div className='mr-2 justify-end md:mr-4 lg:mr-6'>
                            <Button
                                label='Submit'
                                bgColor='bg-primary-200'
                                textColor='text-white'
                                fontWeight='font-medium'
                                width='w-20 md:w-32 lg:w-36'
                                height='h-8 md:h-12 lg:h-12'
                                borderColor=''
                                fontSize='text-[11px] md:text-xl lg:text-xl'
                                border=''
                            />
                        </div>
                        <div className=''>
                            <Button
                                label='Cancel'
                                bgColor='bg-white'
                                textColor='text-black'
                                fontWeight='font-medium'
                                width='w-20 md:w-32 lg:w-36'
                                height='h-8 md:h-12 lg:h-12'
                                borderColor='border-black'
                                fontSize='text-[11px] md:text-xl lg:text-xl'
                                border='border border-b-2 border-r-2'
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;
