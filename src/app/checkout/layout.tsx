import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en" className="bg-primary-whiteSmoke pb-[200px]">
      {children}
    </div>
  );
}
