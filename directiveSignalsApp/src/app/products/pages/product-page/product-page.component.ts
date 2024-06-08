import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'product-page',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.css'
})
export class ProductPageComponent { }
