import { Component } from '@angular/core';
import { QueryDetailComponent } from '../shared/query-detail/query-detail.component';

@Component({
  selector: 'app-query2',
  standalone: true,
  imports: [QueryDetailComponent],
  templateUrl: './query2.component.html',
  styleUrl: './query2.component.css'
})
export class Query2Component {
  title = 'Query 2: Item Repayment Count';
  question = 'Write a query for repayment count by item and show the first 3 records.';
  sqlQuery = `
    SELECT 
      hc.item,
      COUNT(r.contract_id) AS repayment_count
    FROM 
      repayments r
      JOIN HirePurchaseContracts hc ON r.contract_id = hc.contract_id
    GROUP BY 
      hc.item
    ORDER BY 
      repayment_count DESC
    LIMIT 3;
  `;
  tableHeaders = ['item', 'repayment_count'];
  tableData = [
    ['Motorbike', 2],
    ['Refrigeratore', 2],
    ['Laptop', 1]
  ];
  thoughtProcess = [
    'JOIN repayments with HirePurchaseContracts to get item information',
    'COUNT contract_id to get number of repayments per item',
    'GROUP BY item to aggregate counts',
    'ORDER BY count DESC to get highest counts first',
    'LIMIT 3 to show only top 3 items'
  ];
}
