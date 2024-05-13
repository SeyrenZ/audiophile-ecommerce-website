import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en" className="pb-[200px]">
      {children}
    </div>
  );
}
