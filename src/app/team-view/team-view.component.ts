import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSelectChange } from '@angular/material';
import { TeamService } from '../shared/services/team.service';
import { TeamDetails } from '../shared/models/team-details.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss']
})
export class TeamViewComponent implements OnInit, OnDestroy {
  teamsData: TeamDetails[];
  teamsSubscription: Subscription;
  selectedSeason: string;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  onChange(event: MatSelectChange) {
    this.selectedSeason = event.value;
    this.getTeamsData(event.value);
  }

  private getTeamsData(season: string) {
    this.teamsSubscription = this.teamService.getTeamsData(season).subscribe(res => {
      this.teamsData = res;
    });
  }

  get hasSeason(): boolean {
    return !!this.selectedSeason;
  }

  ngOnDestroy(): void {
    if (this.teamsSubscription) {
      this.teamsSubscription.unsubscribe();
    }
  }

}
