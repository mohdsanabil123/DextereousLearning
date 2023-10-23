import React, { useState } from 'react'
import OtpInput from 'otp-input-react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';

import { auth } from '../firebaseConfig'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'

const OtpLogin = () => {

    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [showOTP, setShowOTP] = useState(false);
    const [ loading, setLoading ] = useState(false);

    function onCaptchaVerify() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth,
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: (response) => {
                        onSignup();
                    },
                    "expired-callback": () => { },
                },
                auth
            );
        }
    }

    const onSignup = () => {
        setLoading(true);

        onCaptchaVerify();
        const appVerifier = window.recaptchaVerifier;
        appVerifier.verify()

        const phoneNumber = '+' + phone
        console.log(phoneNumber)

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                console.log("OTP has been sent.")
                setLoading(false)
                Swal.close();
                toast.success('OTP Sent', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                
                setShowOTP(true);
            }).catch((error) => {
                // Error; SMS not sent
                console.log("SMS not sent")
            });
    }

    const onSubmitOtp = () => {
        setLoading(true);
        const code = otp
        window.confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            // const user = result.user;
            // console.log(JSON.stringify(user))
            Swal.fire({
                title: 'Successfully Logged In!',
                text: 'You have logged in successfully',
                icon: 'success'
              })
            setLoading(false);
        }).catch((error) => {
            console.log(error)
            Swal.fire({
                title: 'Invalid OTP!',
                text: 'Please Provide valid OTP try again',
                icon: 'error'
              })
              setLoading(false);
              setShowOTP(false);
        });
    }

    const showLoader = (title) => {
        Swal.fire({
          title: title,
          html: 'Please wait...',
          allowEscapeKey: false,
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading()
          }
        });
      }

    return (
        <div className="container-xxl" style={{ backgroundColor: "#22f59a", paddingTop: "150px", paddingBottom: "150px" }}>
            <div id='recaptcha-container'></div>
            { loading && showLoader('Sending OTP') }
            <div className="col-lg-4 mx-auto border border-primary rounded bg-white">
                <div className="col-lg-10 mx-auto p-3">
                    <h6 className="mt-2 mb-2 text-center"><span className='text-danger'>Dextereous</span> Learning</h6>
                    {!showOTP &&
                        <>
                            <div className="form-group">
                                <h4 className='mt-3'>Phone Number</h4>
                                <PhoneInput
                                    country={'in'}
                                    value={phone}
                                    onChange={setPhone}
                                    // className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <button onClick={onSignup} className="btn btn-success my-3 btn-lg">Send OTP</button>
                            </div>
                        </>
                    }

                    {showOTP &&
                        <>
                        { loading && showLoader('Verifying') }
                            <div className="form-group">
                                <h3 className='mt-3 mb-4 text-center'>Verify OTP</h3>
                                <div className='ms-3 mb-3'>
                                    <OtpInput
                                        OTPLength={6}
                                        otpType="number"
                                        value={otp}
                                        onChange={setOtp}
                                        disabled={false}
                                        autoFocus
                                    ></OtpInput>
                                </div>
                            </div>
                            <div className="form-group">
                                <button onClick={onSubmitOtp} className="btn btn-success form-control my-3 btn-lg">Verify</button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default OtpLogin
