const countDots = (ipAddress) => {
  let count = 0;
  for (let i = 0; i < ipAddress.length; i++) {
    if (ipAddress[i] === ".") count++;
  }
  return count;
};

const isDotsConsecutive = (ipAddress) => {
  for (let i = 0; i < ipAddress.length - 1; i++) {
    if (ipAddress[i] === "." && ipAddress[i + 1] === ".") {
      return true;
    }
  }
  return false;
};

const isIpContainAlphaOrSpecialCharacters = (ipAddress) => {
  for (let i = 0; i < ipAddress.length; i++) {
    if (
      ipAddress[i] !== "." &&
      !(ipAddress.charCodeAt([i]) >= 48 && ipAddress.charCodeAt([i]) <= 57)
    ) {
      return true;
    }
  }
  return false;
};

function validateIPAddress(ipAddress) {
  if (
    ipAddress.length >= 7 &&
    ipAddress.length <= 15 &&
    ipAddress[0] !== "." &&
    ipAddress[ipAddress.length - 1] !== "." &&
    countDots(ipAddress) === 3 &&
    !isDotsConsecutive(ipAddress) &&
    !isIpContainAlphaOrSpecialCharacters(ipAddress)
  )
    return true;
  else return false;
}

const isPassContainSpecial = (password) => {
  for (let i = 0; i < password.length; i++) {
    if (
      !(
        password[i] === "_" ||
        (password.charCodeAt([i]) >= 48 && password.charCodeAt([i]) <= 57) ||
        (password.charCodeAt([i]) >= 65 && password.charCodeAt([i]) <= 90) ||
        (password.charCodeAt([i]) >= 97 && password.charCodeAt([i]) <= 122)
      )
    ) {
      return true;
    }
  }
  return false;
};

function validatePassword(password) {
  if (
    password.length >= 10 &&
    password.length <= 50 &&
    password[0] !== " " &&
    password[password.length - 1] !== " " &&
    !isPassContainSpecial(password)
  ) {
    return true;
  } else return false;
}

exports.validateIPAddress = validateIPAddress;
exports.validatePassword = validatePassword;
