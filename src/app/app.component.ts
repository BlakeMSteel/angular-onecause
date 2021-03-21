import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loginForm = this.formBuilder.group({ username: '', password: '' });

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  onSubmit(): void {
    var hours = new Date().getUTCHours().toString().padStart(2, '0');
    var minutes = new Date().getUTCMinutes().toString().padStart(2, '0');
    this.http
      .post('http://localhost:8000/', this.loginForm.value, {
        headers: {
          Authorization: hours + minutes,
        },
      })
      .subscribe(
        () => {
          window.location.href = 'http://onecause.com';
        },
        (err) => alert('There was an error: ' + err.message),
        () => console.log('finished')
      );
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }
}
