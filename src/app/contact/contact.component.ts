import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;



  @HostListener('input') oninput() {

    if (this.form.valid) {
      this.disabledSubmitButton = false;
    }
  }   



  constructor(private fb: FormBuilder) {
    this.createForm();
   } 

   createForm() {
    this.form = this.fb.group({  
       
      
       
       f_name: ['', Validators.required],
       
      
       email: ['', Validators.compose([Validators.required, Validators.email])],
       mob_no:['', Validators.compose([Validators.required, Validators.pattern("[0-9]{5,}")])],
       subject:['', Validators.required],
       message:['', Validators.required]
       
    });
  }
    

  

public sendEmail(e: Event) {
  e.preventDefault();
  emailjs.sendForm('service_opkv90l', 'template_msemt5e', e.target as HTMLFormElement, 'user_RRhxBwzCWdgAeZ2JDDqN9')
    .then((result: EmailJSResponseStatus) => {
      alert("This form has been submitted.");
      this.form.reset();
      this.disabledSubmitButton = true;
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
}

ngOnInit(): void {
}

}

