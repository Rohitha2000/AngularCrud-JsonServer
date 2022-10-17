import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import {employee} from '../employeemodule'

interface gender{
  value: string;
  viewvalue: string;
}
interface position{
  value: string;
  viewvalue: string;
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public emp:employee= {} as employee;
  usergender:gender[]= [
    {value: 'male', viewvalue: 'male'},
    {value: 'female', viewvalue: 'female'},
    {value: 'other', viewvalue: 'other'}

  ]

  userposition:position[]= [
    {value: 'Backend Developer', viewvalue: 'Backend Developer'},
    {value: 'Frontend Developer', viewvalue: 'Frontend Developer'},
    {value: 'Architect', viewvalue: 'Architect'},
    {value: 'Project Manager', viewvalue: 'Project Manager'}

  ]

  constructor(private employeeservice:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    
    }

 

  add(){
    this.employeeservice.createuser(this.emp).subscribe((data:employee)=> {
      
      console.log(data)
      alert("Data added successfully")
      this.router.navigate(['/view'])

    },
    err=>{
      alert("something went wrong")
      this.router.navigate(['/'])

    })
  }

}
