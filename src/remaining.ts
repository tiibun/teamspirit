import { restTime } from "./time";

const BUTTON_CLASS = "button-add-rest";

export function addRemainingTimeButton(row: Element): void {
    if (row.getElementsByClassName(BUTTON_CLASS).length) {
        console.debug("Already added");
        return;
    }
    const empWorkLock = row.querySelector("div[id^=empWorkLock]");
    if (empWorkLock === null) {
        return;
    }
    empWorkLock.after(createButton());
}

function createButton() {
    const button = document.createElement("button");
    button.className = BUTTON_CLASS;
    button.textContent = "残";
    button.addEventListener("click", function () {
        const inputtimeElement = this.parentElement?.getElementsByClassName("inputime")[0];
        if (inputtimeElement instanceof HTMLInputElement) {
            const empWorkRealTime = document.getElementById("empWorkRealTime")?.textContent ?? "0:00";
            const empWorkTotalTime = document.getElementById("empWorkTotalTime")?.textContent ?? "0:00";
            const time = restTime(empWorkRealTime, empWorkTotalTime, inputtimeElement.value);
            inputtimeElement.value = time;
            // 合計に反映
            inputtimeElement.focus();
            this.focus();
        }
    });
    return button;
}
