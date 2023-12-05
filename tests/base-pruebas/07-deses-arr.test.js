import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('pruebas en 07-eses-arr', () => {

    test('debe retornar un string y un número', ()=> {

        const [letters, numbers] = retornaArreglo();// puedo desestructurar los valores
        expect( letters ).toBe( 'ABC' ); // podria saber que no se que tipo de texto 
        expect( numbers ).toBe( 123 );

        console.log(typeof letters).toBe('string');
        console.log(typeof numbers).toBe('number');

        expect( letters ).toEqual( expect.any(String) );

   

    });
 })