"use client";

import { useState } from "react";
import { usePathname } from 'next/navigation';
import Header from "../../src/components/layout/Header";
import Footer from "../../src/components/layout/Footer";
import SubNavbar from "../../src/components/navbar/subnavbar";
import { navbar_items } from "../../src/components/navbar/navbar_data";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  
  // Trouve l'élément actif basé sur le pathname
  const activeParent = navbar_items.find(item => 
    pathname.startsWith(item.page || '') || 
    item.submenu?.some(sub => pathname.startsWith(sub.url || ''))
  );

  return (
    <>
      <Header />
      {activeParent?.submenu && (
        <SubNavbar parentLabel={activeParent.label} />
      )}
      <main>{children}</main>
      <Footer />
    </>
  );
}