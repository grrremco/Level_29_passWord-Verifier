// Utility functions

// Password is NOT Null
const isNotNull = (str) => str !== null;

// Password less than 9 characters:
const hasRightLength = (str) => isNotNull(str) && str.length <= 8;

// Password contains 1 or more uppercase characters
const hasUpperCaseCharacter = (str) => isNotNull(str) && str.toLowerCase() !== str;

// Password contains 1 or more lowercase characters
const hasLowerCaseCharacter = (str) => isNotNull(str) && str.toUpperCase() !== str;

// Password contains 1 or more digits
const hasDigit = (str) => isNotNull(str) && /[0-9]/.test(str);

const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
};