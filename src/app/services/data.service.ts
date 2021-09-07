import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  /**
   * this just grab categories from the api
   * @returns categories
   */
  getCategory(): Observable<any> {
    return this.http.get<any>(
      'http://apolis-grocery.herokuapp.com/api/category'
    );
  }

  /**
   * when you get category by id from api,
   * id number has to be passed into the end of the link
   * @param catId
   */
  getSubCatById(catId: number) {
    return this.http.get(
      'http://apolis-grocery.herokuapp.com/api/subcategory/' + catId
    );
  }

  getProductsByCatId(catId: number) {
    return this.http.get(
      'http://apolis-grocery.herokuapp.com/api/products/cat/' + catId
    );
  }

  getProductsBySubId(subId: number) {
    return this.http.get(
      'http://apolis-grocery.herokuapp.com/api/products/sub/' + subId
    );
  }
}
