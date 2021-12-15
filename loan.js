function loanEligibility(maritalStatus, employment, service) {
  if (employment === "permanent" && maritalStatus === "unmarried") {
    if (service >= 30) {
      return 50000;
    }
    return 25000;
  } else if (employment === "permanent" && maritalStatus === "married") {
    if (service >= 30) {
      return 60000;
    }
    return 35000;
  } else {
    return 10000;
  }
}

exports.loanEligibility = loanEligibility;
