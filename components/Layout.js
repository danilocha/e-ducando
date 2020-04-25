import React from "react";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/images/logo-1-2.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/logo-1-2.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/images/logo-1-2.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@800&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/animate.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/fontawesome-all.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/zimed-icon.css"
        />
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/responsive.css"
        />
      </Head>

      <div className="page-wrapper">{props.children}</div>
    </div>
  );
};
export default Layout;
