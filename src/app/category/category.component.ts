import { Component } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  kategori:Category[]=[
    {id:1, name:"Macera"},
    {id:1, name:"Romantik"},
    {id:1, name:"Bilim Kurgu"},
    {id:1, name:"Komedi"},


  ]
  
}
