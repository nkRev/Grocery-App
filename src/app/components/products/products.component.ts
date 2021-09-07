import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public catId: any;
  public catName: any;
  public subId: number = 1;
  public subCat: any;
  public products: any;
  public imgLink = 'http://rjtmobile.com/grocery/images/';

  constructor(private ds: DataService, private route: ActivatedRoute) {
    this.catName = this.route.snapshot.paramMap.get('catName');
    //snapshot lets you get the value
    this.catId = this.route.snapshot.paramMap.get('catId');
  }

  /**
   * on init, go get products by category id
   * via DataService
   * and return me a promise
   */
  ngOnInit(): void {
    this.ds.getSubCatById(this.catId).subscribe((data) => (this.subCat = data));
    //subscribing lets you read the new value every time its changed
    this.ds.getProductsByCatId(this.catId).subscribe((data) => {
      this.products = data;
    });
  }
  /**
   * Go find me the products by sub category id
   * via DataService
   * and return a promise
   *
   * @param sc subcategory user selected
   */
  selectedSubCategory(sc: any) {
    this.ds.getProductsBySubId(sc.subId).subscribe(data => this.products = data);
  }
}
