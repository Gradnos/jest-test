import * as strings from "./strings.js";

test("Capitalize empty string", ()=>{
    expect(strings.Capitalize("")).toBe("");
});
test("Capitalize a string", ()=>{
    expect(strings.Capitalize("asdasd")).toBe("Asdasd");
});



test("reverseString empty string", ()=>{
    expect(strings.reverseString("")).toBe("");
});
test("reverseString a string", ()=>{
    expect(strings.reverseString("123dog")).toBe("god321");
});



test("cypher a normal string", ()=>{
    expect(strings.reverseString("defend the east wall of the castle")).toBe("efgfoe uif fbtu xbmm pg uif dbtumf");
});

test("cypher a string with overlapping", ()=>{
    expect(strings.reverseString("zxcqweasdyui")).toBe("echvbjfxidzn");
});