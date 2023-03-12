import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/mamha.jpg";
import { auth } from "../firebase";


function Profile(){
    const navigate = useNavigate();
    const email = window.localStorage.getItem("user");
    const handleLohout = () => {
        window.localStorage.clear();
        navigate("/");
        auth.signOut();
    };

    return(
        <Container className="shadow p-4 my-5 bg-white" 
                    style={{width:"500px"}}
        >
            <div className="text-center">
                <h3>Profile</h3>
            </div>
            <div className="text-center mt-3">
                <img src={profileImg} alt="profileImg" width={200} />
            </div>
            <div className="d-flex justify-content-center">
                <b>Email:</b>
                <p>{email}</p>
            </div>
            <div className="mt-3">
                <button 
                    className="btn btn-primary w-100"
                    onClick={() => handleLohout()}
            >
                Sign out
            </button>
            </div>
        </Container>
    );
}
export default Profile