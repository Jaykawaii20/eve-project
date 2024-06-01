"use client";

import { useEffect } from "react";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { store } from "../store/store";
import { Provider } from "react-redux";
import MenuBar from "@/components/menuBar/MenuBar";
import Navbar from "@/components/navbar/Navbar";
import { RealmProvider } from "@/contexts/Realm";

import { useDispatch } from "react-redux";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  useEffect(() => {
    /**Auth Gateway that requires Access Token, uncomment if the backend is done */

    // if (typeof window !== "undefined") {
    //   if (pathname !== "/") {
    //     if (!localStorage.getItem("token")) {
    //       window.location.href = "/";
    //     }
    //   }
    //   if (pathname === "/") {
    //     if (localStorage.getItem("token")) {
    //       window.location.href = "/homepage";
    //     }
    //   }
    // }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <RealmProvider>
            <div
              className="bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url(/background.png)",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {pathname !== "/" && pathname !== "/onboarding" && <Navbar />}
              <div className="flex px-[42px] py-[16px]">
                <div className="max-sm:hidden">
                  {pathname !== "/" && pathname !== "/onboarding" && <MenuBar />}
                </div>
                {children}
              </div>
            </div>
            <Toaster />
          </RealmProvider>
        </Provider>
      </body>
    </html>
  );
}
