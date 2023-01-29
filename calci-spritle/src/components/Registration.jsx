import React, { useEffect, useState } from "react";
import { Await, Link } from "react-router-dom";
import { UserService } from "../services/UserService";
import { useNavigate } from "react-router-dom";

let Reagistration = () => {

    let navigate = useNavigate();

    let [details, setDetails] = useState({
        user: {
            id : '',
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: ''
        }
    });


    // useEffect(() => {
    //     const submitForm = async (e) => {

    //         e.preventDefault();
    //         try {
    //             console.log('after pre');
    //             let response = await UserService.createUser(details.user);
    //             console.log(response.data);
    //         } catch (err) {
    //             console.log(err.message);
    //         }
    //     }
    //     submitForm();
    // },[])


    let updateInput = (e) => {

        setDetails({
            ...details,
            user: {
                ...details.user,
                [e.target.name]: e.target.value
            }
        });
        console.log(details.user);
        // setDetails((det)=>{...det,})
    }

    let validateForm = () => {
        if(user.firstName===''){
            let fName = document.querySelectorAll('#fname');
            fName.innerHTML = '*Please enter firstname';
        }
    //    else if(user.lastName===''){
    //         let lName = document.querySelectorAll('#lname');
    //         lName.innerHTML = '*Please enter lastname';
    //     }
    //     else if(user.userName===''){
    //         let uName = document.querySelectorAll('#uname');
    //         uName.innerHTML = '*Please enter username';
    //     }
    //    else if(user.email===''){
    //         let email = document.querySelectorAll('#email');
    //         email.innerHTML = '*Please enter email';
    //     }
    //   else if(user.password===''){
    //         let pass = document.querySelectorAll('#pass');
    //         pass.innerHTML = '*Please enter pass';
    //     }
    //    else if(user.password===user.password){
    //         let fName = document.querySelectorAll('#cpass');
    //         fName.innerHTML = '*both must be same';
    //     }
    return false
    }

    const submitForm = async (e) => {

        e.preventDefault();

        try {
           
            
            let response = await UserService.createUser(details.user);
            if(response){
                alert('Reagistered Successfully')
               navigate('/login');
            }

        } catch (err) {
            console.log(err);
        }
    }



    let { user } = details;

    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(details.user)}</pre> */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-5 m-auto">
                        <div className="card">
                            <div className="card-header bg-primary text-white text-center">Sign Up</div>
                            <div className="card-body">
                                <form onSubmit={submitForm}>
                                    <div className="container text-center">
                                        {/* <input type="text" name = "id" value={user.id} onChange={updateInput} className="form-control mb-4" placeholder="Id"  /> */}
                                        <input type="text" required="true" name="firstName" value={user.firstName} onChange={updateInput} className="form-control mb-4" placeholder="First Name" />
                                        <div className="text-danger" id="fname"></div>
                                        <input type="text" required="true" name="lastName" value={user.lastName} onChange={updateInput} className="form-control mb-4" placeholder="Last Name" />
                                        <div className="text-danger" id="lname"></div>
                                        <input type="text" required="true" name="userName" value={user.userName} onChange={updateInput} className="form-control mb-4" placeholder="User Name" />
                                        <div className="text-danger" id="uname"></div>
                                        <input type="email" required="true" name="email" value={user.email} onChange={updateInput} className="form-control mb-4" placeholder="email id" />
                                        <div className="text-danger" id="email"></div>
                                        <input type="password" required="true" name="password" value={user.password} onChange={updateInput} className="form-control mb-4" placeholder="password" />
                                        <div className="text-danger" id="pass"></div>
                                        <input type="password" required="true" className="form-control mb-4" placeholder="confirm password" />
                                        
                                        <div className="text-danger" id="cpass"></div>
                                        <button type="submit" className="btn btn-primary" >Register</button><br />
                                        Aleready a member ? <Link to={'/login'}> <a href="#">Sign in</a> </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Reagistration;