import { Inter } from "next/font/google";
import { Main } from "../components/Main/Main";
import { Header } from "../components/Header/Header";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [foo, setFoo] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setFoo(prev => prev + 1);
  }

  useEffect(() => {
      //マウント時の処理
      console.log(foo);
      document.body.style.backgroundColor = "lightblue";
  
      //アンマウント時の処理
      return () => {
          document.body.style.backgroundColor = "red";
      };
    }, [foo]);

  return (
    <>
      <Header />
      <Main 
        page="about"  
        foo={ foo } 
        handleClick={ handleClick }
      />
    </>
  );
}
