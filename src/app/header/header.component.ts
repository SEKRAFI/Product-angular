import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';  // Importation du Router pour la navigation
import { HomeComponent } from '../home/home.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProductsComponent } from '../products/products.component';
import { SoftwareComponent } from '../software/software.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,HomeComponent,SkillsComponent,ProductsComponent,SoftwareComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  constructor(private router: Router) {}

  // Fonction pour naviguer vers la liste des produits
  navigateToProducts(): void {
    this.router.navigate(['/products']);  // Assurez-vous d'avoir cette route configurée
  }

  // Fonction pour naviguer vers la section Hard Skills
  navigateToSkills(): void {
    this.router.navigate(['/skills']);
  }

  // Fonction pour naviguer vers la section Logiciels
  navigateToSoftware(): void {
    this.router.navigate(['/software']);
  }
}

