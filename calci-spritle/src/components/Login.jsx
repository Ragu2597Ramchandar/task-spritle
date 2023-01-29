import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserService } from "../services/UserService";
import { useNavigate } from "react-router-dom";
let Login = () => {
    const navigate = useNavigate();
    var UserName;
    var Password;
    let [state, setState] = useState({
        users: [],
    });

    useEffect(() => {
        let fetchData = async () => {

            try {
                let response = await UserService.getAllUsers();
                // console.log(JSON.stringify(response.data));
                setState({
                    ...state,
                    users: response.data
                })
               
            }
            catch (err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, []);


    const [details, setDetails] = useState({
        userName: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((pre) => ({ ...pre, [name]: value }))
    }

    const handleLogin = (e) => {
        e.preventDefault();
        
        users.map((user) => {
            UserName = user.userName;
            Password = user.password;
        });
        console.log(details.password);
        if(UserName===details.userName&&Password===details.password){
          navigate('/');
        }
        else{
           let userErr = document.querySelector('#nameErr');
           userErr.innerHTML = 'username or password is incorrect'
        }
       
      
     }

    let { users } = state;



    return (
        <React.Fragment>
            {
                users.map((user) => {
                    // console.log(user, 'userData');
                })
            }
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4 m-auto">
                        <div className="card">
                            <div className="card-header bg-primary text-white text-center">Login</div>
                            <div className="card-body">
                                <form onSubmit={handleLogin}>
                                    <div className="container text-center">
                                        <input type="text" className="form-control mb-4" placeholder="username" name="userName" onChange={handleChange} />
                                        <input type="password" className="form-control mb-4" placeholder="password" name="password" onChange={handleChange} />
                                        <button   className="btn btn-primary">Sing in</button><br /><br />
                                        <div className="text-danger"id="nameErr"></div>
                                        <span>if not an user ?<Link to={'/signup'}> <a href="#">Signup</a> </Link></span>
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

export default Login;