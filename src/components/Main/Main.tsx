import { Inter } from "next/font/google";
import styles from "./Main.module.css";
import { Links } from "../Links/Links";
import { Headline } from "../Headline/Headline";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

type props = {
    page: string
}

export function Main(props: props) {
    console.log(props.page);

    useEffect(() => {
        console.log("マウント時");
        document.body.style.backgroundColor = "red";
    
        return () => {
            console.log('アンマウント時')
          document.body.style.backgroundColor = "";
        };
      }, []);

    return (
        <>
        <main className={`${styles.main} ${inter.className}`}>
            <Headline
                page={props.page}
                // allow関数で書かないとエラーが起こる
                onClick={() => alert('しっかり休みましょう。')} 
            >
            <code className={styles.code}>src/{props.page}/{props.page}.tsx</code>
            </Headline>
            <Links />
        </main>
        </>
    );
}
