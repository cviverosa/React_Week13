import React from "react";
import UserName from "./username_input";

export default class Password extends React.Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="password">
            <span>
              <strong className="label-font">Password</strong>
            </span>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
      </div>
    );
  }
}
