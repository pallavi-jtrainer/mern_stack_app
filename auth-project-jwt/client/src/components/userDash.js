import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import Pubsub from "../common/PubSub";

const UserDash = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if(error.response && error.response.status === 401) {
          Pubsub.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default UserDash;