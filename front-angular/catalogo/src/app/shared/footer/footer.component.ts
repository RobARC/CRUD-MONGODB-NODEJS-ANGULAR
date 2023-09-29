import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  anio: number = new Date().getFullYear();

  openFacebook(){
    window.open('https://www.facebook.com/', '_blank');
  }
  openInstagram(){
    window.open('https://www.instagram.com/', '_blank');
  }
  openTwitter(){
    window.open('https://www.twitter.com/', '_blank');
  }
  openYoutube(){
    window.open('https://www.youtube.com/', '_blank');
  }
}
