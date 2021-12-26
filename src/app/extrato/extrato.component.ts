import { Component, Input } from '@angular/core';
import { TransfereciaService } from '../services/transferecia.service';
@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent {
  transferencias: any[];

  constructor(private service: TransfereciaService) {}

  ngOnInit() {
    this.transferencias = this.service.transferencias;
  }
}
