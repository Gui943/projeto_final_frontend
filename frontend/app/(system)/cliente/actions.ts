'use server'

import { apiServerFetch } from "@/lib/api-server"
import { Cliente } from "@/types/clientes"

export async function getClientes() {

    const response = await apiServerFetch('/clientes')
    return response.json()
}
export async function getCliente(id: number | undefined | null) {
    const response = await apiServerFetch(`/clientes/${id}`)
    return response.json()
}

export async function createCliente(cliente: Cliente) {
    const response = await apiServerFetch('/clientes', {
        method: 'POST',
        body: JSON.stringify(cliente),
    })
    return response.json()
}

export async function updateCliente(id: number | undefined | null, cliente: Cliente) {
    const { id: _, ...dadosSemId } = cliente
    const response = await apiServerFetch(`/clientes/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(dadosSemId),
    })
    return response.json()
}

export async function deleteCliente(id: number | undefined | null) {
    const response = await apiServerFetch(`/clientes/${id}`, {
        method: 'DELETE',
    })
    return response.json()
}