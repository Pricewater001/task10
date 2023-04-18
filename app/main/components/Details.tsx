import React from "react";
import styles from "../main.module.css";

const Details = ({
  assestNumber,
  lastLogin,
}: {
  assestNumber?: string;
  lastLogin: string;
}) => {
  return (
    <div>
      <span className={styles.details}>
        Your users added{" "}
        <span className={styles["details-link"]}> 324 new assets </span> since your
        last login on 23 Nov 2022
      </span>
    </div>
  );
};

export default Details;
