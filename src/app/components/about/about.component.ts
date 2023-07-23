import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  //variable that hold a number
  projectCount: number = 0;
  experienceCount: number = 0;

  projectCountStop: any = setInterval(() => {
    this.projectCount++;
    if(this.projectCount == 70){
      clearInterval(this.projectCountStop)
    }
  }, 100)

  experienceCountStop: any = setInterval(() => {
    this.experienceCount++;
    if(this.experienceCount == 20 ){
      clearInterval(this.experienceCountStop)
    }
  }, 100)

}
