import s from "./style.module.css";
import { Logo } from "./components/Logo/Logo";
import { ExpenseInput } from "./components/ExpenseInput/ExpenseInput";
import { IncomeInput } from "./components/IncomeInput/IncomeInput";
import { ExpenseList } from "./components/ExpenseList/ExpenseList";
import { ExpenseTotal } from "./components/ExpenseTotal/ExpenseTotal";

export function App() {
  return (
    <div className={s.main_container}>
      <div className={`row ${s.header}`}>
        <div className={`col-3`}>
          <Logo title="ISpent" subtitle="Track your expenses !" />
        </div>
        <div className={`col-9 ${s.income_input}`}>
          <IncomeInput />
        </div>
      </div>
      <div className={`row ${s.workspace}`}>
        <div className={`col-12  ${s.expense_input}`}>
          <ExpenseInput />
        </div>
        <div className={`col-11 col-md-6 col-lg-4 ${s.expense_list}`}>
          <ExpenseList />
          <div className={`col-12 ${s.expense_total}`}>
            <ExpenseTotal />
          </div>
        </div>
      </div>
    </div>
  );
}
