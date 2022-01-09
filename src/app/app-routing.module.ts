import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';

const routes: Routes = [
  { path:'',redirectTo:'currencies', pathMatch: 'full' },
  { path: 'currencies', component: CurrencyListComponent },
  { path: 'currency/:id', component: CurrencyDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
