import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  constructor(public photoService: PhotoService) {} // Use 'public' here

  ngOnInit() {
    // Initialize the property here
    // this.someVariable = 'Initial Value'; // Remove this line if 'someVariable' is not used
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
