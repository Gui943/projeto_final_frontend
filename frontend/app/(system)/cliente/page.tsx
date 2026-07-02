import { Cliente } from "@/types/clientes"
import { getClientes } from "./actions"
import ListaClientes from "@/components/Clientes/ListarClientes"

export default async function Clientepage(){
    const clientes: Cliente[] = await getClientes()
    return (
   
        <ListaClientes clientes={clientes} />
    )
}