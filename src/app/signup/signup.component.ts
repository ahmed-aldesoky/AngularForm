import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../enroll.service';
import {user} from '../user';
import {NgToastService} from 'ng-angular-popup';
import{Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private enrollService:EnrollService , private toast: NgToastService, private router:Router) { }
  userModel= new user('', '', '', '')

  ngOnInit(): void {
    }


  submitData(){

    console.log(this.userModel);    
      this.enrollService.enroll(this.userModel).subscribe(
        response=>
        {
          console.log("success");
        this.toast.success({detail:"success Message", summary:"form are submitted", duration:5000});
        this.router.navigate(['/signup2'])
          
        },
        error=>
        {
          console.log(error);
        this.toast.error({detail:"faild Message", summary:"form aren't submitted", duration:5000});

          
        }
      )

    }
  }


