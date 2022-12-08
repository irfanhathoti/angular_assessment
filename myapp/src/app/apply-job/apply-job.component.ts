import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobListService } from '../share/job-list.service';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {

  file!:File
  userDetail!: FormGroup

  constructor(private formBuilder: FormBuilder,private api:JobListService) {


    this.userDetail = formBuilder.group({
      name:[''],
      email:[''],
      phoneNo:[''],
      message:[''],
      file:['']
    })


  }

  handleSubmit(){
    console.log(this.userDetail.value)
    this. onUpload()
  }


  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    console.log(this.file);
    this.api.uploadFile(this.file).subscribe((event: any) => {
    
    });
  }

  ngOnInit(): void {
  }

}
