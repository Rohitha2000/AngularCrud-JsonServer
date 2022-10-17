import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public emp:employee= {} as employee;
  public dataid:any;
  public mydata:any;
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

  constructor(private employeeservice:EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param:Params)=>{
      this.dataid= param['get']('dataid')
    })
    this.employeeservice.fetchdata(this.dataid).subscribe((data:any)=>{
      this.emp= data;
      console.log(data)
    })
  }
updatedata(){
  this.employeeservice.update(this.emp, this.dataid).subscribe((data:any)=>{
    alert("data updated")
    this.router.navigate(['/view'])
  })
}
}
