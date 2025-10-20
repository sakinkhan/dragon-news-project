import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeComponents/LeftAside";
import RightAside from "../components/homeComponents/RightAside";
import Loading from "../pages/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-4">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-4">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-4 grid grid-cols-12 mt-15 gap-5">
        <aside className="col-span-3 sticky top-5 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="middle col-span-6">
          {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
        <aside className="col-span-3 sticky top-5 h-fit">
          <RightAside></RightAside>
        </aside>
        <section className="right"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
