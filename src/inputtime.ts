let isAppendedStyleSheet = false;

/**
 * 時間にフォーカスするとtime形式に変換
 */
export function changeInputtimeIn(row: Element): void {
    const inputtimes = row.getElementsByClassName("inputime");
    if (inputtimes.length == 1 && inputtimes[0] instanceof HTMLInputElement) {
        changeInputtime(inputtimes[0]);
    }
}

function changeInputtime(inputtime: HTMLInputElement) {
    inputtime.addEventListener("focus", () => {
        inputtime.value = formatHHMM(inputtime.value);
        inputtime.type = "time";
    });
    inputtime.addEventListener(
        "blur",
        () => {
            inputtime.type = "text";
        },
        { capture: true } // 既存のEventListenerがtime形式でない形式にフォーマットするので最優先でtypeを戻す
    );
    // type="time"のアイコンを隠す
    if (!isAppendedStyleSheet) {
        const style = document.createElement("style");
        style.textContent =
            'input[type="time"].inputime::-webkit-calendar-picker-indicator { background: none; display: none; }';
        document.head.appendChild(style);
        isAppendedStyleSheet = true;
    }
}

function formatHHMM(time: string) {
    const [hh, mm] = time.split(":");
    return `${hh.padStart(2, "0")}:${mm}`;
}
