/// <reference path="crud.d.ts">

import { rowElement, rowId } from "./interface";
import * as CRUD from "./crud";

const row: rowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
}

let newRowID: rowId = CRUD.insertRow(row)

const updatedRow: rowElement =  {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23
}

newRowID = CRUD.updateRow(newRowID, updatedRow)

CRUD.deleteRow(newRowID)
