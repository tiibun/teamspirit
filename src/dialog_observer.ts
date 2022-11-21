export function handleDialogCreated(callback: (node: Element) => void) {
    return new DialogCreatedObserver(callback);
}

export function handleWorkTableRowAdded(callback: (node: Element) => void) {
    return new WorkBodyRowAddedObserver(callback);
}

interface Observer {
    observe: (node: Node) => void;
}

class DialogCreatedObserver implements Observer {
    private observer: MutationObserver;

    constructor(callback: (node: Element) => void) {
        this.observer = new MutationObserver((mutations) => {
            mutations
                .flatMap((mutation) => Array.from(mutation.addedNodes))
                .filter(
                    (node): node is HTMLDivElement => node instanceof HTMLDivElement && node.id === "dialogWorkBalance"
                )
                .forEach(callback);
        });
    }

    public observe(node: Node): void {
        this.observer.observe(node, { childList: true });
    }
}

class WorkBodyRowAddedObserver implements Observer {
    private observer: MutationObserver;

    constructor(callback: (node: Element) => void) {
        this.observer = new MutationObserver((mutations) => {
            mutations
                .flatMap((mutation) => Array.from(mutation.addedNodes))
                .filter((node): node is HTMLTableRowElement => node instanceof HTMLTableRowElement)
                .forEach(callback);
        });
    }

    public observe(node: Node): void {
        this.observer.observe(node, { childList: true });
    }
}
