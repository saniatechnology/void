import React from "react";
import Error from "next/error";
import { MyErrorProps } from "../types/error";

class MyError extends React.Component<MyErrorProps> {
  static getInitialProps({ res, err }: { res?: any; err?: any }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  }

  render() {
    return <Error statusCode={this.props.statusCode} />;
  }
}

export default MyError;
