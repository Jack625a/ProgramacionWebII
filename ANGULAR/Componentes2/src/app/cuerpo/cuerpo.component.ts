import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {
 numeroSlide:number=0;
 slides:HTMLElement[]=[];

 movimiento(){
  this.slides=Array.from(document.querySelectorAll('.slide'));
  this.mostrarSlide(this.numeroSlide);
 }

 mostrarSlide(index:number){
  this.slides.forEach((slide,i)=>{
    slide.classList.toggle('active',i === index);
  });
 }
 anteriorSlide(){
  this.numeroSlide=(this.numeroSlide>0) ? this.numeroSlide-1: this.slides.length-1;
  this.mostrarSlide(this.numeroSlide);
 }
 siguienteSlide(){
  this.numeroSlide=(this.numeroSlide< this.slides.length-1)? this.numeroSlide+1:0;
  this.mostrarSlide(this.numeroSlide);
 }

}
