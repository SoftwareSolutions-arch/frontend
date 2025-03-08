import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  @Output() isOpen: any;
  categories:any=[];
  activeSubmenu:any
  constructor() { }

  ngOnInit(): void {
  }

  toggleSubmenu(category:string){}

  closeSubmenu(){}

  closeMenu(){}

}
