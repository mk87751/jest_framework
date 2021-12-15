const validate = require("./validator");
const constants = require("./Constants");

describe("ipAddress validation", () => {
  // it("length lesser than 7", () => {
  //   expect(validate.validateIPAddress("0.0.0")).toBe(false);
  // });
  // it("valid length", () => {
  //   expect(validate.validateIPAddress("0.0.0.1")).toBe(true);
  // });
  // it("ends with the dots", () => {
  //   expect(validate.validateIPAddress("0.0.0.0.1.")).toBe(false);
  // });
  // it("dots in consecutive position", () => {
  //   expect(validate.validateIPAddress("0..011.11.1")).toBe(false);
  // });
  // it("contains alpha or specialcharacters", () => {
  //   expect(validate.validateIPAddress("0.abc.b.001")).toBe(false);
  // });
  // it("contains no consecutive dots", () => {
  //   expect(validate.validateIPAddress("198.167.2.1")).toBe(true);
  // });
  // it("contains no alpha or special", () => {
  //   expect(validate.validateIPAddress("100.123.25.12")).toBe(true);
  // });
  test.each(constants.ipAddress)("ipAddress=%s", (ipAddress, expected) => {
    expect(validate.validateIPAddress(ipAddress)).toBe(expected);
  });
});

describe("password validation", () => {
  it("invalid Length", () => {
    expect(validate.validatePassword("mani")).toBe(false);
  });
  it("valid length", () => {
    expect(validate.validatePassword("manikantha")).toBe(true);
  });
  it("starts and ends with spaces", () => {
    expect(validate.validatePassword(" manikantha ")).toBe(false);
  });
  it("valid input", () => {
    expect(validate.validatePassword("mk87751_123")).toBe(true);
  });
  it("input with special char", () => {
    expect(validate.validatePassword("mk8775@2023")).toBe(false);
  });
  it("input with underscore", () => {
    expect(validate.validatePassword("mani_kantha")).toBe(true);
  });
});
