import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, flatMap } from 'rxjs/operators';
import { TeamService } from '../shared/services/team.service';
import { TeamDetails } from '../shared/models/team-details.model';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  teamDetails: TeamDetails;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('name')),
      flatMap((name: string) => this.teamService.getTeamDetails(name))
    ).subscribe(response => {
      this.teamDetails = response;
    });
  }

}
