import React from "react";
import UserName from "./username_input";
import Password from "./password_input";
import Navbar from "../navbar";

export default class LoginForm extends React.Component {
  render() {
    return (
      <div className="login">
        <Navbar />
      </div>
    );
  }
}
