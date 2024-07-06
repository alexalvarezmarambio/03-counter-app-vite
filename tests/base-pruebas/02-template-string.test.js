/* eslint-disable no-undef */

import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template', () => {
  test('getSaludo debe retornar', () => {
    const name = 'Alex';
    const message = getSaludo(name);

    expect(message).toBe('Hola Alex');
  })
})