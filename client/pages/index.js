import Head from "next/head";
import MainText from "../components/MainText/MainText";
import Navbar from "../components/Navbar/Navbar";
import TodoList from "../components/TodoList/TodoList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ToDo D-App</title>
        <meta
          name="description"
          content="Hello there, this is decentralized To Do app created with Next.js, Solidity and Truffle "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <MainText />
      <TodoList />
    </div>
  );
}
