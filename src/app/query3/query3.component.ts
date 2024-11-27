import { Component } from '@angular/core';
import { QueryDetailComponent } from '../shared/query-detail/query-detail.component';

@Component({
  selector: 'app-query3',
  standalone: true,
  imports: [QueryDetailComponent],
  templateUrl: './query3.component.html',
  styleUrl: './query3.component.css'
})
export class Query3Component {
  title = 'Query 3: Active User Schedules';
  question = 'Write a query for monthly repayment schedule and next due date for Active users.';
  sqlQuery = `
    SELECT 
        c.name as client_name,
        hc.contract_id,
        hc.item,
        hc.installment_amount,
        hc.installment_count,
        DATE_ADD(
            hc.start_date, 
            INTERVAL (
                SELECT COUNT(*) + 1
                FROM Repayments r2 
                WHERE r2.contract_id = hc.contract_id
                AND r2.payment_date <= CURRENT_DATE()
            ) MONTH
        ) as next_due_date
    FROM Clients c
    JOIN HirePurchaseContracts hc ON c.client_id = hc.client_id
    WHERE hc.status = 'Active'
    ORDER BY next_due_date;
  `;
  tableHeaders = ['client_name', 'contract_id', 'item', 'installment_amount', 'installment_count', 'next_due_date'];
  tableData = [
    ['Alice Brown', 101, 'Motorbike', this.formatAmount(100.000), 15, '2024-04-01'],
    ['Bob Green', 102, 'Refrigerator', this.formatAmount(80.000), 10, '2024-06-01']
  ];
  thoughtProcess = [
    'JOIN two tables: Clients and HirePurchaseContracts',
    'Use a subquery to count repayments made so far',
    'Calculate next_due_date by adding the count of repayments + 1 to the start_date',
    'Filter only Active status contracts',
    'ORDER BY next_due_date to show earliest due dates first',
    'Use "AND r2.payment_date <= CURRENT_DATE()" in the subquery to ensure that we only count repayments that have already been made (up to today)',
    'This condition excludes repayments that are scheduled in the future, ensuring the next_due_date is based only on payments made so far'
  ];
  formatAmount(amount: number): string {
    return amount.toFixed(3);
  }
}
