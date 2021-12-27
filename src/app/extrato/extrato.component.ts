import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferecia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  @Input() transferencias: any[];

  constructor(private service: TransferenciaService) {}

  ngOnInit(): void {
    this.service.todas().subscribe((x) => (this.transferencias = x));
  }
}
