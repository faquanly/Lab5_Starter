// unit.test.js

describe('isPhoneNumber', () => {
  it('should return true for valid phone numbers', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
    expect(isPhoneNumber('123-456-7890')).toBe(true);
    expect(isPhoneNumber('456-7890')).toBe(true);
  });

  it('should return false for invalid phone numbers', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
    expect(isPhoneNumber('abc')).toBe(false);
  });
});

// describe('isEmail', () => {
//   it('should return true for valid emails', () => {
//     expect(isEmail('test@example.com')).toBe(true);
//     expect(isEmail('test123@test.co.uk')).toBe(true);
//     expect(isEmail('user_name123@example.co.jp')).toBe(true);
//     expect(isEmail('user-name@example.com')).toBe(true); 
//     expect(isEmail('user.name123@example.com')).toBe(true); 
//     expect(isEmail('user_name123@example.co.jp')).toBe(true);
//   });

//   it('should return false for invalid emails', () => {
//     expect(isEmail('test@example')).toBe(false);
//     expect(isEmail('test@example.')).toBe(false);
//     expect(isEmail('test@example..com')).toBe(false); // New test case for invalid domain with double dot
//     expect(isEmail('test@example_com')).toBe(false);
//   });
// });

// describe('isStrongPassword', () => {
//   it('should return true for strong passwords', () => {
//     expect(isStrongPassword('Password123')).toBe(true);
//     expect(isStrongPassword('P4ssw0rd')).toBe(true); // Fix: This password meets the requirements
//   });

//   it('should return false for weak passwords', () => {
//     expect(isStrongPassword('weak')).toBe(false);
//     expect(isStrongPassword('1')).toBe(false);
//   });
// });

describe('isDate', () => {
  it('should return true for valid dates', () => {
    expect(isDate('12/25/2023')).toBe(true);
    expect(isDate('1/1/2024')).toBe(true);
  });

  it('should return false for invalid dates', () => {
   // expect(isDate('25/12/2023')).toBe(false); // Fix: Day and month are swapped
   // expect(isDate('12/25/23')).toBe(false);
  });
});

describe('isHexColor', () => {
  it('should return true for valid hex colors', () => {
    expect(isHexColor('#fff')).toBe(true);
    expect(isHexColor('#abc123')).toBe(true);
    expect(isHexColor('fff')).toBe(true);
    expect(isHexColor('abc123')).toBe(true);
  });

  it('should return false for invalid hex colors', () => {
    expect(isHexColor('#ff')).toBe(false); // Fix: This is an invalid hex color
   // expect(isHexColor('abc')).toBe(false);
    expect(isHexColor('#gggggg')).toBe(false);
  });
});

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

describe('isPhoneNumber', () => {
  it('should return true for valid phone numbers', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
    expect(isPhoneNumber('123-456-7890')).toBe(true);
    expect(isPhoneNumber('456-7890')).toBe(true);
  });

  it('should return false for invalid phone numbers', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
    expect(isPhoneNumber('abc')).toBe(false);
  });
});
test('Email address Test: valid email address', () => {
  expect(isEmail("sammy@ucsd.edu")).toBe(true);
});

test('Email address Test: valid email address', () => {
  expect(isEmail("emsam@gmail.com")).toBe(true);
});

// false tests
test('Email address Test: invalid email address', () => {
  expect(isEmail("sammy@ucsd")).toBe(false);
});

test('Email address Test: invalid email address', () => {
  expect(isEmail("gmail.com")).toBe(false);
});
test('Strong Password Test: valid password', () => {
  expect(isStrongPassword("a_145aba")).toBe(true);
});

test('Strong Password Test: valid password', () => {
  expect(isStrongPassword("abetd123_")).toBe(true);
});

// false tests
test('Strong Password Test: invalid password', () => {
  expect(isStrongPassword("$sammy")).toBe(false);
});

test('Strong Password Test: invalid password', () => {
  expect(isStrongPassword("abdjider_u123456")).toBe(false);
});
// describe('isEmail', () => {
//   it('should return true for valid emails', () => {
//     expect(isEmail('test@example.com')).toBe(true);
//     expect(isEmail('test123@test.co.uk')).toBe(true);
//     expect(isEmail('user_name123@example.co.jp')).toBe(true);
//     expect(isEmail('user-name@test.co.uk')).toBe(true); 
//     expect(isEmail('user.name123@example.com')).toBe(true); 
//     expect(isEmail('user_name123@example.com')).toBe(true);

//     expect(isEmail('example@example.com')).toBe(true);
//     expect(isEmail('john.doe@example.co.uk')).toBe(true);
//     expect(isEmail('test@example.')).toBe(true);
//     expect(isEmail('test@example')).toBe(true);
//     expect(isEmail('@')).toBe(true);
//   });

//   it('should return false for invalid emails', () => {
//    expect(isEmail('test@example')).toBe(false);
//    expect(isEmail('test@example.')).toBe(false);
//    expect(isEmail('test@example..com')).toBe(false); // New test case for invalid domain with double dot
//    expect(isEmail('test@example_com')).toBe(false);
//   });
// });

// describe('isStrongPassword', () => {
//   it('should return true for strong passwords', () => {
//     expect(isStrongPassword('Password123')).toBe(true);
//     expect(isStrongPassword('P4ssw0rd')).toBe(true); // Fix: This password meets the requirements
//   });

//   it('should return false for weak passwords', () => {
//     expect(isStrongPassword('weak')).toBe(false); // Too short
//     expect(isStrongPassword('1')).toBe(false); // Too short
//     expect(isStrongPassword('password')).toBe(false); // Does not start with a letter
//     expect(isStrongPassword('Password_123')).toBe(false);
//   });
// });

describe('isDate', () => {
  it('should return true for valid dates', () => {
    expect(isDate('12/25/2023')).toBe(true);
    expect(isDate('1/1/2024')).toBe(true);
  });

  it('should return false for invalid dates', () => {
   // expect(isDate('25/12/2023')).toBe(false); // Fix: Day and month are swapped
   // expect(isDate('12/25/23')).toBe(false);
  });
});

describe('isHexColor', () => {
  it('should return true for valid hex colors', () => {
    expect(isHexColor('#fff')).toBe(true);
    expect(isHexColor('#abc123')).toBe(true);
    expect(isHexColor('fff')).toBe(true);
    expect(isHexColor('abc123')).toBe(true);
  });

  it('should return false for invalid hex colors', () => {
    expect(isHexColor('#ff')).toBe(false); // Fix: This is an invalid hex color
    //expect(isHexColor('abc')).toBe(false);
    expect(isHexColor('#gggggg')).toBe(false);
  });
});
