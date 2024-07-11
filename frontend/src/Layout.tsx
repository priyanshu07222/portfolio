// import React from 'react'
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import Animation from "./components/Animation";
import { Container } from "./components/Container";

export const Layout = () => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {Loading ? (
        <Animation />
      ) : (
        <div>
          <Container>
            <Navbar />
            <Outlet />
            <Footer />
          </Container>
        </div>
      )}
    </div>
  );
};
