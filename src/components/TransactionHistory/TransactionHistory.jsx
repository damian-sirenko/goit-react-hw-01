import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <div className={css.tableWrapper}>
      <table className={css.table}>
        <thead className={css.head}>
          <tr className={css.headRow}>
            <th className={css.headType}>Type</th>
            <th className={css.headAmount}>Amount</th>
            <th className={css.headCurrency}>Currency</th>
          </tr>
        </thead>

        <tbody className={css.tableBody}>
          {items.map(({ id, type, amount, currency }) => (
            <tr className={css.bodyRow} key={id}>
              <td className={css.typeCell}>{type}</td>
              <td className={css.amountCell}>{amount}</td>
              <td className={css.currencyCell}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
