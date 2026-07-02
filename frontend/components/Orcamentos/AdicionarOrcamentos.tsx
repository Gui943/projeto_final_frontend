'use client'
import { useState } from 'react'
import { Orcamento, ItemOrcamento } from '@/types/orcamentos'

interface Props {
    orcamento?: Orcamento
    onClose: () => void
    onSalvar: (form: Orcamento) => Promise<void>
}

export default function AdicionarOrcamentos({ orcamento, onClose, onSalvar }: Props) {
    const [form, setForm] = useState<Orcamento>({
        clienteId: orcamento?.clienteId ?? undefined,
        valorDesconto: orcamento?.valorDesconto ?? 0,
        validoAte: orcamento?.validoAte ?? '',
        observacoes: orcamento?.observacoes ?? '',
        situacao: orcamento?.situacao ?? 'pendente',
        itens: orcamento?.itens ?? [],
    })

    const [itens, setItens] = useState<ItemOrcamento[]>(orcamento?.itens ?? [])

    function adicionarItem() {
        setItens([...itens, { produtoId: 0, quantidade: 1, precoUnitario: 0 }])
    }

    function removerItem(index: number) {
        setItens(itens.filter((_, i) => i !== index))
    }

    function atualizarItem(index: number, campo: keyof ItemOrcamento, valor: number) {
        const novosItens = [...itens]
        novosItens[index] = { ...novosItens[index], [campo]: valor }
        setItens(novosItens)
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        await onSalvar({ ...form, itens })
        onClose()
    }

    return (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Novo Orçamento</h5>
                        <button type="button" className="btn-close" onClick={onClose} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body d-flex flex-column gap-2">
                            <small className="text-muted">Cliente ID <span className="text-danger">*</span></small>
                            <input className="form-control" placeholder="Cliente ID" type="number" required
                                value={form.clienteId ?? ''}
                                onChange={e => setForm({ ...form, clienteId: Number(e.target.value) })} />
                                <small className="text-muted">Desconto</small>
                            <input className="form-control" placeholder="Desconto" type="number" step="0.01"
                                value={form.valorDesconto}
                                onChange={e => setForm({ ...form, valorDesconto: Number(e.target.value) })} />
                                <small className="text-muted">Válido até</small>
                            <input className="form-control" placeholder="Válido até" type="date"
                                value={form.validoAte}
                                onChange={e => setForm({ ...form, validoAte: e.target.value })} />
                            <small className="text-muted">Observações</small>
                            <input className="form-control" placeholder="Observações"
                                value={form.observacoes}
                                onChange={e => setForm({ ...form, observacoes: e.target.value })} />
                            <small className="text-muted">Situação <span className="text-danger">*</span></small>
                            <select className="form-select" value={form.situacao}
                                onChange={e => setForm({ ...form, situacao: e.target.value as Orcamento['situacao'] })}>
                                <option value="pendente">Pendente</option>
                                <option value="enviado">Enviado</option>
                                <option value="aprovado">Aprovado</option>
                                <option value="rejeitado">Rejeitado</option>
                                <option value="cancelado">Cancelado</option>
                            </select>

                            <hr />
                            <div className="d-flex justify-content-between">
                                <strong>Itens</strong>
                                <button type="button" className="btn btn-sm btn-secondary" onClick={adicionarItem}>+ Item</button>
                            </div>
                            {itens.map((item, index) => (
                                <div key={index} className="d-flex gap-2 align-items-center">
                                    <div className="flex-fill">
                                        <small className="text-muted">Produto ID</small>
                                        <input className="form-control" type="number"
                                            value={item.produtoId}
                                            onChange={e => atualizarItem(index, 'produtoId', Number(e.target.value))} />
                                    </div>
                                    <div className="flex-fill">
                                        <small className="text-muted">Quantidade</small>
                                        <input className="form-control" type="number"
                                            value={item.quantidade}
                                            onChange={e => atualizarItem(index, 'quantidade', Number(e.target.value))} />
                                    </div>
                                    <div className="flex-fill">
                                        <small className="text-muted">Preço Unit.</small>
                                        <input className="form-control" type="number" step="0.01"
                                            value={item.precoUnitario}
                                            onChange={e => atualizarItem(index, 'precoUnitario', Number(e.target.value))} />
                                    </div>
                                    <button type="button" className="btn btn-sm btn-danger mt-3" onClick={() => removerItem(index)}>X</button>
                                </div>
                            ))}
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