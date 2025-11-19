import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hola',
  description: 'Un saludo cálido y moderno en la web.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
