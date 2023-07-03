import React from "react";

export default class UserName extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="userName">
          <span>
            <strong className="label-font">User Name</strong>
          </span>
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="User Name"
        />
      </div>
    );
  }
}
