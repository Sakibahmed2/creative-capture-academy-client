import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    return (
        <div>
            <div>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
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
                                    <input type="text" {...register("password", { required: true, minLength: 6, maxLength: 20 })} name='password' placeholder="password" className="input input-bordered" />
                                    {errors.password && <span className='text-xs mt-1 text-red-600'>Password must be 6 letter</span>}
                                    <label className="label">
                                        <Link to='/register' className="btn-link link link-hover">Create an account ?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className='custom-btn' type="submit" value="Sing up" />
                                </div>
                                <SocialLogin />
                            </form>
                        </div>
                        <div className="text-center md:w-1/2 lg:text-left">
                            <img src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?size=626&ext=jpg&ga=GA1.1.868909325.1665327837&semt=sph" alt="" />
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Login;