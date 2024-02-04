import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import styeles from "./Header.module.css";

const inter = Inter({ subsets: ["latin"] });

export function Header() {
  return (
    <>
      <header className={styeles.header}>
        <Link href={"/"} className={styeles.anchor}>Index</Link>
        <Link href={"/about"} className={styeles.anchor}>About</Link>
      </header>
    </>
  );
}
