import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/contact.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submitted = false;
  isLoading: boolean = false;

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  });

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', Validators.required],
        message: ['', Validators.required],

      }
    );
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private contactService: ContactService
  ) {}


  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.contactService.addContact(this.contactForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.isLoading = false;
        this.contactForm.reset()
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.isLoading = false;
        alert('Error occurred while submiting your message');

      },
    });
  }

  }




