import { Component, OnInit } from '@angular/core';
import { TeamService } from '../shared/services/team.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  selectedFiles: File[];
  uploadSuccess: boolean;
  uploadFailed: boolean;
  allowedTypes = ['.csv'];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.clearMessage();
    this.selectedFiles = event.target.files as File[];
  }

  onUpload() {
    const formData = new FormData();
    formData.append('file', this.selectedFiles[0]);
    this.teamService.uploadFile(formData).subscribe(res => {
      this.selectedFiles = null;
      this.uploadSuccess = true;
    }, err => {
      this.uploadFailed = true;
    });
  }

  clearMessage(): void {
    this.uploadFailed = false;
    this.uploadSuccess = false;
  }

}
