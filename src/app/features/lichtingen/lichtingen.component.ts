import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Lichting } from '../../core/models/lichting.model';
import { LichtingenDetailService } from '../../core/lichting-detail-service';

@Component({
  selector: 'app-lichtingen',
  templateUrl: './lichtingen.component.html',
  styleUrls: ['./lichtingen.component.scss']
})
export class LichtingenComponent {
  lichtingen?: Lichting[];

  constructor(private router: Router, private lichtingenDetailService: LichtingenDetailService) {}

  ngOnInit() {
    this.lichtingen = this.lichtingenDetailService.getAllLichtingDetails();
  }

  navigateToDetail(lichting: Lichting) {
    this.router.navigate(['/lichting', lichting.id]);
  }
}
