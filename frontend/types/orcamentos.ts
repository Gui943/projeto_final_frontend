export type ItemOrcamento = {
  produtoId: number
  quantidade: number
  precoUnitario: number
}

export type Orcamento = {
  id?: number
  clienteId?: number
  valorDesconto?: number
  validoAte?: string
  observacoes?: string
  situacao?: 'pendente' | 'enviado' | 'aprovado' | 'rejeitado' | 'cancelado'
  itens?: ItemOrcamento[]
  subtotal?: number
  total?: number
}