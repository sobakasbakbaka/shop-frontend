import { ReactNode } from "react";
import { ReactQueryProvider } from "@/shared/lib/react-query/Provider";
import "./globals.css";
import { Header } from "@/widgets/header/ui/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <ReactQueryProvider>
          <Header />
          <div className={"max-w-[1240px] mx-auto"}>{children}</div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
