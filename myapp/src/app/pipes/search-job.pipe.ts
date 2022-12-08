import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'searchJob'
})
export class SearchJobPipe implements PipeTransform {

  transform(jobDetails:any, title:any):any {
    if(!title){
      console.log(jobDetails)
      return jobDetails
    }
    console.log(jobDetails.filter((e:any)=>e.title == title))
    return jobDetails.filter((e:any)=>e.title == title)
  }
}
