import { test } from '@playwright/test';
import { WorkoutPage } from '../../pages/workout.page';

test.describe('Suite E2E - Registro de Entrenamiento', () => {
  let workoutPage: WorkoutPage;

  test.beforeEach(async ({ page }) => {
    workoutPage = new WorkoutPage(page);
    // Para demostración se utiliza una URL pública de prueba/mock
    await workoutPage.navigateTo('https://saucedemo.com'); 
  });

  test('Debe calcular el volumen total correctamente al agregar Press de Banca', async () => {
    // Ejemplo de flujo estructurado con POM
    // await workoutPage.addExerciseLog('Press de Banca', 4, 10, 80);
    // await workoutPage.verifyTotalVolume(3200);
  });
});