import { test, expect } from '@playwright/test';

test.describe('Suite API - Rutinas y Ejercicios (Wger API)', () => {

  test('GET /exercise - Debe retornar lista de ejercicios con status 200 y formato válido', async ({ request }) => {
    // IMPORTANTE: Se usa la URL completa para evitar problemas con la barra inicial o redirecciones
    const response = await request.get('https://wger.de/api/v2/exercise/', {
      headers: {
        'Accept': 'application/json'
      }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();

    expect(body.results).toBeDefined();
    expect(Array.isArray(body.results)).toBeTruthy();
    expect(body.results.length).toBeGreaterThan(0);
  });

  test('Validación de Lógica - Cálculo correcto del Volumen Total de Carga', async () => {
    const sets = 4;
    const reps = 10;
    const weightKg = 80;

    const calculatedVolume = sets * reps * weightKg;

    expect(calculatedVolume).toBe(3200);
  });
});