import Head from "next/head";
import Link from "next/link";
import React from 'react';
import { Button } from 'semantic-ui-react';

export default function Example() {
  return (
    <div className="container">
      <Head>
        <title>CMU Lost and Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Available Items</h1>
        <Button><Link href="/"><a>Back to Home</a></Link></Button>
      </main>        
    </div>
  );
}
