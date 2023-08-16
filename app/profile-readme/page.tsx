"use client";

import { Metadata } from "next";
import { useRouter } from "next/router";
import React from "react";

export const metadata: Metadata = {
  title: "GPRG",
  icons: {
    icon: "/Main-Logo.svg",
  },
};

export default function ProfileReadme(): React.JSX.Element | null {
  const router = useRouter();
  const formData = JSON.parse(localStorage.getItem("formData") || "null");

  if (!formData) router.push("/404");

  return formData ? <h1>Hello</h1> : null;
}
