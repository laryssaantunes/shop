import React from 'react';
import  Header  from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App(){
  return (
    <div>
      <Header />
      {childern}
      <Footer />
      <Main />
    </div>
  )
}

export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


