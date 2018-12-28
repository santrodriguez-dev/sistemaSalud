import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  checked?: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  typesOfShoes: any[] = [{ name: 'nombre 1', val: 'val1', selected: true }, { name: 'nombre 2', val: 'val2' }];
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<PeriodicElement>;
  selection: SelectionModel<PeriodicElement>;
  selection2: SelectionModel<string>;

  selectedOptions = [];
  selectedOption;

  constructor() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.selection = new SelectionModel<PeriodicElement>(true, [ELEMENT_DATA[2]]);
    this.selection2 = new SelectionModel<string>(true, [this.typesOfShoes[2]]);
  }

  ngOnInit(): void {
  }

  onNgModelChange($event) {
    console.log($event);
    this.selectedOption = $event;

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection2.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  saveSelection() {
    this.seleccionarFilas();
  }

  seleccionarFilas() {
    this.selection.clear();
    const seleccionados = [2, 4, 5];
    for (const sel of seleccionados) {
      const select = ELEMENT_DATA.find(e => e.position === sel);
      this.selection.select(select || null);
    }
  }

}
