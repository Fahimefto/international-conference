import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#1e40af"
        height={5}
        transformCSS={(css) => {
          const modifiedCSS = `
      ${css}
      #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 25%;
        size: 50px;
        right: 50%;
      }
      
    `;
          return <style>{modifiedCSS}</style>;
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
