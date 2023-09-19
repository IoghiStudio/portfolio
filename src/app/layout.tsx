import '@/styles/globals.css';
import cn from 'classnames';
import type { Metadata } from 'next';
import { Open_Sans, Montserrat } from 'next/font/google';
import { AppContextProvider } from '@/context/store';
import { Header } from '@/components/Header';

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


export const metadata: Metadata = {
  title: 'Nicusor Iorga',
  description: 'Best portfolio website made by Nicusor Iorga',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn([opensans.variable], [monserrat.variable])}>
      <AppContextProvider>
        <body className='main-layout'>
          <div className="main-layout__header">
            <Header />
          </div>

          <main className='main-layout__main'>
            {children}
          </main>
        </body>
      </AppContextProvider>
    </html>
  )
}
