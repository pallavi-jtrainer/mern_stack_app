import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { authContext } from "../contexts/authContext";
import { useNavigate } from "react-router";

const Dashboard = () => {
    const {setAuthData, auth} = useContext(authContext);
    const navigate = useNavigate();

    const onSignOut = () => {
        setAuthData(null);
        navigate('/')
        // console.log("Logged Out of System");
    }
    return(
        <div className="container">
            <div>
                <h1 className="text-center">Welcome to Dashboard</h1>
                <h3 className="text-center">{`Hi ${auth.data}`}</h3>
                <Button variant="primary" onClick={onSignOut}>Sign Out</Button>
            </div>
        </div>
    )
}

export default Dashboard;