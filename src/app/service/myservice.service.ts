import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import{Observable, throwError}from 'rxjs'
import{retry, catchError} from 'rxjs/operators';
import { Igetusername } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  GetTodayDate() 
  { 
var date =new Date();
return date;
  }
  

  GetPublicData():any
  {
    debugger;
    return this.http.get<any>(this.ApiUrl);
  }
  

  serviceproperty ="service created";
  ApiUrl="https://api.agify.io?name=meelad";
  NodeRegApiUrl="http://localhost:3400/api/User"
  
  handleError:any="Getting error from api call"  
  
  constructor(private http: HttpClient) { }

  


  //Insert method

  InsertRegister(Reg:any):Observable<any>{
    const header={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post<any>(this.NodeRegApiUrl+'/AddUser',Reg,header);
  }
 
  //RetrieveUser

  GetRegister():any{
    return this.http.get<any>(this.NodeRegApiUrl+'/RetrieveUser');
  }
//Delete method
RemoveUser(_id:string):Observable<any>{
  const header={headers:new HttpHeaders({'Content-Type':'application/json'})};

  debugger;
  return this.http.delete<string>(this.NodeRegApiUrl+'/DeleteUser/'+_id);
}

//Getlogindetailsbyusername

Getlogindetailsbyusername(userjson:Igetusername):any
{
  const header={headers:new HttpHeaders({'Content-Type':'application/json'})};
  return this.http.post<any>(this.NodeRegApiUrl+'/Getlogindetailsbyusername',userjson,header);
}



}
