import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { arbutusM } from '../../interfaces/arbutu';
import { ArbutsService } from '../../services/arbuts.service';

@Component({
  selector: 'app-tabla-arbu',
  styleUrls: ['./tabla-arbu.component.css'],
  templateUrl: './tabla-arbu.component.html'

})
export class TablaArbuComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  arbutus: arbutusM[] = [];

  displayedColumns: string[] = ['position','especie','estado', 'habito', 'corteza_ramas', 'corteza_ramillas','peciolos','hojas', 'flores' ,'acciones'];
  dataSource = new MatTableDataSource() ;



  constructor(private arbutusService: ArbutsService, private router: Router) { }

  ngOnInit(): void {
    this.arbutusService.conseguirArbutus().subscribe(res => this.dataSource.data = res)
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
    this.router.navigate(['/filtro/VistaArbutus', id]);
  }


}
