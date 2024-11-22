import { Injectable } from '@angular/core';
import { Feature } from '../model/feature.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  apiUrl = 'http://localhost:3000/feature';
  // features: Feature[] = [
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

  constructor(private httpClient: HttpClient) { }
  
    getFeatures(): Observable<Feature[]> {
      return this.httpClient.get<Feature[]>(this.apiUrl);
    }

    postFeatures(newFeature: Feature): Observable<{ message: string }> {
      return this.httpClient.post<{ message: string }>(this.apiUrl, newFeature);
    }

    putFeatures(updatedFeature: Feature): Observable<{ message: string }> {
      return this.httpClient.put<{ message: string }>(`${this.apiUrl}/${updatedFeature.id}`, updatedFeature);
    }
    // putFeatures(updatedFeature: Feature): Observable<string> {
    //   return this.httpClient.put<string>(`${this.apiUrl}/${updatedFeature.id}`, updatedFeature);
    // }

    
    deleteFeatures(featureId: number): Observable<{ message: string }> {
      return this.httpClient.delete<{ message: string }>(`${this.apiUrl}/${featureId}`);
    }

  // getFeatures(): Observable<Feature[]> {
  //   return new Observable((obs) => {
  //     setTimeout(() => {
  //       obs.next(this.features);
  //     }
  //     , 2000)
  //   })
  // }
}
