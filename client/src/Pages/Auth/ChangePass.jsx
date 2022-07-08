import React,{useState} from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";


export default function ChangePass(){
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [u_id, setUid] = useState('');
    const [pass, setPass] = useState('');
    const [cPass, setCPass] = useState('');
    const navigate = useNavigate();
    const check = async () => {
  const res = await fetch("http://localhost:5000/check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
          
            email,
            u_id,
          
          }),
        });
        const data = await res.json();
        if (res.status === 400 || !data) {
          toast.error(data.error);
        } else {
          setShow(true)           
          toast.success("Account Verified!");
        }
      }; 
      const Done = async()=>{
        if(cPass !== pass){
            toast.error("Both Password Must be Similar");
          }else if(cPass.length < 6 || pass.length<6){
            toast.error("Password Must Be Maximum Of 6 digits");
          }else{
            const res = await fetch("http://localhost:5000/forget", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            pass,
            email,
            u_id,
          
          }),
        });
        const data = await res.json();
        if (res.status === 400 || !data) {
          toast.error(data.error);
        } else {
          setShow(true)           
          toast.success("Password Updated Successfully");
          navigate('/')
        }
         }; 
          
      }
    
    return(    <>
    <section class="breadcrumb-area bread-bg">
    <div class="breadcrumb-wrap">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="breadcrumb-content">
                        <div class="section-heading">
                            <h2 class="sec__title text-white">Recover Password</h2>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="breadcrumb-list text-right">
                        <ul class="list-items">
                            <li><a href="index.html">Home</a></li>
                            <li>Recover Password</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bread-svg-box">
        <svg class="hero-svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path></svg>
        </div>
</section>
<section class="contact-area padding-top-40px ">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 mx-auto">
                <div class="form-box">
                    <div class="form-title-wrap">
                        <h3 class="title">Check Your Account</h3>
                        <p class="font-size-15 pt-2">Enter the email of your account to reset password. Then you will receive a link to email to reset the password.If you have any issue about reset password
                            <a href="contact.html" class="text-color">contact us</a>
                        </p>
                    </div>
                    <div class="form-content ">
                        <div class="contact-form-action">
                            <form method="post">
                                <div class="input-box">
                                    <label class="label-text">Your Email</label>
                                    <div class="form-group">
                                        <span class="la la-envelope-o form-icon"></span>
                                        <input class="form-control" type="email" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email address"/>
                                    </div>
                                </div>
                                <div class="input-box">
                                    <label class="label-text">Your Unviersity ID</label>
                                    <div class="form-group">
                                        <span class="la la-envelope-o form-icon"></span>
                                        <input class="form-control" type="text" name="email" onChange={(e)=>setUid(e.target.value)} placeholder="Enter Your University ID"/>
                                    </div>
                                </div>
                                <div class="btn-box">
                                    <button type="button" class="theme-btn" onClick={check}>Check Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{ show && <section class="contact-area ">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 mx-auto">
                <div class="form-box">
                    <div class="form-title-wrap">
                        <h3 class="title">Recover Password</h3>                      
                    </div>
                    <div class="form-content ">
                        <div class="contact-form-action">
                            <form method="post">
                                <div class="input-box">
                                    <label class="label-text">New Password</label>
                                    <div class="form-group">
                                        <span class="la la-user-o form-icon"></span>
                                        <input class="form-control" type="password" name="email" onChange={(e)=> setPass(e.target.value)} placeholder="Enter new Password"/>
                                    </div>
                                </div>
                                <div class="input-box">
                                    <label class="label-text">Confirm New Password</label>
                                    <div class="form-group">
                                        <span class="la la-user-o form-icon"></span>
                                        <input class="form-control" type="password" name="email" onChange={(e)=> setCPass(e.target.value)} placeholder="Confirm Your Password"/>
                                    </div>
                                </div>
                                <div class="btn-box">
                                    <button type="button" class="theme-btn" onClick={Done}>Reset Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>}
    </>)
    
    
}