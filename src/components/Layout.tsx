import Head from 'next/head';
import { ReactNode } from 'react';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props): JSX.Element {
  return (
    <div>
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
    </div>
  );
}
