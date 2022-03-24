import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  @Input() id: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() navigateTo: string | null = null;
  @Input() param: string = '';
  @Input() image: string | null = null;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(param: string): void {
    if (this.navigateTo) {
      this.router.navigate(
        [`/${this.navigateTo}`],
        !!param ? { queryParams: { [this.param]: param} } : {}
      );
    }
  }

}
