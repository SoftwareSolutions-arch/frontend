import { Component, OnInit } from '@angular/core';

interface EmployeeAttendance {
  name: string;
  [key: string]: string;
}

@Component({
  selector: 'app-attendance-sheet',
  templateUrl: './attendance-sheet.component.html',
  styleUrls: ['./attendance-sheet.component.scss']
})
export class AttendanceSheetComponent implements OnInit {
  searchText = '';
  selectedMonth: number = new Date().getMonth() + 1;
  selectedYear: number = new Date().getFullYear();
  days: number[] = [];
  
  months = [
    { value: 1, name: 'January' },
    { value: 2, name: 'February' },
    { value: 3, name: 'March' },
    { value: 4, name: 'April' },
    { value: 5, name: 'May' },
    { value: 6, name: 'June' },
    { value: 7, name: 'July' },
    { value: 8, name: 'August' },
    { value: 9, name: 'September' },
    { value: 10, name: 'October' },
    { value: 11, name: 'November' },
    { value: 12, name: 'December' }
  ];

  years = [2023, 2022, 2021, 2020, 2019, 2018];
  
  allEmployees: EmployeeAttendance[] = [ 
    {'name': 'John Doe', 'day1': 'on', 'day2': 'on', 'day3': 'on','day4': 'on', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'on',  'day31': 'on'},
    {'name': 'Richard Miles', 'day1': 'on', 'day2': 'on', 'day3': 'on','day4': 'on', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'on',  'day31': 'on'},
    {'name': 'John Smith', 'day1': 'on', 'day2': 'on', 'day3': 'on','day4': 'on', 'day5': 'off', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'on',  'day31': 'on'},
    {'name': 'Mike Litrous', 'day1': 'on', 'day2': 'on', 'day3': 'on','day4': 'off', 'day5': 'off', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'off',   'day29': 'on',   'day30': 'first-off',  'day31': 'on'},
    {'name': 'Wilmer Deluna', 'day1': 'off', 'day2': 'on', 'day3': 'on','day4': 'on', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'on',  'day31': 'on'},
    {'name': 'Jeffrey Warden', 'day1': 'on', 'day2': 'on', 'day3': 'on','day4': 'on', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'off',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'second-off',  'day31': 'on'},
    {'name': 'Bernardo Galaviz', 'day1': 'first-off', 'day2': 'on', 'day3': 'off','day4': 'on', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'on',  'day31': 'on'},
    {'name': 'Lesley grauer', 'day1': 'on', 'day2': 'on', 'day3': 'on','day4': 'off', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'on',  'day31': 'on'},
    {'name': 'Jeffrey Lalor', 'day1': 'second-off', 'day2': 'on', 'day3': 'on','day4': 'on', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'on',  'day31': 'second-off'},
    {'name': 'Loren Gatlin', 'day1': 'on', 'day2': 'on', 'day3': 'on','day4': 'on', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'off',   'day27': 'on',   'day28': 'off',   'day29': 'on',   'day30': 'on',  'day31': 'on'},
    {'name': 'Tarah Shrospsire', 'day1': 'on', 'day2': 'on', 'day3': 'on','day4': 'on', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'on',  'day31': 'on'},
    {'name': 'Richard Miles', 'day1': 'on', 'day2': 'on', 'day3': 'on','day4': 'on', 'day5': 'on', 'day6': 'on', 'day7': 'on', 'day8': 'on', 'day9': 'on', 'day10': 'on',  'day11': 'on',  'day12': 'on',  'day13': 'on',  'day14': 'on',  'day15': 'on',  'day16': 'on', 'day17': 'on',  'day18': 'on',  'day19': 'on',   'day20': 'on',  'day21': 'on',   'day22': 'on',  'day23': 'on',  'day24': 'on',  'day25': 'on',  'day26': 'on',   'day27': 'on',   'day28': 'on',   'day29': 'on',   'day30': 'on',  'day31': 'second-off'}
   ];
  
  filteredRows: EmployeeAttendance[] = [];

  constructor() { }

  ngOnInit() {
    this.updateDays();
    this.applyFilter();
  }

  updateDays() {
    const daysInMonth = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
  this.days = Array(daysInMonth).fill(0).map((x, i) => i);
  }

  applyFilter() {
    this.filteredRows = this.allEmployees.filter(employee =>
      employee.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  getDaysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }
}