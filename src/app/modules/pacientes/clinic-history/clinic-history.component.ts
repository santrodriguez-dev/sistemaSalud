import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator } from '@angular/material';
import { ClinicHistory } from 'src/app/shared/models';

@Component({
  selector: 'app-clinic-history',
  templateUrl: './clinic-history.component.html',
  styleUrls: ['./clinic-history.component.css']
})
export class ClinicHistoryComponent implements OnInit {

  displayedColumns: string[] = ['diagnosis', 'severity_level', 'description', 'fecha'];
  dataSource: MatTableDataSource<ClinicHistory>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialogRef: MatDialogRef<ClinicHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClinicHistory[]) {
    this.dataSource = new MatTableDataSource(data);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
