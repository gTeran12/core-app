import { Component } from '@angular/core';
import { DataProviderService } from '../../service/data-provider.service';
import { PeriodicElement } from '../../interface/periodic-element';
import { Option } from '../../interface/option';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource : PeriodicElement[] = [];
  options: Option[] = [];

  constructor(private provider: DataProviderService) { }

  ngOnInit() {
    this.dataSource = this.provider.getElements()
    this.options = this.provider.getOptions()
  }

}
