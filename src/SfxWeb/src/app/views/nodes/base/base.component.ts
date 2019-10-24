import { Component, OnInit } from '@angular/core';
import { IdGenerator } from 'src/app/Utils/IdGenerator';
import { TreeService } from 'src/app/services/tree.service';
import { ITab } from 'src/app/shared/component/navbar/navbar.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  tabs: ITab[] = [{
    name: "all nodes",
    route: "./"
    },
    // {
    //   name: "details",
    //   route: "/details"
    // }
  ];
  constructor(public tree: TreeService) { }

  ngOnInit() {
    this.tree.selectTreeNode([
      IdGenerator.nodeGroup()
    ]);
  }
}