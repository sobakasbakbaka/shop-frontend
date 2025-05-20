import { ReactNode } from "react";
import { ReactQueryProvider } from "@/shared/lib/react-query/Provider";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
