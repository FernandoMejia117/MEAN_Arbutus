import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ComarosService } from '../../services/comaros.service';
import {madroComarosta} from '../../interfaces/comarostaphylis';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-comaros',
  templateUrl: './tabla-comaros.component.html',
  styleUrls: ['./tabla-comaros.component.css']
})

export class TablaComarosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  Mcomarosta: madroComarosta[] = [];

 displayedColumns: string[] = ['position','especie','estado', 'habito', 'peciolosR', 'hojasDT','hojasAnchas','hojasMargen','acciones'];
  dataSource = new MatTableDataSource() ;



  constructor(private comarostaService: ComarosService, private router: Router) { }

  ngOnInit(): void {
    this.comarostaService.conseguirComarostaphylis().subscribe(res => this.dataSource.data = res)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  seleccionarTarjeta(id: string){
    this.router.navigate(['/filtro/VistaComarostaphylis', id]);
  }

}
