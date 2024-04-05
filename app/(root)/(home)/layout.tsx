import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

const Home = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section
          className="flex min-h-screen felx-1 felx-col px-6 pb-6 pt-28
max-md:pb-14 sm:px-14"
        >
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default Home;
