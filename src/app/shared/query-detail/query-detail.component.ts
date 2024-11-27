import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-query-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './query-detail.component.html',
  styleUrl: './query-detail.component.css'
})
export class QueryDetailComponent {
  @Input() title!: string;
  @Input() question!: string;
  @Input() sqlQuery!: string;
  @Input() tableHeaders!: string[];
  @Input() tableData!: any[][];
  @Input() thoughtProcess!: string[];
}
