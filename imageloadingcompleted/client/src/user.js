import React, { useState } from "react";
import axios from "axios";

const User = () => {
    const [user, setUser] = useState({name: "", photo: ""});

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', user.name);
        formData.append('photo', user.photo);

        axios.post('http://localhost:5000/users/new', formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleNameChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handlePhotoChange = (e) => {
        setUser({...user, photo: e.target.files[0]});
    }

    return(
        <form onSubmit={handleSubmit} encType="multi-part/form-data">
            <div>
                <input type="text" placeholder="Name" name="name"
                value={user.name} onChange={handleNameChange} />    
            </div>
            <div>
                <input type="file" accept=".png, .jpg, .jpeg" name="photo" onChange={handlePhotoChange}/>
            </div>
            <input type="submit"/>  
        </form>
    )
}

export default User;