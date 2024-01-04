function assert(assertionFactor, dataToBeReturned, errorMessage, res) {
  if (
    assertionFactor !== undefined &&
    assertionFactor !== null &&
    assertionFactor !== "" &&
    !(Array.isArray(assertionFactor) && assertionFactor.length === 0) &&
    !(
      typeof assertionFactor === "object" &&
      Object.keys(assertionFactor).length === 0
    )
  ) {
    return dataToBeReturned;
  }
  throw new Error(errorMessage + (res ? ` - Response: ${res}` : ""));
}

module.exports = assert;
