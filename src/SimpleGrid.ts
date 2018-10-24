import {Grid, GridOptions} from "ag-grid-community";

import './styles.scss';

export class SimpleGrid {
    private gridOptions: GridOptions = {};

    constructor(selector: string) {
        this.gridOptions = {
            enableSorting: true,
            enableFilter: true,
            columnDefs: this.createColumnDefs(),
            rowData: this.createRowData()
        };

        let eGridDiv: HTMLElement = <HTMLElement>document.querySelector(selector);
        new Grid(eGridDiv, this.gridOptions);
    }

    // specify the columns
    private createColumnDefs() {
        return [
            {headerName: "Make", field: "make"},
            {headerName: "Model", field: "model"},
            {headerName: "Price", field: "price"}
        ];
    }

    // specify the data
    private createRowData() {
        return [
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxter", price: 72000}
        ];
    }
}

