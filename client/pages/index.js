import Head from "next/head";
import ConnectWalletButton from "../components/ConnectWalletButton/connectWalletButton";
import MainText from "../components/MainText/MainText";
import Navbar from "../components/Navbar/Navbar";
import TodoList from "../components/TodoList/TodoList";
import WrongNetworkMessage from "../components/WrongNetworkMessage/wrongNetworkMessage";

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>ToDo D-App</title>
        <meta
          name="description"
          content="Hello there, this is decentralized To Do app created with Next.js, Solidity and Truffle "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Navbar />

      {"is user not logged in?" ? "" : <MainText />}

      {!"is user not logged in?" ? (
        <ConnectWalletButton />
      ) : !"is this the correct network?" ? (
        <TodoList />
      ) : (
        <WrongNetworkMessage />
      )}
    </div>
  );
}
