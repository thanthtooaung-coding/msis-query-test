import { Component } from '@angular/core';
import { QueryDetailComponent } from '../shared/query-detail/query-detail.component';

@Component({
  selector: 'app-query1',
  standalone: true,
  imports: [QueryDetailComponent],
  templateUrl: './query1.component.html',
  styleUrl: './query1.component.css'
})
export class Query1Component {
  title = 'Query 1: Monthly Repayments Summary';
  question = 'Write a query for summary of repayments by month for year-end report.';
  sqlQuery = `
    SELECT 
      MONTH(payment_date) AS payment_month,
      YEAR(payment_date) AS payment_year,
      SUM(amount_paid) AS total_repayments
    FROM 
      repayments
    GROUP BY 
      payment_month,
      payment_year
    ORDER BY 
      payment_year,
      payment_month;
  `;
  tableHeaders = ['payment_month', 'payment_year', 'total_repayments'];
  tableData = [
    [1, 2024, this.formatAmount(100.000)],
    [2, 2024, this.formatAmount(100.000)],
    [3, 2024, this.formatAmount(80.000)],
    [4, 2024, this.formatAmount(80.000)],
    [6, 2024, this.formatAmount(100.000)]
  ];
  thoughtProcess = [
    'We need to extract month and year from payment_date using MONTH() and YEAR() functions',
    'SUM() is used to aggregate the amount_paid for each month',
    'GROUP BY both month and year to get monthly totals',
    'ORDER BY year and month to get chronological order',
    'The result shows monthly repayment totals for the year 2024'
  ];

  formatAmount(amount: number): string {
    return amount.toFixed(3);
  }
}
