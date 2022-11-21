export function getWorkTable(dialog: Element): Element | null {
    return dialog.querySelector("#empWorkTableBody");
}

export function getRowsIn(workTbody: Element): HTMLTableRowElement[] {
    return Array.from(workTbody.children).filter(
        (element): element is HTMLTableRowElement => element instanceof HTMLTableRowElement
    );
}
