import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product-images',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-product-images.component.html',
  styleUrls: ['./create-product-images.component.scss'],
})
export class CreateProductImagesComponent {
  listOfFiles: File[] = [];
  listOfImages: string[] = [];

  constructor() {}

  async onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i) as File;
      if (file.type.includes('image')) {
        const base64String = await this.fileToBase64(file);
        this.listOfFiles.push(file);
        this.listOfImages.push(base64String);
      }
    }
  }

  getImageFromBase64String(base64String: string): string {
    return `${base64String}`;
  }

  fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  fileToBlob(file: File): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(new Blob([reader.result as ArrayBuffer], { type: file.type }));
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

  getMegabitsFromBytes(bytes: number): string {
    const megabits = bytes / 1024;
    return `${megabits.toFixed(2)} MB`;
  }

}
