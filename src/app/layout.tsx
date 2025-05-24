import { ReactNode } from "react";
import { ReactQueryProvider } from "@/shared/lib/react-query/Provider";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <ReactQueryProvider>
          <div className={"max-w-[1240px] mx-auto"}>{children}</div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
