import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mercado Libre | Login",
  description: "Inicia sesión en Mercado Libre para acceder a tus compras, favoritos y más.",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-yellow-300 shadow-md p-3 z-10">
        <div className="container mx-auto px-9">
          <Link href="/">
            <Image 
              src="https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png" 
              alt="Mercado Libre Logo" 
              width={130} 
              height={50} 
            />
          </Link>
        </div>
      </header>
      <div className="pt-20">{children}</div>
    </>
  );
}
