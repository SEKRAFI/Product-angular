import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mode',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './mode.component.html',
  styleUrl: './mode.component.css'
})
export class ModeComponent {
  isFullScreenVisible: boolean = false;
  fullScreenImage: string = '';

  selectedImages: string[] = []; // Tableau pour les images affichées quand un lien est sélectionné
  selectedMode: string = '';  // Variable pour stocker le titre du produit sélectionné
  linksAndImages: any[] = []; // Tableau qui contiendra les produits et leurs images

  constructor(private http: HttpClient) {}

  // Fonction de chargement des données à partir du fichier JSON
  ngOnInit(): void {
    this.loadProducts();
  }

  // Chargement des produits depuis le fichier JSON
  loadProducts(): void {
    this.http.get<any>('assets/mode.json').subscribe(data => {
      this.linksAndImages = data.modes;
    }, error => {
      console.error('Erreur lors du chargement des modes:', error);
    });
  }

  // Fonction appelée lorsqu'un lien est cliqué pour afficher les images
  displayImages(link: string): void {
    const selectedLink = this.linksAndImages.find(l => l.title === link);
    if (selectedLink) {
      this.selectedMode = selectedLink.title; // Met à jour le titre du produit sélectionné
      this.selectedImages = selectedLink.images; // Met à jour les images du produit sélectionné
    }
  }

  // Méthode pour afficher l'image en plein écran
  openFullScreen(image: string) {
    this.fullScreenImage = image;
    this.isFullScreenVisible = true;
  }

  // Méthode pour fermer l'image en plein écran
  closeFullScreen() {
    this.isFullScreenVisible = false;
  }
}


