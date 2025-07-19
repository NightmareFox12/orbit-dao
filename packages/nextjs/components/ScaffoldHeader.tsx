"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./shadcn/ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { BugIcon, Home } from "lucide-react";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    icon: <Home />,
    label: "Home",
    href: "/",
  },
  {
    label: "Debug Contracts",
    href: "/debug",
    icon: <BugIcon />,
  },
];

export default function ScaffoldHeader() {
  const pathname = usePathname();

  return (
    <header className="bg-linear-to-bl from-purple-900 to-slate-900 border-b border-white/10 backdrop-blur-sm">
      <div className="mx-4 h-16 flex items-center justify-between gap-2 md:gap-4 lg:gap-5">
        <div className="flex items-center gap-2 justify-center">
          <div className="relative w-8 h-8">
            <Image src={"/favicon.png"} alt="orbit dao" fill={true} />
          </div>
          {/* <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              {/* <Zap className="w-5 h-5 text-white" /> */}
          {/* </div>  */}
          <span className="text-xl font-bold text-white">Swap Inbox</span>
        </div>
        <nav className="hidden md:flex space-x-4 flex-1">
          {menuLinks.map(({ label, href, icon }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={
                    isActive ? "bg-gradient" : "text-white hover:text-white bg-gradient-secondary border-[0.5px]"
                  }
                >
                  {icon}
                  <span>{label}</span>
                </Button>
              </Link>
            );
          })}
        </nav>
        <ConnectButton />
      </div>
    </header>
  );
}
