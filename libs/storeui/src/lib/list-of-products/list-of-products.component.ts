import { Component, OnInit } from '@angular/core';
import { RestService } from '@fake-store/data-access';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '@fake-store/utlity';
import { take } from 'rxjs';
import { config } from 'process';

@Component({
  selector: 'fake-store-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css'],
})
export class ListOfProductsComponent implements OnInit {
  productos: Product[] = [];
  durationInSeconds = 1;

  constructor(
    private RestService: RestService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.getProducts();
    this._snackBar.open('Message archived',"OK",{
      verticalPosition:'bottom',
      horizontalPosition:'left',
      duration: 2000
    });
  }
  public getProducts() {
    this.RestService.searchProducts('products')
      .pipe(take(1))
      .subscribe((products: any) => {
        //console.log(products);
        this.productos = [...this.productos, ...products];
      });
  }
  openSnackBar(message: string) {
    this._snackBar.open(`${message} confirmmed`, 'OK', {
      verticalPosition: 'top',
      horizontalPosition: 'left',
      panelClass: ['popUp'],
    });
  }
}
