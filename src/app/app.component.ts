import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferecia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];

  constructor(private service: TransferenciaService) {}

  transferir($event) {
    this.service.adicionar($event).subscribe(x => console.log(x));
  }
}
