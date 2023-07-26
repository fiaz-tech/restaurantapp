import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/contact.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  submitted: boolean = false;
  isLoading: boolean = false;

  emailForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private contactService: ContactService
  ) {}


  ngOnInit(): void {
    this.emailForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
      }
    );
  }


  onSubmit() {
    this.submitted = true;

    if (this.emailForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.contactService.addEmail(this.emailForm.value).subscribe({
      next: (res) => {
        this.emailForm.reset()
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.isLoading = false;
        alert('Error occurred while submiting your email');
      },
    });
  }




}
