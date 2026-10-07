# 🏋️ Gym Fitness Quality Suite

Suite de automatización de pruebas de software (End-to-End y API) diseñada para la gestión y seguimiento de rutinas de entrenamiento físico. Proyecto estructurado bajo estándares de la industria para portafolio técnico en aseguramiento de calidad (QA Automation).

---

## 🛠️ Tecnologías y Herramientas

* **Lenguaje:** TypeScript
* **Framework E2E & API:** [Playwright](https://playwright.dev/)
* **Patrón de Diseño:** Page Object Model (POM)
* **Reportería:** [Allure Report](https://allurereport.org/)
* **Integración Continua:** GitHub Actions
* **Gestión de Versiones:** Git & GitHub

---

## 📁 Arquitectura del Proyecto

```text
gym-fitness-quality-suite/
├── .github/workflows/    # Pipelines de CI/CD (GitHub Actions)
├── pages/               # Page Object Model (Locators y Acciones UI)
│   ├── base.page.ts
│   ├── login.page.ts
│   └── workout.page.ts
├── tests/               # Casos de Prueba
│   ├── api/             # Pruebas de integración API (Wger API)
│   │   └── exercises-api.spec.ts
│   └── e2e/             # Pruebas de interfaz de usuario E2E
│       ├── login.spec.ts
│       └── workout.spec.ts
├── utils/               # Funciones auxiliares y lógica de negocio
│   └── calculations.ts
├── data/                # Fixtures y datos de prueba en JSON
│   └── workout-data.json
├── playwright.config.ts # Configuración global de Playwright
└── package.json         # Dependencias y scripts ejecutable
