import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();
  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        Show Modal
      </button>
    </main>
  );
};

export default Home;
