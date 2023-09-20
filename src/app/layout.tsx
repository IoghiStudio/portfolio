"use client";
import '@/styles/globals.scss';
import './layout.scss';
import cn from 'classnames';
import type { Metadata } from 'next';
import { Open_Sans, Montserrat } from 'next/font/google';
import { AppContextProvider, useAppContext } from '@/context/store';
import { Header } from '@/components/Header';
import { Nav } from '@/components/Nav';
import { Menu } from '@/components/Menu';

const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const monserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-monserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {
    isMenuOpened
  } = useAppContext();

  return (
    <html lang="en" className={cn([opensans.variable], [monserrat.variable])}>
      <AppContextProvider>
        <body className='main-layout'>
          <header className="main-layout__header">
            <Header />
          </header>

          <main className='main-layout__main'>
            <div className="main-layout__sidebar">
              <Nav
                forSidebar={true}
              />
            </div>

            <div className="main-layout__children">
              {children}
            </div>

            <Menu />
          </main>
        </body>
      </AppContextProvider>
    </html>
  )
}
