import React from "react";
import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import ErrorPage from "./pages/ErrorPage";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/"
          element={
            <LandingPage
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
          }
        />
        <Route
          path="/:cityName"
          element={
            <BookingPage
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
