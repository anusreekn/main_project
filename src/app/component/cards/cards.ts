import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Card  implements OnInit {
  cards: any[] = [];
  constructor(
    private api_service:ApiService,
   private cdr:ChangeDetectorRef,
    private router:Router
   
  ){}
  ngOnInit(){
  this.api_service.getFakeStoreItems().subscribe((data:any) =>{
    this.cards = data;
    this.cdr.detectChanges(); 
  })
}
    viewProductDetail(product: any) {
    this.router.navigate(['/product', product.id], { state: { product } });
  }
  
}
