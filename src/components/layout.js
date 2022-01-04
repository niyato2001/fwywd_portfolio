import Head from 'next/head';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';

export default function Layout({ children }) {
  return (
    <div>
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
    </div>
  );
}
