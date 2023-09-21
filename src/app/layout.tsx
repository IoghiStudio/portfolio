"use client";
import '@/styles/globals.scss';
import './layout.scss';
import cn from 'classnames';
import { 
  Open_Sans, 
  Montserrat, 
  Fuggles,
  Kalam
} from 'next/font/google';
import { AppContextProvider, useAppContext } from '@/context/store';
import { Header } from '@/components/Header';
import { Nav } from '@/components/Nav';
import { Menu } from '@/components/Menu';
import { TagType, TagWrapper } from '@/components/TagWrapper/TagWrapper';

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

const fuggles = Fuggles({
  subsets: ["latin"],
  variable: "--font-fuggles",
  style: ["normal"],
  weight: ["400",],
});

const kalam = Kalam({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-kalam",
  weight: ["300", "400", "700"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {
    isMenuOpened
  } = useAppContext();

  return (
    <html
      lang="en" 
      className={cn(
        [opensans.variable], 
        [monserrat.variable],
        [fuggles.variable],
        [kalam.variable]
      )}
    >
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

            <TagWrapper tagType={TagType.Html}>
              <TagWrapper tagType={TagType.Body}>
                <div className="main-layout__children">
                  {children}
                </div>
              </TagWrapper>
            </TagWrapper>

            <Menu />
          </main>
        </body>
      </AppContextProvider>
    </html>
  )
}
