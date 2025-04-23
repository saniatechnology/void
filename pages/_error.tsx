import React from "react";
import Error from "next/error";
import { NextPageContext } from "next";
import { MyErrorProps } from "../types/error";

class MyError extends React.Component<MyErrorProps> {
  static getInitialProps({ res, err }: NextPageContext): MyErrorProps {
    const statusCode = res?.statusCode || err?.statusCode || 404;
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;
    return <Error statusCode={statusCode} />;
  }
}

export default MyError;
