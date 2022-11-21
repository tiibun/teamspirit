import { handleDialogCreated, handleWorkTableRowAdded } from "./dialog_observer";
import { changeInputtimeIn } from "./inputtime";
import { addRemainingTimeButton } from "./remaining";
import { getRowsIn, getWorkTable } from "./util";

const rowOperation = (row: Element) => {
    addRemainingTimeButton(row);
    changeInputtimeIn(row);
};

const onDialogCreated = (node: Element) => {
    console.debug("onDialogCreated");
    const workTbody = getWorkTable(node);
    if (workTbody) {
        getRowsIn(workTbody).forEach(rowOperation);
        // 一度作成した後は閉じてもdisplay: noneになるだけ
        handleWorkTableRowAdded(rowOperation).observe(workTbody);
    }
};

// 工数実績入力が開かれたら実行する
window.addEventListener("load", () => {
    console.debug("load");
    handleDialogCreated(onDialogCreated).observe(document.body);
});
