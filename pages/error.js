import React from "react";

const ErrorPage = ({ statusCode }) => {
  return (
    <div>
      <h1>{statusCode}</h1>
      <p>An error occurred on the server</p>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
