import React from "react";
import styles from "./links.module.css";
import Link from "next/link";
import MenuSimple from "@/components/(frontpage)/dropdown/DropDown";
import { Language } from "@mui/icons-material";
import Image from "next/image";
const links = [
  { id: 1, path: "/", title: "english" },
  { id: 2, path: "/shop", title: "want shopping" },
  { id: 3, path: "/blogs", title: "view blogs" },
];

const Links = () => {
  const storedUserString = localStorage.getItem("user");
  const users = storedUserString ? JSON.parse(storedUserString) : null;

  console.log(users);

  console.log("user in the main page", users);
  const isAdmin = false;
  return (
    <div className={styles.wrapper}>
      <MenuSimple title="next pro" />
      <Language />
      {links.map((link) => (
        <>
          <Link href={link.path} className={styles.link} key={link.id}>
            {link.title}
          </Link>
        </>
      ))}
      {isAdmin ? (
        isAdmin ? (
          <Link href="/admin" className={styles.link}>
            admin
          </Link>
        ) : (
          <Link href="/logout" className={styles.link}>
            {" "}
            logout
          </Link>
        )
      ) : users != null ? (
        <Image
          src={users?.photoURL}
          alt="okok"
          width={60}
          height={60}
          style={{ padding: ".5rem", marginBottom: "5px" }}
          objectFit="cover"
        />
      ) : (
        <Link href="/signup" className={styles.link}>
          join
        </Link>
      )}
    </div>
  );
};

export default Links;
