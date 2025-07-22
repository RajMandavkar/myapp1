import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  imports: [FormsModule, CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  searchText: string = '';
  // selectedCategory: string = '';
  // maxPrice: number = 10000;

  products = [
    { name: 'Red T-Shirt', category: 'Clothing', price: 500 },
    { name: 'Blue Jeans', category: 'Clothing', price: 1500 },
    { name: 'Smartphone', category: 'Electronics', price: 12000 },
    { name: 'Headphones', category: 'Electronics', price: 3000 },
    { name: 'Wrist Watch', category: 'Accessories', price: 2500 }
  ];

  get filteredProducts() {
    return this.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(this.searchText.toLowerCase());
      // const matchesCategory = this.selectedCategory ? product.category === this.selectedCategory : true;
      // const matchesPrice = product.price <= this.maxPrice;
      return matchesSearch;
    });
  }

}
