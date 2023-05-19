import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UiProvider } from "@/pages/context/UiContext";
import Layout from "./components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UiProvider>
  );
}
