import { Component, OnInit } from '@angular/core';
import {personal} from '../personalInfo'


@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component implements OnInit {

  constructor() { }
  personalModel= new personal('', '', '')


  ngOnInit(): void {
  }

}
