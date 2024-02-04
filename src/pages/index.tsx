import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "../components/Main/Main"
import { Header } from "../components/Header/Header";
import { useCallback, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [foo, setFoo] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    //このfooは毎回初期の値が保存される
    console.log(foo);
    if (foo < 10) {
      //setFooでは正しい情報が保存されているので、画面に表示されるものはカウントされている。
      setFoo(count => count + 1);
      //setFoo((count) => count < 10 ? count + 1 : count);
    }
  }, [foo]);

  const handleDisplay = () => {
      setIsShow(prev => !prev);
  }

  useEffect(() => {
      //マウント時の処理
      //更新後の状態を保持
      console.log(`マウント時${foo}`);
      document.body.style.backgroundColor = "red";

      //アンマウント時の処理
      //更新前の状態を保持
      return () => {
          console.log(`アンマウント時${foo}`);
          document.body.style.backgroundColor = "lightblue";
      };
    }, [foo]);

  return (
    <>
      <Header />
      <div className={styles.textfield}>
        <input type="text" 
                value={text} 
                onChange={e =>{
                  setText(e.currentTarget.value)
                }}/>
        <button 
          onClick={handleDisplay}
        >
            {isShow ? "非表示" : "表示"}
        </button>
      </div>
      <Main page="index" 
            foo={ foo } 
            handleClick={ handleClick }
            isShow={isShow}
      />
    </>
  );
}
