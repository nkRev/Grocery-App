import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public categories: any
  public imgLink= 'http://rjtmobile.com/grocery/images/'

  constructor(private ds: DataService, private router: Router) { }

  ngOnInit(): void {
    this.ds.getCategory().subscribe(data=>{
      this.categories = data.data //data obj has data stored as data
    })
  }

  onCategorySelected(category: any){
    this.router.navigate(['/products', category.catName, category.catId])
  }

}
