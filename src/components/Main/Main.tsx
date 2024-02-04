import { Inter } from "next/font/google";
import styles from "./Main.module.css";
import { Links } from "../Links/Links";
import { Headline } from "../Headline/Headline";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

type props = {
    page: string
    foo: number
    isShow: boolean
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Main(props: props) {
    return (
        <>
            {props.isShow ? <h1 className={styles.title}>{ props.foo }</h1> : null};
            
            <div className={styles.countButton}>
                <button 
                   onClick={props.handleClick}
                >
                    +
                </button>
            </div>
            <main className={`${styles.main} ${inter.className}`}>
                <Headline
                    page={props.page}
                    // allow関数で書かないとエラーが起こる
                >
                <code className={styles.code}>src/{props.page}/{props.page}.tsx</code>
                </Headline>
                <Links />
            </main>
        </>
    );
}
