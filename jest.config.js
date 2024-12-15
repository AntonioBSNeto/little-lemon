export default {
  preset: 'ts-jest',
  testEnvironment: "jest-fixed-jsdom",
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json', // Usa o tsconfig específico para testes
    },
  }
};