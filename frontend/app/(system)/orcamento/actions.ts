'use server'

import { apiServerFetch } from "@/lib/api-server"
import { Orcamento } from "@/types/orcamentos"

export async function getOrcamentos() {

    const response = await apiServerFetch('/orcamentos')
    return response.json()
}
export async function getOrcamento(id: number | undefined | null) {
    const response = await apiServerFetch(`/orcamentos/${id}`)
    return response.json()
}

export async function createOrcamento(orcamento: Orcamento) {
    const response = await apiServerFetch('/orcamentos', {
        method: 'POST',
        body: JSON.stringify(orcamento),
    })
    return response.json()
}

export async function updateOrcamento(id: number | undefined | null, orcamento: Orcamento) {
    const { id: _, ...dadosSemId } = orcamento
    const response = await apiServerFetch(`/orcamentos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(dadosSemId),
    })
    return response.json()
}

export async function deleteOrcamento(id: number | undefined | null) {
    const response = await apiServerFetch(`/orcamentos/${id}`, {
        method: 'DELETE',
    })
    return response.json()
}