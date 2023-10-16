import '@ui/styles/globals.css';
import { Inter } from 'next/font/google';
import { CommandMenu } from '../components/layout/command-dialog';
import { ThemeProvider } from '../providers/theme';
import ConnectKitProvider from '../providers/connectkit';
import { ConnectKitButton } from 'connectkit';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen p-4`}>
        <ConnectKitProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <CommandMenu />
          </ThemeProvider>
        </ConnectKitProvider>
      </body>
    </html>
  );
}
