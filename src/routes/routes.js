import React from "react";

import ContentLayout from "../layouts/ContentLayout/ContentLayout";
import Content from "../components/organisms/Content/Content";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ContentLayout>
              <Outlet />
            </ContentLayout>
          }
        >
          <Route path="/trending" element={<Content />}/>
          <Route path="/popular" element={<Content />}/>
          <Route path="/top-rated" element={<Content />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
