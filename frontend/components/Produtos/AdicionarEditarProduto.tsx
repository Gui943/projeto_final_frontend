'use client'
import { useState } from 'react'
import { Produto } from '@/types/produtos'

interface Props {
  produto?: Produto
  onClose: () => void
  onSalvar: (form: Produto) => Promise<void>
}

export default function AdicionarEditarProduto({ produto, onClose, onSalvar }: Props) {
  const [form, setForm] = useState<Produto>({
    codigoSku: produto?.codigoSku ?? '',
    nome: produto?.nome ?? '',
    descricao: produto?.descricao ?? '',
    precoUnitario: produto?.precoUnitario ?? 0,
    unidade: produto?.unidade ?? 'UN',
    ativo: produto?.ativo ?? true,
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await onSalvar(form)
    onClose()
  }

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{produto ? 'Editar Produto' : 'Novo Produto'}</h5>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body d-flex flex-column gap-2">
              <input className="form-control" placeholder="SKU" value={form.codigoSku}
                onChange={e => setForm({ ...form, codigoSku: e.target.value })} />
              <input className="form-control" placeholder="Nome *" required value={form.nome}
                onChange={e => setForm({ ...form, nome: e.target.value })} />
              <input className="form-control" placeholder="Descrição" value={form.descricao}
                onChange={e => setForm({ ...form, descricao: e.target.value })} />
              <input className="form-control" placeholder="Preço *" type="number" step="0.01" required
                value={form.precoUnitario}
                onChange={e => setForm({ ...form, precoUnitario: Number(e.target.value) })} />
              <input className="form-control" placeholder="Unidade (ex: UN, M2)" value={form.unidade}
                onChange={e => setForm({ ...form, unidade: e.target.value })} />
              <div className="form-check">
                <input className="form-check-input" type="checkbox" checked={form.ativo}
                  onChange={e => setForm({ ...form, ativo: e.target.checked })} />
                <label className="form-check-label">Ativo</label>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
              <button type="submit" className="btn btn-primary">Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
