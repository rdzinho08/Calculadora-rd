const {somar,subtrair, multiplicar, dividir } = require("./calculadora");


/* --------- SOMA ------------- */
describe("somar",()=>{
  test("soma dois numeros corretamente",() =>{
    expect(soma(8,9)).toBe(17);
  })
});

test("somar com numeros negativos",()=>{
  expect(somar(-8,9)).toBe(1);
});




/* ------ SUBTRAIR ------ */
describe("subtrair",()=>{
  test("subtrair dois numeros corretamente",()=>{
    expect(subtrair(10,5)).toBe(5);
  });
});

test("subtrairnumeros negativos",()=>{
  expect(subtrair(-5,-3)).toBe(-2)
});





describe("multiplicar", () => {
  test("multiplica dois números e ver se o resultado esta correto", () => {
    expect(multiplicar(3, 4)).toBe(12);
  });

  test("qualquer número multiplicado por zero e zero", () => {
    expect(multiplicar(5, 0)).toBe(0);
  });
});

describe("teste de divisão", () => {
  test("divide dois números", () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test("lança erro ao dividir por zero", () => {
    expect(() => dividir(10, 0)).toThrow("Divisão por zero não é permitida");
  });
});