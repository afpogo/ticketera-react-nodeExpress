import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UiProvider } from "@/pages/context/UiContext";
import Layout from "./components/layout";
import { SocketProvider } from "./context/SocketContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SocketProvider>
      <UiProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UiProvider>
    </SocketProvider>
  );
}
