"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  const NoNavbarPages = pathname.includes('/login') || pathname.includes('/signup');
  
  if (NoNavbarPages) {
    return null;
  }
  
  return <Navbar />;
}
