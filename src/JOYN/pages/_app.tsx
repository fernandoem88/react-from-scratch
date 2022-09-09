import "../../wdyr";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimateSharedLayout, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import styled, { createGlobalStyle } from "styled-components";

const appQueryClient = new QueryClient();
const GlobalStyle = createGlobalStyle`

  html {
    /* 1rem = 16px*/
    font-size:  16px;
  }
  body {
    font-size: 1.5rem;
    background: #222;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

export const MainWrapper = styled(motion.div).attrs({
  "data-tbsc-name": "Pages--MainWrapper" as const,
})<{}>`
  background: #222 !important;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 2.4rem;
`;
MainWrapper.displayName = "PagesMainWrapper";

const AppWrapper = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <QueryClientProvider client={appQueryClient}>
      <GlobalStyle />
      <MainWrapper>
        <AnimateSharedLayout>
          <motion.div
            key={path}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.7,
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimateSharedLayout>
      </MainWrapper>
    </QueryClientProvider>
  );
};

export default AppWrapper;
