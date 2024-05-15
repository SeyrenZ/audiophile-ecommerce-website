import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      lang="en"
      className="bg-primary-whiteSmoke lg:pb-[200px] sm:pb-[116px] pb-[96px]"
    >
      {children}
    </div>
  );
}
