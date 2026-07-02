'use client'
import { useState } from 'react'
import { Cliente } from '@/types/clientes'
import AdicionarEditarClientes from './AdicionarEditarClientes'
import { createCliente, updateCliente, deleteCliente } from '@/app/(system)/cliente/actions'
import { useRouter } from 'next/navigation'
import { notify } from '../Notify'


interface Props {
    clientes: Cliente[]
}

export default function ListaClientes({ clientes }: Props) {
    const [modalAberto, setModalAberto] = useState(false)
    const [clienteSelecionado, setClienteSelecionado] = useState<Cliente | null>(null)
    const router = useRouter()

    function abrirParaCriar() {
        setClienteSelecionado(null)
        setModalAberto(true)
    }

    function abrirParaEditar(cliente: Cliente) {
        setClienteSelecionado(cliente)
        setModalAberto(true)
    }

    function fecharModal() {
        setModalAberto(false)
        setClienteSelecionado(null)
    }

    async function handleSalvar(form: Cliente) {
        if (clienteSelecionado?.id) {
            const result = await updateCliente(clienteSelecionado.id, form)
            notify('Cliente atualizado com sucesso!', 'success')
        } else {
            const result = await createCliente(form)
            notify('Cliente criado com sucesso!', 'success')
        }
        router.refresh()
    }

    async function handleExcluir(id: number) {
        if (confirm('Deseja excluir este cliente?')) {
            await deleteCliente(id)
            notify('Cliente excluído com sucesso!', 'success')
        }
        router.refresh()
    }

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1>Clientes</h1>
                <button className="btn btn-primary" onClick={abrirParaCriar}>Adicionar +</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th><th>Documento</th><th>Nome</th><th>Email</th><th>Telefone</th><th>Observações</th><th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.documento}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.telefone}</td>
                            <td>{cliente.observacoes}</td>
                            <td>
                                <button className="btn btn-sm btn-warning me-2" onClick={() => abrirParaEditar(cliente)}>Editar</button>
                                <button className="btn btn-sm btn-danger" onClick={() => handleExcluir(cliente.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {modalAberto && (
                <AdicionarEditarClientes
                    cliente={clienteSelecionado ?? undefined}
                    onClose={fecharModal}
                    onSalvar={handleSalvar}
                />
            )}
        </div>
    )
}