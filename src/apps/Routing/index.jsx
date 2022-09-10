import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { MessageWrapper } from "../../shared/components";

const LazyHome = lazy(() => import("../Home"));
const LazyDetails = lazy(() => import("../Details"));

const Routing = () => (
  <Routes>
    <Route path="/">
      <Route
        path=""
        element={
          <Suspense fallback={<MessageWrapper>please wiat</MessageWrapper>}>
            <LazyHome />
          </Suspense>
        }
      />

      <Route
        path="asset/:assetId"
        element={
          <Suspense fallback={<MessageWrapper>please wait</MessageWrapper>}>
            <LazyDetails />
          </Suspense>
        }
      />
    </Route>

    <Route
      path="*"
      element={
        <MessageWrapper>
          <p>Oooops, There's nothing here!</p>
        </MessageWrapper>
      }
    />
  </Routes>
);

export default () => <Routing />;
