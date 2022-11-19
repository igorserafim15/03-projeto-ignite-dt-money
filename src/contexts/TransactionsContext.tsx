import React, { ReactNode } from 'react'
import { Transaction } from '../@types/TransactionType'

interface TransactionContextType {
  transactions: Transaction[]
}
interface TransactionProps {
  children: ReactNode
}

export const TransactionContext = React.createContext(
  {} as TransactionContextType,
)

export const TransactionsProvider = ({ children }: TransactionProps) => {
  const [transactions, setTransaction] = React.useState<Transaction[]>([])

  React.useEffect(() => {
    async function loadTransactions() {
      const response = await fetch('http://localhost:3333/transactions')
      const data = await response.json()
      setTransaction(data)
    }
    loadTransactions()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
