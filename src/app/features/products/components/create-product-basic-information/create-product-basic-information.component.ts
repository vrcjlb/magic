import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-create-product-basic-information',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-product-basic-information.component.html',
  styleUrls: ['./create-product-basic-information.component.scss'],
})
export class CreateProductBasicInformationComponent {
  form = new FormBuilder().group({
    name: new FormControl(''),
    category: new FormControl(''),
    brand: new FormControl(''),
    tags: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl(''),
  });
  saveForm() {}
  cleanForm() {}
}
