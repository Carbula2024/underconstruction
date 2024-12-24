import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";



export default function Home() {
  return (
    <>
      <Head>
        <title>En construcción</title>
        <meta name="description" content="en construccion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className="container"
        onClick={() => window.location.href = "https://www.carbula.cl"}
        style={{ cursor: "pointer" }}
      >
        <h1>Estamos trabajando para usted</h1>
        <h2>
          Este sitio se encuentra actualmente en remodelación.
          <br />
          Por favor, visítenos y revise nuestro catálogo en
          <span className="carbula"> www.carbula.cl</span>.
        </h2>
      </div>
    </>
  );
}
