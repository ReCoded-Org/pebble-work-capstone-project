import React from "react";

import Layout from "@/components/layout/Layout";
import SignInUp from "@/components/SignInUp/SignInUp";

const SignIninpage = () => {
    return (
        <div>
            <Layout>
                <SignInUp title='Sign up' />
            </Layout>
        </div>
    );
};

export default SignIninpage;
