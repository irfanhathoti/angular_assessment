import { Component, OnInit } from '@angular/core';
import { JobListService } from '../share/job-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobDetails: any
  title!:any
  constructor(private jobList: JobListService) { 

  }


  getAllData() {
    this.jobList.getAllData().subscribe(response => {
      this.jobDetails = response

      console.log(this.jobDetails)

    })
  }

  

  ngOnInit(): void {

    this.getAllData()
  }


}
