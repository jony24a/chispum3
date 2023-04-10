const chispum = require("./chispum")

describe("chispum", ()=>{
    test("Deberia escribir 1 y dar un ok si recibe un 1 de vuelta", ()=>{
        const expected = 1;
        const result = chispum(1);
        expect(expected).toBe(result);
    });
    test("Deberia recibir un chis, cuando le envie un multiplo de 3", ()=>{
        const expected = "chis";
        const result = chispum(3);
        expect(expected).toBe(result);
    });
    test("Deberia recibir un pum, cuando le envie un multiplo de 5", ()=>{
        const expected = "pum";
        const result = chispum(5);
        expect(expected).toBe(result);
    });
    test("Deberia recibir un chispum, cuando le envie un multiplo de 3 y de 5", ()=>{
        const expected = "chispum";
        const result = chispum(15);
        expect(expected).toBe(result);
    });
});
