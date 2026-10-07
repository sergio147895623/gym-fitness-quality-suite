import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class WorkoutPage extends BasePage {
  readonly exerciseSelect: Locator;
  readonly setsInput: Locator;
  readonly repsInput: Locator;
  readonly weightInput: Locator;
  readonly addExerciseBtn: Locator;
  readonly totalVolumeDisplay: Locator;

  constructor(page: Page) {
    super(page);
    this.exerciseSelect = page.locator('#exercise-select');
    this.setsInput = page.locator('#sets-input');
    this.repsInput = page.locator('#reps-input');
    this.weightInput = page.locator('#weight-input');
    this.addExerciseBtn = page.locator('#add-workout-btn');
    this.totalVolumeDisplay = page.locator('#total-volume');
  }

  async addExerciseLog(exercise: string, sets: number, reps: number, weightKg: number) {
    await this.exerciseSelect.selectOption(exercise);
    await this.setsInput.fill(sets.toString());
    await this.repsInput.fill(reps.toString());
    await this.weightInput.fill(weightKg.toString());
    await this.addExerciseBtn.click();
  }

  async verifyTotalVolume(expectedVolumeKg: number) {
    await expect(this.totalVolumeDisplay).toHaveText(`${expectedVolumeKg} kg`);
  }
}