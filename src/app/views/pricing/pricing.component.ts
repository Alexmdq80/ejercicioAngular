import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FeatureService } from '../../core/services/feature.service';
import { Subscription } from 'rxjs';
import { SubmitButtonComponent } from '../../core/submit-button/submit-button.component';
import { Feature } from '../../core/model/feature.model';


@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule,
            ReactiveFormsModule,
            SubmitButtonComponent,
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})

export class PricingComponent implements OnInit, OnDestroy {
  
  features?: Feature[];

  // feature = new FormControl('');
  form_group = new FormGroup({
    feature: new FormControl('', Validators.required),
    cantidad: new FormControl('', [Validators.required, Validators.min(1)]),
  });
 
  subscription = new Subscription;

  constructor(private featureService: FeatureService) {};

  ngOnInit() {

     
    this.subscription.add(this.featureService.getFeatures().subscribe({
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

  get cantidad() {
    return this.form_group.get('cantidad');
  }

  get feature() {
    return this.form_group.get('feature');
  }
 
  comprarFeature() {
    if (this.form_group.valid) {
      console.log(this.form_group.value);
    } else {
      console.log('Formulario no válido.')
    }
  }  

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}