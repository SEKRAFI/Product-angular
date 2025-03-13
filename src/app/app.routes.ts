import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { ProductsComponent } from './products/products.component';
import { SkillsComponent } from './skills/skills.component';
import { SoftwareComponent } from './software/software.component';
import { ModeComponent } from './mode/mode.component';
import { SoftskillsComponent } from './softskills/softskills.component';


  export const routes: Routes = [
    { path: '', component: HomeComponent },  // Page d'accueil
    { path: 'softskills', component:SoftskillsComponent},
    { path: 'products', component: ProductsComponent },
    { path: 'hardskills', component: SkillsComponent },
    { path: 'software', component: SoftwareComponent },
    { path: 'produit', component: ImageDisplayComponent },
    { path: 'mode', component: ModeComponent },
  ];