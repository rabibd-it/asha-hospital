import React from 'react';
import { useForm } from "react-hook-form";
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Breadcrumb title="Contact Us"></Breadcrumb>
            <section className="section pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 mx-auto">
                            <div className="section-title text-white">
                                <h2 className="section-separator text-black">HOW TO <span className="text-regular">REACH</span> US?</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-2 col-lg-3">
                            <div className="contact-box text-center">
                                <div className="icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="box-info">
                                    <h3>Call us</h3>
                                    <p>01914188199</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-2 col-lg-3">
                            <div className="contact-box text-center">
                                <div className="icon">
                                    <i className="fa fa-envelope-o"></i>
                                </div>
                                <div className="box-info">
                                    <h3>Email</h3>
                                    <p>info@ashahospital.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-2 col-lg-3">
                            <div className="contact-box text-center">
                                <div className="icon">
                                    <i className="fa fa-globe"></i>
                                </div>
                                <div className="box-info">
                                    <h3>Web</h3>
                                    <p>www.ashahospital.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-2 col-lg-3">
                            <div className="contact-box text-center">
                                <div className="icon">
                                    <i className="fa fa-map-signs"></i>
                                </div>
                                <div className="box-info">
                                    <h3>Address</h3>
                                    <p>Shahid Kazol Sarani, Palaspole, Satkhira.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <input className="form-control" placeholder="Name" {...register("name", { required: true })} />
                                        </div>
                                        {errors.name && <span>This field is required</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <input className="form-control" placeholder="Phone" {...register("phone", { required: true })} />
                                        </div>
                                        {errors.phone && <span>This field is required</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <input className="form-control" placeholder="Email" {...register("email", { required: true })} />
                                        </div>
                                        {errors.email && <span>This field is required</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <input className="form-control" placeholder="Subject" {...register("subject", { required: true })} />
                                        </div>
                                        {errors.subject && <span>This field is required</span>}
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <textarea rows="12" className="form-control" placeholder="Message"  {...register("message", { required: true })}></textarea>
                                        </div>
                                        {errors.message && <span>This field is required</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <button type="submit" className="btn btn-primary mb-3">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-12 col-lg-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1840.1323840026823!2d89.06890995810153!3d22.718398296276995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sShahid%20Kazol%20Sarani%2C%20Palaspole%2C%20Satkhira!5e0!3m2!1sen!2sbd!4v1634626483909!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;