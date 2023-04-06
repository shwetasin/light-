import { ChangeDetectionStrategy, Component } from '@angular/core';
import { off } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  images:HTMLImageElement | undefined
  event:any
  currentimage = undefined;
  isChecked=false;
  constructor() {}
handleChange(event:any) {
    if(event.target.checked){
      this.isChecked=true
    }else{
      this.isChecked=false
    }
   console.log( event.target.checked)
  }
}

  
