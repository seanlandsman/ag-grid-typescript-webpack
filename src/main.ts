// with    5741085 Feb 27 17:42 main.bundle.js
// without 5715900 Feb 27 17:43 main.bundle.js
// 25k difference

// 1) All "exposed" items should have interfaces - these can then be exposed/used as necessary to retain type safety but without
// us referencing the actual entity (which would mean webpack would include it)

// 2) References in Bean.ts need to be removed and references to any "dynamic" beans be replaced with
// this.beans.context.getBean('tooltipManager').registerTooltip(this);

import {Grid} from "ag-grid-community";

// import {TooltipModule} from "ag-grid-community/dist/lib/tooltipModule";
// import {SetFilterModule} from "ag-grid-enterprise/dist/lib/setFilterModule";
// Grid.setModulesToInclude([TooltipModule, SetFilterModule]);

// for the "core" enterprise
import 'ag-grid-enterprise';

import {SimpleGrid} from "./SimpleGrid";



new SimpleGrid('#myGrid');


