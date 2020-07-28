import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Some Dope Pics';
  image1 = 'https://vignette.wikia.nocookie.net/dubbing9585/images/e/ec/Gundam_Wing_Poster.jpg/revision/latest/top-crop/width/360/height/450?cb=20190420061155';
  image2 = 'https://static0.srcdn.com/wordpress/wp-content/uploads/2017/01/Gundam-Wing-Deathscythe.jpg';
  image3 = 'https://pm1.narvii.com/5772/8c7aeb7be1556d0c23c00525c3c123815cb4b50a_hq.jpg';

  constructor() { }

  ngOnInit() {
  }

}