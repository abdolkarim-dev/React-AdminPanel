 
import React from "react";
import { Link } from "react-router";
import HeaderDark from "@/assets/images/HeaderSite/HeaderDark.png";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f6f8fc]">
      <div className="flex min-h-screen">

        {/* ================= FORM ================= */}
        
            {children}
         
        {/* ================= BRAND ================= */}
        <aside className="relative hidden overflow-hidden lg:flex lg:w-[45%]">
          
          <div className="relative flex w-full flex-col justify-between bg-[#172554] px-14 py-12 xl:px-20">

            {/* Small decorative elements */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[50px] border-blue-400/10" />
            <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full border-[60px] border-cyan-400/10" />

            {/* Logo */}
            <div className="relative z-10">
              <Link to="/" className="inline-block">
                <img
                  src={HeaderDark}
                  width={231}
                  height={48}
                  alt="Logo"
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-md">

              <div className="mb-6 h-1 w-12 rounded-full bg-cyan-400" />

              <h2 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
                Everything you need,
                <span className="mt-2 block text-cyan-300">
                  in one place.
                </span>
              </h2>

              <p className="mt-6 max-w-sm text-base leading-7 text-blue-100/70">
                Manage your workspace, monitor your data and
                keep your projects organized with a simple
                and powerful dashboard.
              </p>

            </div>

            {/* Footer */}
            <div className="relative z-10 flex items-center gap-3 text-sm text-blue-100/40">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>Secure workspace</span>
            </div>

          </div>
        </aside>

      </div>
    </div>
  );
} 
