import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import "./globals.css";
import Header from "./components/header/Header";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import DefaultLayout from "./components/admin/layout/DefaultLayout";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { getUserRole } from "./api/checkRole";
import { handleSignOut } from "./components/signIn/handleSignOut";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "t1",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (session?.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      role: session.user.role,
    };
  }
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <SessionProvider session={session}>
            <DefaultLayout session={session}>
              <EdgeStoreProvider>{children}</EdgeStoreProvider>
            </DefaultLayout>
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
