// 1) All "exposed" items should have interfaces - these can then be exposed/used as necessary to retain type safety but without
// us referencing the actual entity (which would mean webpack would include it)

// 2) References in Bean.ts need to be removed and references to any "dynamic" beans be replaced with
// this.beans.context.getBean('tooltipManager').registerTooltip(this);

// 3) CI will be important to ensure module code isn't accidentally referenced and therefore implicitly included in any bundle

// 4) Anything exposed in main.d.ts/js should be an interface if part of a module (see 3)

import {Grid} from "ag-grid-community";

import 'ag-grid-community/dist/lib/tooltipModule';
import 'ag-grid-enterprise/dist/lib/setFilterModule';

// for the "core" enterprise
import 'ag-grid-enterprise';

import {SimpleGrid} from "./SimpleGrid";

new SimpleGrid('#myGrid');


