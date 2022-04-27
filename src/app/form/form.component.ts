import { Component,  OnInit,} from '@angular/core';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  randomCount() {
    return Math.random();
  }

  constructor(){ this.log(`constructor`); }
    ngOnInit() { this.log(`onInit`); }
 
    private log(msg: string) {
        console.log(msg);
    }
}
