// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('This a real phone number a', () =>{
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});
test('This a real phone number b', () =>{
    expect(functions.isPhoneNumber("(123)-456-7890")).toBe(true);
});
test('This not a real phone number a', () =>{
    expect(functions.isPhoneNumber("123-456-789")).toBe(false);
});
test('This not a real phone number b', () =>{
    expect(functions.isPhoneNumber("123-456-789a")).toBe(false);
});;

test('This a real email a', () =>{
    expect(functions.isEmail("a@b.cd")).toBe(true);
});
test('This a real email b', () =>{
    expect(functions.isEmail("myEmail123@ucsd.edu")).toBe(true);
});
test('This not a real email a', () =>{
    expect(functions.isEmail("a@b.c")).toBe(false);
});
test('This not a real email b', () =>{
    expect(functions.isEmail("a@2.cd")).toBe(false);
});

test('This is a strong password a', () =>{
    expect(functions.isStrongPassword("a123")).toBe(true);
});
test('This is a strong password b', () =>{
    expect(functions.isStrongPassword("a___")).toBe(true);
});
test('This is not a strong password a', () =>{
    expect(functions.isStrongPassword("1a234")).toBe(false);
});
test('This is not a strong password b', () =>{
    expect(functions.isStrongPassword("a@@@@")).toBe(false);
});

test('This is a date a', () =>{
    expect(functions.isDate("2/30/2021")).toBe(true);
});
test('This is a date b', () =>{
    expect(functions.isDate("0/0/0000")).toBe(true);
});
test('This is not a date a', () =>{
    expect(functions.isDate("1/1/1")).toBe(false);
});
test('This is not a date b', () =>{
    expect(functions.isDate("000/1/2021")).toBe(false);
});

test('This is a hex color a', () =>{
    expect(functions.isHexColor("aaaaaa")).toBe(true);
});
test('This is a hex color b', () =>{
    expect(functions.isHexColor("1a2b3c")).toBe(true);
});
test('This is not a hex color a', () =>{
    expect(functions.isHexColor("a")).toBe(false);
});
test('This is not a hex color b', () =>{
    expect(functions.isHexColor("@")).toBe(false);
});