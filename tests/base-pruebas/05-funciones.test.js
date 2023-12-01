import { getUser } from "../../src/base-pruebas/05-funciones";
import { getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
     test('getUser debe de retornar un objeto', ()=>{
        //inicializamos
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502' 
        };

        //estimulo qu edispare
        const user = getUser();
        console.log(user)

        // observamos la respuesta
        expect( testUser).toEqual( user );


     });
    
    
    });

    test('getUsuarioActivo debe de retornar un objeto', () => {

        const name = 'Fernando';
    
        const user = getUsuarioActivo(name);
        console.log(name);

     expect( user ).toStrictEqual({
        uid: 'ABC567',
        username: name
     })

    })