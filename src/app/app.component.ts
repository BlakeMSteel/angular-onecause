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
    var now = new Date().getTime();
    this.http
      .post(
        'https://cors-anywhere.herokuapp.com/http://localhost:8000/auth',
        this.loginForm.value,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .subscribe(
        (data) => console.log(data),
        (err) => console.log(err),
        () => console.log('finished')
      );
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }
}
