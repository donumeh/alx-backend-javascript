import { rowElement, rowId } from "./interface";

export function insertRow(row: rowElement): rowId;

export function deleteRow(rowId: rowId): void;

export function updateRow(rowId: rowId, row: rowElement): rowId;
