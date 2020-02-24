import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamDetails } from '../models/team-details.model';
import { Observable, Subject, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable()
export class TeamService {
    private teamsData: TeamDetails[];

    constructor(private http: HttpClient) { }

    uploadFile(data: FormData) {
        return this.http.post<FormData>(`${environment.apiUrl}/file-uploads`, data, { observe: 'response' });
    }

    getTeamsData(season: string): Observable<TeamDetails[]> {
        return this.http.get<TeamDetails[]>(`${environment.apiUrl}/file-uploads/${season}`)
            .pipe(
                tap(response => this.teamsData = response)
            );
    }

    getTeamDetails(teamName: string) {
        const teamInfo = this.teamsData.find(e => e.name === teamName);
        return of(teamInfo);
    }
}
