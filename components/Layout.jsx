import React from 'react';
import Header from './Header.jsx';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
