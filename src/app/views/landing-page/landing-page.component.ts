import { Component, OnDestroy, OnInit } from '@angular/core';
import { PresentationComponent } from "./presentation/presentation.component";
import { IconCardComponent } from "../../core/icon-card/icon-card.component";
import { CommonModule } from '@angular/common';
import { Feature } from '../../core/model/feature.model';
import { FeatureService } from '../../core/services/feature.service';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
      PresentationComponent, 
      IconCardComponent,
      CommonModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent implements OnInit, OnDestroy {
  
  features?: Feature[];

  subscription = new Subscription;

  constructor(private featureService: FeatureService) {}

  ngOnInit() {
    // this.features = this.featureService.features;
    // this.subscription.add(this.featureService.getFeatures().subscribe({
    this.subscription.add(this.featureService.getFeatures().pipe(
        map(res => { 
         res[0].title = "Hard to use.";
         return res;
      })
      ).subscribe({
        next: res => {
          console.log(res);
          this.features = res;
        },
        error: error => {
          console.warn("Ha ocurrido un error con código: ", error)
        },
        complete: () => {
         console.log("Emisión terminada.");
        }       
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // YA NO ES NECESARIO, PORQUE SE ESTÁ RECIBIENDO A TRAVÉS DEL SERVICIO
  //  = [
  //   {
  //     icon: 'add_box',
  //     title: 'Easy to Use',
  //     description: 'Editing with customizing Essential Landing is easy and fast'
  //   },
  //   {
  //     icon: 'star_half',
  //     title: '100% Responsive',
  //     description: 'Editing with customizing Essential Landing is easy and fast'
  //   },
  //   {
  //     icon: 'system_update_alt',
  //     title: '50+ New Pages',
  //     description: 'Editing with customizing Essential Landing is easy and fast'
  //   }
  // ]

}
