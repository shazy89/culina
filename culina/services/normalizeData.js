exports.normalizePhoneNumber = (number) => {
  let cleaned = ("" + number).replace(/\D/g, "");

  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }

  return null;
};
