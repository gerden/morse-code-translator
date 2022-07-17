import { translator } from "./main";
describe("text to morse", () => {
  it("basic test", () => {
    expect(translator.changeTextToMorse("")).toBe("-.");
  });
});
