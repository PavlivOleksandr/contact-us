import React from "react";

// helpers
import { Routes, Route, Navigate } from "react-router-dom";

// components
import Layout from "../layout/Layout";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import ContactUsPage from "../pages/ContactUs/ContactUsPage";

const Router = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="/contact" />} />
         <Route
            path="/contact"
            element={
               <Layout>
                  <ContactUsPage />
               </Layout>
            }
         />
         <Route path="*" element={<PageNotFound />} />
      </Routes>
   );
};
export default Router;
