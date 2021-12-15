const loan = require("./loan");

describe("loan eligibility", () => {
  //   it("a married temporary job holder", () => {
  //     expect(loan.loanEligibility("married", "temporary")).toEqual(10000);
  //   });
  //   it("an unmarried temporary job holder", () => {
  //     expect(loan.loanEligibility("unmarried", "temporary")).toEqual(10000);
  //   });
  //   it("a temporary job holder with 30 years of service", () => {
  //     expect(loan.loanEligibility("", "temporary", "30")).toEqual(10000);
  //   });
  //   it("a married permanent job holder with 30 years of service", () => {
  //     expect(loan.loanEligibility("married", "permanent", 30)).toEqual(60000);
  //   });
  //   it("an unmarried permanent job holder with 30 years’ service", () => {
  //     expect(loan.loanEligibility("unmarried", "permanent", 30)).toEqual(50000);
  //   });
  //   it("a married permanent job holder with 25 years’ service", () => {
  //     expect(loan.loanEligibility("married", "permanent", 25)).toEqual(35000);
  //   });
  it.each([
    ["married", "temporary", 0, 10000],
    ["unmarried", "temporary", 0, 10000],
    ["", "temporary", 30, 10000],
    ["married", "permanent", 30, 60000],
    ["unmarried", "permanent", 30, 50000],
    ["married", "permanent", 25, 35000],
    ["unmarried", "permanent", 25, 25000],
  ])(
    "maritalStatus=%s, employment=%s, service=%i",
    (maritalStatus, employment, service, expected) => {
      expect(loan.loanEligibility(maritalStatus, employment, service)).toBe(
        expected
      );
    }
  );
});
