import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import React from 'react'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { priceFormatter } from '../../utils/formatter'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const { transactions } = React.useContext(TransactionContext)

  const initial = { income: 0, outcome: 0, total: 0 }
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') {
      acc.income += transaction.price
      acc.total += transaction.price
    }
    if (transaction.type === 'outcome') {
      acc.outcome += transaction.price
      acc.total -= transaction.price
    }

    return acc
  }, initial)

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
