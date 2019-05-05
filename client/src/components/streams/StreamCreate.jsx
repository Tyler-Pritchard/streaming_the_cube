import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Form>
          <Field name="title" />
          <Field name="description" />
        </Form>
      </div>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
