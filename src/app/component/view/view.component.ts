import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import {employee} from '../employeemodule'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public emp:employee= {} as employee;
  myemp:any;
  constructor(private employeeservice:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.getuser();
  }

  getuser(){
    this.employeeservice.getuser().subscribe(res=>{
    this.myemp= res;
    
    })
  }

  deleteuser(user:any){
    if(confirm('Are you sure to delete? '))
    this.employeeservice.delete(user).subscribe(()=>{

    })

    const seconds=3
    setInterval(() => {
      this.getuser();
    }, seconds * 300);
  }

  edituser(user:any){
    this.router.navigate(['edit/update/'+ user.id])
  }

}


