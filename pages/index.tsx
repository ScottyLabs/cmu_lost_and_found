import Head from "next/head";
import Link from "next/link";
import React from 'react';
import { Button } from 'semantic-ui-react';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CMU Lost and Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to the<br></br>CMU Lost and Found</h1>
        <img src="/dog-logo.png" alt="CMU Lost and Found Logo"></img>
        <br></br>
        <Link href="/available"><a><Button>View Items</Button></a></Link>
        <br></br>
        <Link href="/admin"><a><Button>Admin Login</Button></a></Link>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          text-align: center;
          justify-content: center;
          align-items: center;
        }

        h1 {
          color: #9C2624;
          font-weight: 600;
        }

        img {
          max-width: 60%;
          height: auto;
        }

        a {
          display: inline;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
