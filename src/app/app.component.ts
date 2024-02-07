import { Component, Directive, Input, Self, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Product, products } from './product.model';
import { TableComponent } from './table/table.component';
import { CurrencyPipe } from './currency.pipe';
import { AsyncPipe, NgFor } from '@angular/common';
import { CurrencyService } from './currency.service';

interface ProductContext {
  $implicit: Product;
}

@Directive({
  selector: 'ng-template[product]',
  standalone: true
})
export class ProductDirective {
  static ngTemplateContextGuard(
    dir: ProductDirective,
    ctx: unknown,
  ): ctx is ProductContext {
    return true;
  }
}

@Directive({
  selector: '[line]',
  standalone: true,
  providers: [
    CurrencyService
  ]
})
export class LineDirective {
  @Self() currencyService = inject(CurrencyService);
  @Input('line') set currencyCode(code: string) {
    this.currencyService.setState({ code });
  }
}

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  providers: [],
  selector: 'app-root',
  template: `
    <ul>
      <li><a routerLink="products">Products</a></li>
      <li><a routerLink="roles">Roles</a></li>
    </ul>
    <router-outlet></router-outlet>
    
  `,
})
export class AppComponent {
  
}
