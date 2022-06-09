import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store'
import { login } from 'src/app/store/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup<any> = new FormGroup({});

  constructor(
  	private formBuilder: FormBuilder,
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.initForm()
  }
  
  initForm(){
    this.loginForm = this.formBuilder.group({
      email: ['', [
      	Validators.required,
      	Validators.pattern("^[a-zA-Z0-9._-]+([.][a-zA-Z0-9._-]+)*[@][a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)*[.][a-zA-Z]{2,5}[ ]?$")
      ]],
      password: ['', [
      	Validators.required,
      	Validators.pattern("^([a-zA-Z0-9]{6,16})$")
      ]]
    });
  }

  async onSubmitForm(){
    try{
      if(this.loginForm.valid){
        this.store.dispatch(login({username:'planatest',password:this.loginForm.value.password}))
      }
    }catch(error){
      alert(error)
    }
  }

}
