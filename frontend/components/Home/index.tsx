import Link from 'next/link'


export default function PaginaHome() {
  return (
    <div className="container mt-5">
      <h1 className="mb-1">Bem-vindo ao SENAC Orçamentos</h1>
      <p className="text-muted mb-4">Selecione uma opção para começar</p>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Produtos</h5>
              <p className="card-text text-muted">Gerencie o catálogo de produtos e serviços.</p>
              <Link href="/produto" className="btn btn-primary">Acessar</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Clientes</h5>
              <p className="card-text text-muted">Gerencie os clientes cadastrados no sistema.</p>
              <Link href="/cliente" className="btn btn-primary">Acessar</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Orçamentos</h5>
              <p className="card-text text-muted">Crie e gerencie orçamentos para seus clientes.</p>
              <Link href="/orcamento" className="btn btn-primary">Acessar</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}