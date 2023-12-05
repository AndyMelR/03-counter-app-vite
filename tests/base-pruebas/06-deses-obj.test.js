import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("teste de 06-deses-obj", () => {
    test('usContext debe devolver un objeto', () => {

        const characterTest = {
            clave: 'Ironman',
            edad: 45
        };

        // Llamar a usContext con el objeto correcto
        const character = usContext({ clave: 'Ironman', nombre: 'Tony Stark', edad: 45 });

        // Objeto esperado como resultado de usContext
        const expectedCharacter = {
            nombreClave: 'Ironman',
            anios: 45,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };

        // Comparar el objeto devuelto con el objeto esperado
        expect(character).toEqual(expectedCharacter);
    });
});

  