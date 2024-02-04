import Image from "next/image";
import styles from "./Headline.module.css";
import Link from "next/link";
import { useCallback } from "react";

type Props = {
    page: string;
    onClick: (message?: any) => void;
    children: React.ReactNode;
}

export function Headline({ page, onClick, children }: Props) {
    const foo: number = 1;

    const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, foo: number) => {
        // e.currentTargetはここでは使えませんが、ログに何かを出力したい場合は別の方法を考える必要があります。
        e.preventDefault();
        alert(foo);
        // onClick(); // onClick プロパティを呼び出す
    }, []); // 依存配列にonClickを加えます

    return (
        <>
            <div className={styles.description}>
                <p>
                    Get started by editing {children}
                </p>
                <h1 className={styles.title}>{page} Page</h1>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{" "}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
                <Link 
                    href="/about"
                    onClick={(e) => handleClick(e, foo)}>
                    Button
                </Link>
            </div>
        </>
    );
}
