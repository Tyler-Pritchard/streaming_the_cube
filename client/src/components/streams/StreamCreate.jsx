import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input }) {
    return (
      <div className="field">
        <label />
        <input {...input} />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
