import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { json } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddClass = () => {
    const { user } = useContext(AuthContext)

    const { register, handleSubmit, reset } = useForm();


    const hosting_token = import.meta.env.VITE_Image_Upload_Token;

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${hosting_token}`


    const instructorName = user?.displayName;
    const instructorEmail = user?.email;


    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, instructorName, instructorEmail, availableSeats } = data;
                    const newClass = { name, price: parseFloat(price), instructorName, instructorEmail, image: imgURL, availableSeats }
                    fetch('http://localhost:5000/classes', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newClass)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }

            })
    }


    return (
        <div className='w-10/12 mx-auto bg-base-200 p-10 rounded-md shadow-xl'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class name
                        </span>
                    </label>
                    <input type="text" placeholder="name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>


                <div className="md:flex my-4">

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor name</span>
                        </label>
                        <input defaultValue={instructorName} type="text" {...register("instructorName", { required: true })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full md:ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor email</span>
                        </label>
                        <input defaultValue={instructorEmail} type="text" {...register("instructorEmail", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>

                <div className="md:flex my-4">

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Available seats</span>
                        </label>
                        <input defaultValue={instructorName} type="number" {...register("availableSeats", { required: true })} placeholder="Available seats" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full md:ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="price" className="input input-bordered w-full " />
                    </div>
                </div>

                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Class Image</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="custom-btn mt-4" type="submit" value="Add class" />
            </form>
        </div>
    );
};

export default AddClass;


{/* <form onClick={handleAddClass}>
                {/* Class name*/}
                // <div>
                //     <div className="form-control w-full">
                //         <label className="label">
                //             <span className="label-text">Class name</span>
                //         </label>
                //         <label className="input-group">
                //             <input type="text" name='name' placeholder="Class name" className="input input-bordered w-full" />
                //         </label>
                //     </div>
                // </div>

                // {/*  instructor name and email  */}
                // <div className='md:flex'>
                //     <div className="form-control md:w-1/2">
                //         <label className="label">
                //             <span className="label-text">Instructor name</span>
                //         </label>
                //         <label className="input-group">
                //             <input type="text" name='instructorName'
                //                 defaultValue={user?.displayName} className="input input-bordered w-full" />
                //         </label>
                //     </div>
                //     <div className="form-control md:w-1/2 md:ml-14">
                //         <label className="label">
                //             <span className="label-text">Instructor email </span>
                //         </label>
                //         <label className="input-group">
                //             <input type="text" name='instructorEmail' defaultValue={user?.email} className="input input-bordered w-full" />
                //         </label>
                //     </div>
                // </div>

                // {/*seat and price  */}
                // <div className='md:flex'>
                //     <div className="form-control md:w-1/2">
                //         <label className="label">
                //             <span className="label-text">Available seats</span>
                //         </label>
                //         <label className="input-group">
                //             <input type="text" name='availableSeats' placeholder="Available seats" className="input input-bordered w-full" />
                //         </label>
                //     </div>
                //     <div className="form-control md:w-1/2 md:ml-14">
                //         <label className="label">
                //             <span className="label-text">Price</span>
                //         </label>
                //         <label className="input-group">
                //             <input type="number" name='price' placeholder="Price" className="input input-bordered w-full" />
                //         </label>
                //     </div>
                // </div>

                // <div className="form-control md:w-1/2 mt-4">
                //     <label className="">
                //         <span className="label-text">Class Image
                //         </span>
                //     </label>
                //     <label>
                //         <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs mt-4" />
                //     </label>
                // </div>

                // <input type="submit" value="Add toy" className='py-3 mt-3 my-btn w-full' />
            // </form> */}