import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { Sections, SectionFunc } from "../lib/enums";
import Image from "next/image";

import React from "react";
import Link from "next/link";

const section = Sections.ABOUT;

export default function About() {
  return (
    <Layout section={section}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <br />
      <div className="content">
        <p>
          This website is built on{" "}
          <Link href={"https://react.dev/"}>React</Link> +{" "}
          <Link href={"https://nextjs.org/"}>Next.js</Link> with few CSS.{" "}
          <Link href={"https://bellard.org/"}>Fabrice Bellard</Link> is my
          inspiration.
        </p>
        <p>
          This is a testing paragraph via Neovim, LazyVim.
        </p>
        <p>
          If you have any questions or suggestions, write to{" "}
          <Link href={"mailto:cirnovskyv@gmail.com"}>cirnovskyv@gmail.com</Link>
          .
        </p>
        <br />
      </div>
    </Layout>
  );
}
