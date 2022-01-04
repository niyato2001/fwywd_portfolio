import Head from 'next/head';
import PageHeader from './PageHeader';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div>
      <PageHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
