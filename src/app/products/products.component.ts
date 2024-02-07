import { Component } from '@angular/core';
import { products } from '../product.model';
import { TableComponent } from '../table/table.component';
import { CurrencyPipe } from '../currency.pipe';
import { AsyncPipe, NgFor } from '@angular/common';
import { LineDirective, ProductDirective } from '../app.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [TableComponent, CurrencyPipe, AsyncPipe, NgFor, ProductDirective, LineDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
products = products;
  displayedColumns = ['name', 'priceA', 'priceB', 'priceC'];  
}
