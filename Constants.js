const ipAddress = [
  ["0.0.0", false],
  ["0.0.0.1", true],
  ["0.0.0.0.1.", false],
  ["0..011.11.1", false],
  ["0.abc.b.001", false],
  ["198.167.2.1", true],
  ["100.123.25.12", true],
];

exports.ipAddress = ipAddress;
