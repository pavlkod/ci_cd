import { summ } from "./summ";

describe("test one", () => {
  it("test summ", () => {
    except(summ(1, 2)).toBe(3);
  });
});
