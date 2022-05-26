import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AuthApp';
  startdate: any = '20/01/2022';
  enddate: any = '30/6/2022';
  d = new Date();
  StartdateArray: any = [];
  enddateArray: any = [];

  datesArray = [{"date": "2022-05-08","title": "Infusion Day"},{"date": "2022-05-09","title": "Test Day"}]
  modifiedDateArray?:any = [];
  constructor() {}

  ngOnInit(): void {
    this.StartdateArray = this.startdate.split('/');
    this.enddateArray = this.enddate.split('/');
    console.log(this.startdate.split('/'));

    this.datesArray.forEach(element => {
      let dateSplit = element.date.split('-');

      this.modifiedDateArray.push({
        year: dateSplit[0], month: dateSplit[1], day: dateSplit[2]
      })


      
    });
    console.log(this.modifiedDateArray)
    // if (
    //   this.d >
    //   new Date(
    //     this.StartdateArray[2],
    //     this.StartdateArray[1],
    //     this.StartdateArray[0]
    //   )
    // ) {
    //   alert('Today Date is greater than Date One.');
    // } else {
    //   alert('zozo');
    // }
    // if (
    //   this.d <
    //   new Date(this.enddateArray[2], this.enddateArray[1], this.enddateArray[0])
    // ) {
    //   alert('Today Date is less than Date One.');
    // } else {
    //   alert('xoxo');
    // }
  }
}
