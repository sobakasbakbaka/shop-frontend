import { ReactNode } from "react";
import "./globals.css";
import { ReactQueryProvider } from "@/shared/lib/react-query/Provider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
