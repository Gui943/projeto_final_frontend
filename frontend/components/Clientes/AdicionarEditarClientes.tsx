'use client'
import { useState } from 'react'
import { Cliente } from '@/types/clientes'

interface Props {
  cliente?: Cliente
  onClose: () => void
  onSalvar: (form: Cliente) => Promise<void>
}

export default function AdicionarEditarClientes({ cliente, onClose, onSalvar }: Props) {
  const [form, setForm] = useState<Cliente>({
    id: cliente?.id ?? undefined,
    documento: cliente?.documento ?? '',
    nome: cliente?.nome ?? '',
    email: cliente?.email ?? '',
    telefone: cliente?.telefone ?? '',
    observacoes: cliente?.observacoes ?? '',
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
            <h5 className="modal-title">{cliente ? 'Editar Cliente' : 'Novo Cliente'}</h5>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body d-flex flex-column gap-2">
              <input className="form-control" placeholder="Documento" value={form.documento}
                onChange={e => setForm({ ...form, documento: e.target.value })} />
              <input className="form-control" placeholder="Nome *" required value={form.nome}
                onChange={e => setForm({ ...form, nome: e.target.value })} />
              <input className="form-control" type="email" placeholder="Email" value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })} />
              <input className="form-control" placeholder="Telefone" value={form.telefone}
                onChange={e => setForm({ ...form, telefone: e.target.value })} />
              <input className="form-control" placeholder="Observações" value={form.observacoes}
                onChange={e => setForm({ ...form, observacoes: e.target.value })} />
              <div className="form-check">
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
