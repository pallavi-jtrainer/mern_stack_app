import React from "react";
import { withRouter } from 'react-router';

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]))
    } catch (e) {
        return null;
    }
};

const AuthVerify = (props) => {
    //const navigate = useNavigate();
    props.history.listen(() => {
        const token = JSON.parse(localStorage.getItem("user"));

        if(token) {
            const decodedToken = parseJwt(token.accessToken);

            if(decodedToken * 1000 < Date.now()) {
                props.logOut();
            }
        }

    })

    return (
        <div></div>
    )
}

export default withRouter(AuthVerify);