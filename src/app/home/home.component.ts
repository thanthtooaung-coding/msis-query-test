import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  queries = [
      { id: 1, title: 'Query 1: Monthly Repayments Summary', description: 'Year-end report showing repayments by month' },
      { id: 2, title: 'Query 2: Item Repayment Count', description: 'Top 3 items by repayment count' },
      { id: 3, title: 'Query 3: Active User Schedules', description: 'Monthly repayment schedule for active users' }
  ];
}
