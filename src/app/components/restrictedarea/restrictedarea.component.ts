import { Component, OnInit } from '@angular/core';
import { QuerydbService } from '../../services/querydb.service';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-restrictedarea',
  templateUrl: './restrictedarea.component.html',
  styleUrls: ['./restrictedarea.component.scss']
})
export class RestrictedAreaComponent implements OnInit {
  data;
  sales;
  checked= '';

  constructor(private querydb: QuerydbService) {
    this.querydb.getCustomers()
      .subscribe(data => this.data = data);
  }

  checkboxValue(e) {
    if (e.target.checked) {
      console.log(e.target.checked);
      this.checked = 'Torino';
    }
    else {
      this.checked = '';
    }
  }

  ngOnInit() {
  }

}
