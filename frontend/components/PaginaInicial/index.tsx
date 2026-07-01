import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function PaginaInicial() {
  return (
    <div className="auth-shell min-vh-100 d-flex flex-column">
      <main className="flex-grow-1 d-flex align-items-center justify-content-center px-3 py-5">
        <div className="text-center text-black" style={{ maxWidth: "520px" }}>
          <h1 className="display-5 fw-semibold mb-3 p-5">SEJA BEM-VINDO!</h1>
          <Image
            src="/logo.svg"
            alt="Logo Orçamentos"
            width={64}
            height={64}
            priority
            className="mb-4"
          />
          <h1 className="mb-3 mt-5">SENAC ORÇAMENTOS</h1>
          <p className="lead text-black mb-4">
            Gestão de orçamentos para sua empresa
          </p>
          <Link href="/login" className="btn btn-primary btn-lg">
            Entrar
          </Link>
        </div>
      </main>
      {<Footer />}
    </div>
  );
}
