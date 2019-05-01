import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "736430770142-1r3g0la18unvr2jqapcn7rc20vmli166.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
        });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
