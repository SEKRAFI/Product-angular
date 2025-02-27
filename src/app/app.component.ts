import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageDisplayComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'site-images';
}
