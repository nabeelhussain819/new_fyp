import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../Components/UI/Forms/Input";
import { doRegister } from "../../setup/service/Auth";

const schema = yup
  .object({
    name: yup.string().required(),
    u_id: yup.string().required("Your university id is required"),
    phone: yup.string().max(11).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  })
  .required();

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [show, setShow] = useState(false);

  const [all, setAll] = useState(true);
  //   const filterDepart = depart.filter((data) => data.name.includes(search));
  if (all === true) {
    if (localStorage.getItem("isTeacher") || localStorage.getItem("user")) {
      alert("you want To Sign Up!");
      localStorage.clear();
    }
  }

  const registerUser = async (e) => {
    const res = await doRegister(e);
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.error(data.error);
      return;
    }
    data.isTeacher === true
      ? localStorage.setItem("isTeacher", data._id)
      : localStorage.setItem("user", data._id);
    setAll(false);
    setShow(true);
    if (localStorage.getItem("isTeacher", data._id)) {
      setShow(true);
    }
    toast.success("register Successfully");
    toast.warning("Please Fill the Extended Form");
  };

  return (
    <>
      <section className="listing-form section--padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              {!show && (
                <>
                  <div className="listing-header pb-4">
                    <h3 className="title font-size-28 pb-2">
                      SignUp To T&S Evaluation Form
                    </h3>
                    <p className="font-size-14">
                      Enter Your Valid Information Then Click On Next
                    </p>
                    <p className="font-size-14">
                      You Will Move To Anoter Step Where You Enter Your
                      Information About Yourself
                    </p>
                  </div>

                  <div className="form-box">
                    <div className="form-title-wrap">
                      <h3 className="title">
                        <i className="la la-user mr-2 text-gray"></i>Your
                        information
                      </h3>
                    </div>
                    <div className="form-content contact-form-action">
                      <form
                        method="post"
                        onSubmit={handleSubmit(registerUser)}
                        className="row MultiFile-intercepted"
                      >
                        <div className="col-lg-6 responsive-column">
                          <Input
                            title="Email"
                            type="email"
                            name="email"
                            hook={register("email")}
                            errors={errors.email?.message}
                            icon="la la-user form-icon"
                            placeholder="Type your email"
                            hasIcon
                          />
                        </div>
                        <div className="col-lg-6 responsive-column">
                          <Input
                            title="Your Phone Number"
                            type="number"
                            name="phone"
                            hook={register("phone")}
                            errors={errors.phone?.message}
                            icon="la la-envelope-o form-icon"
                            placeholder="Type your Phone"
                            hasIcon
                          />
                        </div>
                        <div className="col-lg-6 responsive-column">
                          <Input
                            title="Your Full Name"
                            type="text"
                            name="name"
                            hook={register("name")}
                            errors={errors.name?.message}
                            icon="la la-envelope-o form-icon"
                            placeholder="Type your username"
                            hasIcon
                          />
                        </div>
                        <div className="col-lg-6 responsive-column">
                          <Input
                            title="Your Universty ID"
                            type="text"
                            name="name"
                            hook={register("u_id")}
                            errors={errors.u_id?.message}
                            icon="la la-envelope-o form-icon"
                            placeholder="Type your University ID"
                            hasIcon
                          />
                        </div>
                        <div className="col-lg-6 responsive-column">
                          <Input
                            title="Your Password"
                            type="password"
                            name="password"
                            hook={register("password")}
                            errors={errors.password?.message}
                            icon="la la-lock form-icon"
                            placeholder="Your password"
                            hasIcon
                          />
                        </div>
                        <div className="col-lg-12 responsive-column">
                          <button type="submit" className="theme-btn w-100">
                            Create Account
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              )}
              {/* {show && <ExtendedForm />} */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
