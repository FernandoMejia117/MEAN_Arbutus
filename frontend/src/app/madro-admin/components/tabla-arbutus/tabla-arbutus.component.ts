import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Arbutus } from '../../interface/arbutus';
import { ArbutusService } from '../../services/arbutus.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-tabla-arbutus',
  templateUrl: './tabla-arbutus.component.html',
  styleUrls: ['./tabla-arbutus.component.css']
})
export class TablaArbutusComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  arbutus: Arbutus[] = [];


  displayedColumns: string[] = ['position','especie', 'imagen', 'estado', 'habito', 'corteza_ramas', 'corteza_ramillas', 'peciolos', 'hojas', 'flores', 'acciones'];
  dataSource = new MatTableDataSource() ;

  constructor(private arbutusService: ArbutusService, private snakckBar: MatSnackBar, private router: Router) { }


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

  eliminarMadro(id: string){
    this.arbutusService.eliminarArbutus(id)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/admin/tablaArbutus'])
        },
        err => console.log(err)
      )

      this.snakckBar.open('Arbutus Eliminado', '', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
  }


}
