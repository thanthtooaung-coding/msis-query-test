import { Routes } from '@angular/router';
import { Query1Component } from './query1/query1.component';
import { HomeComponent } from './home/home.component';
import { Query2Component } from './query2/query2.component';
import { Query3Component } from './query3/query3.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'query/1', component: Query1Component },
    { path: 'query/2', component: Query2Component },
    { path: 'query/3', component: Query3Component },
];
