'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Orcamento } from '@/types/orcamentos'
import { createOrcamento} from '@/app/(system)/orcamento/actions'
import AdicionarEditarOrcamentos from './AdicionarOrcamentos'
import { notify } from '../Notify'



interface Props {
    orcamentos: Orcamento[]
}

export default function ListaOrcamentos({ orcamentos }: Props) {
    const [modalAberto, setModalAberto] = useState(false)
    const [orcamentoSelecionado, setOrcamentoSelecionado] = useState<Orcamento | null>(null)
    const router = useRouter()

    function abrirParaCriar() {
        setOrcamentoSelecionado(null)
        setModalAberto(true)
    }

    function fecharModal() {
        setModalAberto(false)
        setOrcamentoSelecionado(null)
    }

    async function handleSalvar(form: Orcamento) {
        const result = await createOrcamento(form)
        notify('Orcamento criado com sucesso!', 'success')
        router.refresh()
    }
    
    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1>Orcamentos</h1>
                <button className="btn btn-primary" onClick={abrirParaCriar}>Adicionar +</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th><th>ClienteId</th><th>Situação</th><th>Total</th><th>Valido Até</th><th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {orcamentos.map((orcamento) => (
                        <tr key={orcamento.id}>
                            <td>{orcamento.id}</td>
                            <td>{orcamento.clienteId}</td>
                            <td>{orcamento.situacao}</td>
                            <td>{orcamento.total}</td>
                            <td>{orcamento.validoAte}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {modalAberto && (
                <AdicionarEditarOrcamentos
                    orcamento={orcamentoSelecionado ?? undefined}
                    onClose={fecharModal}
                    onSalvar={handleSalvar}
                />
            )}
        </div>
    )
}