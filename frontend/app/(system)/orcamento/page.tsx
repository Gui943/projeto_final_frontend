import ListarOrcamentos from "@/components/Orcamentos/ListarOrcamentos";
import { Orcamento } from "@/types/orcamentos";
import { getOrcamentos } from "./actions";
import { getClientes } from '@/app/(system)/cliente/actions'
import { Cliente } from '@/types/clientes'


export default async function OrcamentoPage() {
    const orcamentos: Orcamento[] = await getOrcamentos()
    const clientes: Cliente[] = await getClientes()
    return (
        <ListarOrcamentos orcamentos={orcamentos} clientes={clientes} />
    )
}