import { ReactNode } from "react";
import { ReactQueryProvider } from "@/shared/lib/react-query/Provider";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <div className={"max-w-[1240px] mx-auto"}>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
