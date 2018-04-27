import { TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { People } from './people';

import { BasicService } from './basic.service';


describe('BasicService', () => {
  let service: BasicService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, HttpClientTestingModule],
      providers: [BasicService]
    });
    service = TestBed.get(BasicService);
  });

  //with Observable
  //Fetching
  it('get people data', (done: DoneFn) => {
    service.getPeople().subscribe(
      response => {
        expect(response.status).toBe(200);
        expect(response.statusText).toBe("OK");
        done();
      },
      error => {
        expect(true).toBeFalsy();
      }
    );
  });

  //Adding
  it('#AddPeople=>Add the people', (done: DoneFn) => {
    let reqData = {
      id: new Date().getMilliseconds(),
      name: "Test"+ new Date().getMilliseconds()
    }
    service.addOrEditPeople(false, reqData).subscribe(
      response => {
        expect(response.statusText).toBe("Created");
        done();
      },
      error => {
        expect(true).toBeFalsy();
      }
    );
  });

  //Edit
   it('#EditPeople=> edit the people', (done: DoneFn)=>{

      let reqData = {
        id:1,
        name:"Edited"+new Date().getMilliseconds()
      }
      service.addOrEditPeople(true, reqData).subscribe(
        response => {
        expect( response.status ).toBe(200);
        expect( response.statusText ).toBe("OK");
        done();
      },
      error => {
        expect(true).toBeFalsy();
      }
    );

  });

  //without Observable
  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });


});
