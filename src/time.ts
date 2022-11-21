export function splitHhMm(time: string) {
    const [, hour, minute] = /(\d+):(\d+)/.exec(time) ?? [null, 0, 0];
    return [Number(hour), Number(minute)];
}

/**
 * 実働時間から合計時間（対象項目の入力時間を除く）を引いた残りの時間を返す.
 * @param realTime 実働時間
 * @param totalTime 合計時間
 * @param inputTime 対象項目の入力時間
 * @returns 残りの時間
 */
export function restTime(realTime: string, totalTime: string, inputTime: string): string {
    const [realTimeHour, realTimeMinute] = splitHhMm(realTime);
    const [totalTimeHour, totalTimeMinute] = splitHhMm(totalTime);
    const [inputTimeHour, inputTimeMinute] = splitHhMm(inputTime);
    const minutes =
        realTimeHour * 60 +
        realTimeMinute -
        (totalTimeHour * 60 + totalTimeMinute) +
        (inputTimeHour * 60 + inputTimeMinute);
    if (minutes < 0) {
        return "0:00";
    }
    const time = `${Math.floor(minutes / 60)}:${String(minutes % 60).padStart(2, "0")}`;
    return time;
}
