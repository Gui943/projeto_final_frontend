import { getProdutos } from './actions'
import ListaProdutos from '@/components/Produtos/ListaProdutos'
import { Produto } from '@/types/produtos'

export default async function ProdutoPage() {
  const produtos: Produto[] = await getProdutos()
  return (
    <ListaProdutos produtos={produtos} />
  )
}