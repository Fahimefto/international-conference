import Head from "next/head";
import React from "react";
import Script from "next/script";
import NoSSR from "react-no-ssr";
import dynamic from "next/dynamic";
export default function FacebookPage() {
  return (
    <>
      <Script
        id="fb_page"
        strategy="beforeInteractive"
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0"
        nonce="vG8AKzdi"
      />

      <div
        className="fb-page rounded-md border-2 border-blue-800 min-w-full"
        data-href="https://www.facebook.com/arces.sust"
        data-tabs=""
        data-width=""
        data-height=""
        data-small-header="true"
        data-adapt-container-width="false"
        data-hide-cover="false"
        data-show-facepile="false"
      >
        <blockquote
          cite="https://www.facebook.com/arces.sust"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/arces.sust">ARCES 2024</a>
        </blockquote>
      </div>
    </>
  );
}
