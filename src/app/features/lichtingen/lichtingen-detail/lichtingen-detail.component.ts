import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lichting } from '../../../core/models/lichting.model';
import { LichtingenDetailService } from '../../../core/lichting-detail-service';

@Component({
  selector: 'app-lichtingen-detail',
  templateUrl: './lichtingen-detail.component.html',
  styleUrls: ['./lichtingen-detail.component.scss']
})
export class LichtingenDetailComponent implements OnInit {
  lichting!: Lichting;

  constructor(private route: ActivatedRoute, private lichtingenDetailService: LichtingenDetailService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const lichtingId = +params['id'];
      this.lichting = this.lichtingenDetailService.getLichtingDetailsById(lichtingId)!;
    });
  }
}
