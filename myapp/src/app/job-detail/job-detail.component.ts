import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobListService } from '../share/job-list.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {


  jobDeatilData: any




  constructor(private route: ActivatedRoute, private joblist:JobListService) { }

  //geting the data from the params
  geturlParams() {
    const id = this.route.snapshot.params['id']
    console.log(id)


    //getting all data from the service
    this.joblist.getJobDetail(id).subscribe(response => {
      this.jobDeatilData = response
      console.log(this.jobDeatilData)
    })
  }

  ngOnInit(): void {
    this.geturlParams()
  }

}
