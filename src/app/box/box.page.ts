import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.page.html',
  styleUrls: ['./box.page.scss'],
})
export class BoxPage implements OnInit {

isChecked=false;

constructor() { }

  ngOnInit() {
  }
  handleChange(event:any) {
    if(event.target. checked){
      this.isChecked=true
    }else{
      this.isChecked=false
    }
   console.log( event.target.checked)
  }
}
