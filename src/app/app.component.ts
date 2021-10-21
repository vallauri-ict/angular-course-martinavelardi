import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ! -> variabile non può essere nulla o undefined
  @ViewChild("txtName") txtName!: ElementRef;

  title = 'Martina Velardi 5B';

  studentRepository = [
    { name: 'Ettore Esposito', hobby: 'Karate', gender: 'M', isPro: false },
    { name: 'Luca Pellissero', hobby: 'paddle', gender: 'M', isPro: false },
    { name: 'Luca Dellavalle', hobby: 'volley', gender: 'M', isPro: true },
    { name: 'Bianca Teleman', hobby: 'Karate', gender: 'F', isPro: false },
    { name: 'Giada Valinotto', hobby: 'paddle', gender: 'F', isPro: false },
    { name: 'Samuele De Toffol', hobby: 'volley', gender: 'M', isPro: true },
    { name: 'Gabriele Leone', hobby: 'Karate', gender: 'M', isPro: false },
    { name: 'Martina Velardi', hobby: 'paddle', gender: 'F', isPro: true },
    { name: 'Alberto Savoldelli', hobby: 'volley', gender: 'M', isPro: false },
  ]

  hobbies = ['Karate', 'Paddle', 'Volley', 'Tennis', 'Soccer'];
  studentList: any[] = [];
  studentName: string = "";
  studentGender: string = "F";
  studentHobby: string = "";

  constructor() {
    for (let i = 0; i < 8; i++) {
      let num = Math.floor(Math.random() * this.studentRepository.length)
      let tempStudent = this.studentRepository[num];
      this.studentList.push(tempStudent);
      this.studentRepository.splice(num, 1);
    }
  }
  onAddStudent() {
    let newStudent = { name: this.studentName, hobby: this.studentHobby, gender: this.studentGender, isPro: false }
    this.studentList.push(newStudent);
    this.studentName = "";
    this.txtName.nativeElement.focus()
  }
}
