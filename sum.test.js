const calc=require("./sum");

test("add 1 and 3 should return 4",()=>{

  expect(calc.sum(1,3)).toBe(4);
  expect(calc.sum(1,3)).not.toBe(2);
});

test("div  3.0008 with 1.00086 should return equivalent to 2.9",()=>
{
  //console.log(calc.div(3.0008,1.00086));
  expect(calc.div(3.0008,1.00086)).toBeCloseTo(3);
 // expect(calc.div(3.0008,"ji")).toBeCloseTo(2.9,-2);
});
test("div not a number should throw ERROR it's Not a number",()=>
{
  expect(()=>calc.div("hello","hi")).toThrow(Error);
});
test("div where second param is not a number should throw ERROR it's Not a number",()=>
{
  expect(()=>calc.div(82,"hi")).toThrow("it's Not a number");
});
test("div by zero should throw Error",()=>
{
  expect(()=>calc.div(25,0)).toThrow(Error);
});

test("multiply 5 and 4 should return 20",()=>
{
  expect(calc.multiplication(5,4)).toBe(20);
})



test ("Matching JavaScript Object",()=>{
expect({name:"Hari",second:2})
});