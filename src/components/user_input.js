import React from "react";
import UserName from "./username_input";
import Password from "./password_input";

export default class UserForm extends React.Component {
  render() {
    return (
      <div id="r2" className="container">
        <div className="form-container">
          <div class="header3">
            <h3>Log In</h3>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <UserName />
            </div>
            <div>
              <Password />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
