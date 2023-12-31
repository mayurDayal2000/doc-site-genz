import Head from "next/head";
import { Button } from "antd";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main>
        <h1>Create Next App is Working!</h1>
        <Button type="primary">Default</Button>        
      </main>
    </>
  );
}
