import Head from 'next/head';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';

const Layout = ({ children }) => {
  return (
    <div>
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
    </div>
  );
};

export default Layout;
