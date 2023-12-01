describe('pruebas en <DemoComponent />', () => {
  
    test('Esta prueba no debe de fallar', () =>{
    //1.Inicialización
        const message1 = 'Hola Mundo';
        
        //2. estimulo
        const message2 = message1.trim();// limpiamos espacios
        
        // 3.aserciones. Observar el comportamiento
        
        expect( message1 ).toBe( message2 );
    })
})
