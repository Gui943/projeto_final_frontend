import ListarOrcamentos from "@/components/Orcamentos/ListarOrcamentos";
import { Orcamento } from "@/types/orcamentos";
import { getOrcamentos } from "./actions";

export default async function OrcamentoPage() {

    const orcamentos: Orcamento[] = await getOrcamentos()
    return (
        <ListarOrcamentos orcamentos={orcamentos} />
    )
}