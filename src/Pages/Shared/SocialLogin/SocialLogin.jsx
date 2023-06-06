import React from 'react';
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <div className="divider">Or</div>
            <div className="w-full text-center my-4">
                <button className="custom-btn btn text-xl ">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;