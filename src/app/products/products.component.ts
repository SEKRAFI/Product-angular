import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

selectedImages: string[] = []; // Tableau pour les images affichées quand un lien est sélectionné
  selectedProduct: string = '';  // Variable pour stocker le titre du produit sélectionné
  linksAndImages: any[] = []; // Tableau qui contiendra les produits et leurs images

  constructor(private http: HttpClient) {}

  // Fonction de chargement des données à partir du fichier JSON
  ngOnInit(): void {
    this.loadProducts();
  }

  // Chargement des produits depuis le fichier JSON
  loadProducts(): void {
    this.http.get<any>('assets/products.json').subscribe(data => {
      this.linksAndImages = data.produits;
    }, error => {
      console.error('Erreur lors du chargement des produits:', error);
    });
  }

  // Fonction appelée lorsqu'un lien est cliqué pour afficher les images
  displayImages(link: string): void {
    const selectedLink = this.linksAndImages.find(l => l.title === link);
    if (selectedLink) {
      this.selectedProduct = selectedLink.title; // Met à jour le titre du produit sélectionné
      this.selectedImages = selectedLink.images; // Met à jour les images du produit sélectionné
    }
  }
}

