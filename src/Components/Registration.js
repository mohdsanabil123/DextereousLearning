import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const Registration = () => {

    const [studentDetails, setStudentDetails] = useState({
        studentName: "",
        studentClass: "",
        schoolName: "",
        address: "",
        gender: "",
        email: "",
        password: "",
        phone: ""
    });

    const inputHandler = (e) => {
        setStudentDetails({
            ...studentDetails,
            [e.target.name]: e.target.value
        })  
    }

    // const inputFileHandler = (e) => {
    //     setStudentDetails({
    //         student_picture: e.target.files[0]
    //     })
    // }


    async function formHandler(e) {
        e.preventDefault()
        // Validation
        if (studentDetails.studentName === '') {
            Swal.fire({
                title: 'Validation error!',
                text: 'Please Provide Student Name',
                icon: 'warning',
            })
        }
        else if (studentDetails.studentClass === '') {
            Swal.fire({
                title: 'Validation error!',
                text: 'Please Provide Student Class',
                icon: 'warning',
            })
        }
        else if (studentDetails.schoolName === '') {
            Swal.fire({
                title: 'Validation error!',
                text: 'Please Provide School Name',
                icon: 'warning',
            })
        }
        else if (studentDetails.email === '') {
            Swal.fire({
                title: 'Validation error!',
                text: 'Please Provide Unique Email',
                icon: 'warning',
            })
        }
        else if (studentDetails.password === '') {
            Swal.fire({
                title: 'Validation error!',
                text: 'Please Choose a strong password',
                icon: 'warning',
            })
        }
        else if (studentDetails.phone === '') {
            Swal.fire({
                title: 'Validation error!',
                text: 'Please Provide Unique phone number',
                icon: 'warning',
            })
        }
        else if (studentDetails.gender === '') {
            Swal.fire({
                title: 'Validation error!',
                text: 'Please Choose your gender',
                icon: 'warning',
            })
        }
        else {
            try {
                await axios.post("http://127.0.0.1:8000/api/students/", studentDetails)
                Swal.fire({
                    title: 'Registration Successful!',
                    text: 'You have successfully created your account',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
    
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Email or Phone already taken!',
                    icon: 'error'
                })
            }
        }
    }

    // console.log(studentDetails)

    return (
        <div className='container custom-margin'>
            <div className="col-lg-5 mx-auto border rounded">
                <div className="col-lg-10 mx-auto p-3">
                <h6 className="mt-0 text-center"><span className='text-danger'>Dextereous</span> Learning</h6>
                    <h2 className="my-3 text-center">Student Registration</h2>
                    <form>
                        <div className="form-group">
                            <label>Student Full Name</label>
                            <input type="text" name="studentName" className="form-control" onChange={inputHandler} />
                        </div>
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>Phone</label>
                                <input type="text" name="phone" className="form-control" onChange={inputHandler} />
                            </div>
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>Gender</label>
                                <select name="gender" className="form-select" onChange={inputHandler}>
                                    <option value=''>Choose gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>Email</label>
                                <input type="email" name="email" className="form-control" onChange={inputHandler} />
                            </div>
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>Password</label>
                                <input type="password" name="password" className="form-control" autoComplete="current-password" onChange={inputHandler} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>School</label>
                                <input type="text" name="schoolName" className="form-control" onChange={inputHandler} />
                            </div>
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>Class</label>
                                <select name="studentClass" className="form-select" onChange={inputHandler}>
                                    <option value=''>Choose class</option>
                                    <option>1st</option>
                                    <option>2nd</option>
                                    <option>3rd</option>
                                    <option>4th</option>
                                    <option>5th</option>
                                    <option>6th</option>
                                    <option>7th</option>
                                    <option>8th</option>
                                    <option>9th</option>
                                    <option>10th</option>
                                    <option>11th</option>
                                    <option>12th</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name="address" className="form-control" onChange={inputHandler} />
                        </div>
                        {/* <div className="form-group">
                            <label>Profile Photo</label>
                            <input type="file" name="student_picture" className="form-control" onChange={inputFileHandler}/>
                        </div> */}

                        <div className="form-group">
                            <input type="submit" onClick={formHandler} className="btn btn-success form-control my-3" value="Create An Account" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration
