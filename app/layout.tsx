import Layout from './components/Layout';
import './globals.css';

export const metadata = {
  title: 'Ansarudeen Indiana',
  description: 'Spreading Divine Light and Wisdom',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
