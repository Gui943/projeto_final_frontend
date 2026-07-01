import Link from "next/link";
import { logout } from "@/app/(auth)/logout/actions";
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/home">SENAC ORÇAMENTOS</Link>
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
                            <li className="nav-item">
                                <form action={logout} className="ms-auto">
                                    <button type="submit" className="btn btn-outline-danger">Sair</button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}