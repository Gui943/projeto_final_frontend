'use client'
import { useState } from 'react'
import { Produto } from '@/types/produtos'
import AdicionarEditarProduto from './AdicionarEditarProduto'
import { createProduto, updateProduto } from '@/app/(system)/produto/actions'

interface Props {
  produtos: Produto[]
}

export default function ListaProdutos({ produtos }: Props) {
  const [modalAberto, setModalAberto] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null)

  function abrirParaCriar() {
    setProdutoSelecionado(null)
    setModalAberto(true)
  }

  function abrirParaEditar(produto: Produto) {
    setProdutoSelecionado(produto)
    setModalAberto(true)
  }

  function fecharModal() {
    setModalAberto(false)
    setProdutoSelecionado(null)
  }

  async function handleSalvar(form: Produto) {
    if (produtoSelecionado?.id) {
      await updateProduto(produtoSelecionado.id, form)
    } else {
      await createProduto(form)
    }
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Produtos</h1>
        <button className="btn btn-primary" onClick={abrirParaCriar}>Adicionar +</button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th><th>Código SKU</th><th>Nome</th><th>Preço</th><th>Unidade</th><th>Ativo</th><th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.codigoSku}</td>
              <td>{produto.nome}</td>
              <td>{produto.precoUnitario?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              <td>{produto.unidade}</td>
              <td>{produto.ativo ? 'Sim' : 'Não'}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => abrirParaEditar(produto)}>Editar</button>
                <button className="btn btn-sm btn-danger">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalAberto && (
        <AdicionarEditarProduto
          produto={produtoSelecionado ?? undefined}
          onClose={fecharModal}
          onSalvar={handleSalvar}
        />
      )}
    </div>
  )
}
