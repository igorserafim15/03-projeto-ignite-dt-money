export interface Transaction {
  id: string
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}
