import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { People } from './people';

@Injectable()
export class BasicService {
  private _peopleUrl = "http://localhost:3000/people";
  constructor( private _http:Http) { 
    /*this._http = _http //automatically added since we are declared access specifier in the argument */
  }
  getPeople():Observable<Response>{
     return this._http.get(this._peopleUrl);
  }
  addOrEditPeople(isEdit, data):Observable<Response>{
      if(isEdit){
        let url = this._peopleUrl+"/"+data.id
        return this._http.put(url,data);
      }
      return this._http.post(this._peopleUrl,data); 
  }
  deletePeople(data):Observable<Response>{
    return this._http.delete(this._peopleUrl+"/"+data.id,data);
  }
  getValue(){
    return "real value";
  }

}
