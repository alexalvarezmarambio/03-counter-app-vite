/* eslint-disable no-undef */

import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funcioes", () => {
  test("getUser debe devolver un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect( testUser ).toEqual( user );
  });

  test('getUsuarioActivo debe retornar un objeto', () => {
    const nombre = 'Fernando';
    const user = getUsuarioActivo(nombre);

    expect( nombre ).toEqual( user.username );
  })
});
