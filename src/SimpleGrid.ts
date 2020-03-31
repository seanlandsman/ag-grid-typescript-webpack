import {Grid, GridOptions, ModuleRegistry} from "@ag-grid-community/all-modules";
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";

// or, if using Enterprise features
// import {Grid, GridOptions, ModuleRegistry} from "@ag-grid-enterprise/all-modules";
// import {ClientSideRowModelModule} from "@ag-grid-enterprise/all-modules";

ModuleRegistry.register(ClientSideRowModelModule);

import './styles.scss';

class SimpleGrid {
    private gridOptions: GridOptions = <GridOptions>{};

    constructor() {
        this.gridOptions = {
            columnDefs: this.createColumnDefs(),
            rowData: this.createRowData()
        };

        let eGridDiv:HTMLElement = <HTMLElement>document.querySelector('#myGrid');
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

new SimpleGrid();

