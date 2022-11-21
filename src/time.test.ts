import { restTime } from "./time";

test("restTime", () => {
    expect(restTime("9:59", "0:00", "")).toBe("9:59");
    expect(restTime("9:01", "1:02", "")).toBe("7:59");
    expect(restTime("9:02", "9:01", "")).toBe("0:01");
    expect(restTime("9:01", "8:02", "8:02")).toBe("9:01");
    expect(restTime("9:01", "8:02", "8:00")).toBe("8:59");
    expect(restTime("9:00", "9:00", "0:01")).toBe("0:01");
    expect(restTime("8:00", "9:00", "")).toBe("0:00");
});
