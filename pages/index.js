import { GraphQLClient } from "graphql-request";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import clsx from "clsx";
import Header from "../components/Header";
import Banner from "../components/Banner";
import OurTeam from "../components/OurTeam";
import OurMember from "../components/OurMember";
import Subcribe from "../components/Subcribe";
import Footer from "../components/Footer";

const Home = () => {
  const [isToggle, setToggle] = useState(false);
  const [isShowIcon, setShowIcon] = useState(false);
  const handleScroll = () => {
    const pixels = 50;
    const top = 1200;
    if (window.pageYOffset > pixels) {
      setToggle(true);
    } else {
      setToggle(false);
    }
    if (window.pageYOffset > pixels) {
      setShowIcon(true);
      // $(".scrolltop-atf").fadeIn(1000, "easeInOutExpo");
    } else {
      setShowIcon(false);
      //$(".scrolltop-atf").fadeOut(1000, "easeInOutExpo");
    }
    console.log(isToggle);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="text-white">
      <Head>
        <title>Our team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button
          className={clsx(
            "fixed bottom-20 z-1 focus:outline-none",
            isShowIcon ? "right-8" : "-left-20"
          )}
          data-targets="html"
        >
          <i className="hover:opacity-80 w-12 h-12 bg-blue-600 leading-48 rounded-50 fa fa-angle-up atf-scrollup-icon"></i>
        </button>
        <Header isToggle={isToggle} />
        <Banner />
        <OurTeam />
        <OurMember />
        <div className="w-full h-x relative how-it-work flex items-center justify-center">
          <div className="absolute w-3/5 z-1 text-center">
            <h3 className="text-4xl font-bold leading-10 text-white mb-8">
              Lorem ipsum dolor sit amet, consecte adipisc elit.
            </h3>
            <a
              href="#"
              className="text-white bg-blue-500 text-base rounded-4 py-4 px-6 font-medium"
            >
              How It Work
            </a>
          </div>
          <Image
            alt="Mountains"
            src="https://themesfamily.com/tm/muhsi/assets/img/gallery/2.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <Subcribe />
        <Footer />
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    "https://api-ap-northeast-1.graphcms.com/v2/ckmbf2e6jub2y01ur4bj0hw1h/master"
  );

  const data = await graphcms.request(
    `query content_171408693c5642d7a8c0b446d1f6309c_ckmm36jbc6gfn0b81tfmy5v5n($id: ID!) {
      values: asset (where: { id: $id}, stage: DRAFT) {
        id
        stage
        fileName
        mimeType
        width
        height
        size
        url
      }
    }
    `,
    { id: "ckmm36jbc6gfn0b81tfmy5v5n" }
  );

  console.log(data);
  return {
    props: {
      data,
    },
  };
}
