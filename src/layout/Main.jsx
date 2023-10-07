
import { useEffect, useState } from "react";
import Loading from "../component/Loading/Loading";
import Navbar from "../share/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../share/Footer/Footer";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default Main;