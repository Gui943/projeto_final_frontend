/*
 * Layout da área autenticada (route group "(system)").
 *
 * Todo arquivo `page.tsx` dentro de (system) é renderizado aqui no lugar de
 * {children}. Este é o lugar para a MOLDURA do sistema: cabeçalho, menu de
 * navegação, rodapé, etc. — partes que se repetem em todas as telas internas.
 *
 * Hoje ele é só um esqueleto. PARTE DO SEU TRABALHO é construir:
 *   - um cabeçalho (Header) com o nome do sistema;
 *   - uma navegação (links para /produtos, /clientes, /orcamentos, /usuario);
 *   - um botão "Sair" que chama a server action `logout`
 *     (de "@/app/(auth)/logout/actions") dentro de um <form action={logout}>.
 *
 * Crie esses componentes em /components e importe-os aqui.
 */
import Link from "next/link";
export default function SystemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {<nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/home">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/produto">Produtos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" href="/cliente">Clientes</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link active" href="/orcamento">Orçamentos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>}
      <main>{children}</main>
      {/* TODO: <Footer /> aqui */}
    </div>
  );
}
