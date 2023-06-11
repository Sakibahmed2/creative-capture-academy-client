import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const [show, setShow] = useState(false)
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    title: 'User Login Successfully.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }


    const handleShow = () =>{
        setShow(!show)
    }

    return (
        <div>
            <div>
                <div className="hero min-h-screen pt-4">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" {...register("email")} name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={show ? "text" : "password"} {...register("password", { required: true })} name='password' placeholder="password" className="input input-bordered" />
                                    <button onClick={handleShow} className='relative -top-[33px] left-20 text-sm md:left-32 font-semibold'>
                                        {show ? 'Hide' : 'Show'}
                                    </button>
                                    <label className="label">
                                        <Link to='/register' className="btn-link link link-hover">Create an account ?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className='custom-btn' type="submit" value="Login" />
                                </div>
                                <SocialLogin />
                            </form>
                        </div>
                        <div className="text-center md:w-1/2 lg:text-left">
                            <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?size=626&ext=jpg&ga=GA1.2.868909325.1665327837&semt=sph" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;