import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {Indexheader , BodyIndex , Indexsidebar , Indexfooter, } from './imported';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return <dive>
     <Head>
        <div className="Home-index">
            <title>
              ITP-302 Activity
            </title>
        </div>
      </Head>
      
      <BodyIndex>
        <Indexheader>
          <h1>ITP-302 Activity</h1>
          <p>Welcome to my homepage!</p>
        </Indexheader>
      </BodyIndex>


      <Indexsidebar>
        
        <Indexsidebar/>

        <Indexfooter>

        </Indexfooter>
  </dive>
}
