"use client";
import React from "react";
import Links from "./pageContent/Links";
import TogleThemeButton from "./TogleThemeButton";

export default function Header() {
  return (
    <header className="flex justify-end gap-4 mt-3 mr-2 items-center">
      <Links />
      <div className="w-px h-8 bg-gray-400 dark:bg-gray-600"></div>
      <TogleThemeButton />
    </header>
  );
}
