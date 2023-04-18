import React from "react";
import styles from "../main.module.css";
import { Open_Sans } from "@next/font/google";

const sans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

export function NumberStatus({
  number,
  title,
  description,
  primary,
  direction = "row",
}: {
  number?: string;
  title: string;
  description: string;
  direction?: string;
  primary? : boolean
}) {
  return (
    <main className={`${styles.main}`}
    style={{
        flexDirection : direction=="row" ? "row" : "column"
    }}
    >
        {number && (
            <span className={` ${styles.number} `}
            style={{
              color : primary? "#009aac" : "#3C3C3C"
            }}
            >{number}</span>
        )}
      <div className={`${sans.className} ${styles.section} `}
        style={{
            marginLeft: direction=="row" ? "1rem" : "0rem"
        }}
      >
                <span className={`${sans.className} ${styles.title}`}>{title}</span>
                <span className={`${sans.className} ${styles.description}`}>
                {description}
        </span>
      </div>
    </main>
  );
}
