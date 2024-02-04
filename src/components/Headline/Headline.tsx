import Image from "next/image";
import styles from "./Headline.module.css";

type Props = {
    page: string;
    children: React.ReactNode;
}

export function Headline({ page, children }: Props) {

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
            </div>
        </>
    );
}
