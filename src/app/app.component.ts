; import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { BasicService } from './basic.service';
import { People } from './people';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f') form: any;
  people: People[] = [];
  userName: string;
  isEdit: boolean = false;
  editPeople: People;
  constructor(private _basicService: BasicService) { }
  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this._basicService.getPeople().subscribe(
      //will have three args
      //success functio  =>It executed when a new event occurs in the Observable.
      //error function => It executed when errors occur in the Observable strem.
      //complete function => It executed when Observable stream of events end.
      (response) => {
        this.people = response.json();
      },
      (err) => {
        console.log(err);
      }
    )
  }

  //Add or Update the people
  addOrEditPeople() {
    if (this.form.valid) {
      let pid = this.isEdit ? this.editPeople.id : this.people.length + 1;
      let data = {
        id: pid,
        name: this.userName
      }
      this._basicService.addOrEditPeople(this.isEdit, data).subscribe(
        (response) => {
          this.getPeople();
          this.isEdit = false;
          this.form.reset();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  //Edit btn event
  editBtn(people) {
    this.isEdit = true;
    this.editPeople = people;
    this.userName = this.editPeople.name;
  }

  //To delete the people
  deletePeople(people) {
    this._basicService.deletePeople(people).subscribe(
      (response) => {
        this.getPeople();
      },
      (err) => {
        console.log(err);
      }
    );
  }

}