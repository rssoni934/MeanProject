import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ContactserviceService } from 'src/app/contactservice.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private contactservice:ContactserviceService) { }

  ngOnInit(): void {
  }

  myReactiveForm=new FormGroup({
    fullname:new FormControl(),
    email:new FormControl(),
    subject:new FormControl,
    message:new FormControl
    });

  fetchdata(val:any){
    console.log(val);
    this.contactservice.messageservice(val).subscribe(res =>{
      console.log("successfully register");
    })
  }

}
