import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';



const Register = () => {
    // const { createUser, updateUser } = useContext(AuthContext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // const navigate = useNavigate()

    const onSubmit = data => {

    }

    // const onSubmit = data => {
    //     createUser(data.email, data.password)
    //         .then(result => {
    //             const loggedUser = result.user;
    //             console.log(loggedUser);
    //             updateUser(data.name, data.photo)
    //                 .then(result => {
    //                     reset();
    //                     Swal.fire({
    //                         position: 'top-end',
    //                         icon: 'success',
    //                         title: 'Your work has been saved',
    //                         showConfirmButton: false,
    //                         timer: 1500
    //                     })
    //                     navigate('/')
    //                 })
    //                 .catch(error => {
    //                     console.log(error);
    //                 })
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    //     console.log(data);
    // };

    // console.log(watch("example"));



    return (
        <>
            <div>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className='text-xs mt-1 text-red-600'>Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photo", { required: true })} name='photo' placeholder="Photo url" className="input input-bordered" />
                                    {errors.photo && <span className='text-xs mt-1 text-red-600'>Photo url is required</span>}
                                </div>
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
                                        <Link to='/login' className="btn-link link link-hover">Alredy have a account ?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className='custom-btn' type="submit" value="Sing up" />
                                </div>
                            </form>
                        </div>
                        <div className="text-center md:w-1/2 lg:text-left">
                            <img src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?size=626&ext=jpg&ga=GA1.1.868909325.1665327837&semt=sph" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;