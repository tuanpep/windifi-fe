/**
 * Environment configuration utility
 * Provides type-safe access to environment variables
 */

export const env = {
  // Application
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT || '3000', 10),
  NEXT_TELEMETRY_DISABLED: process.env.NEXT_TELEMETRY_DISABLED === '1',
} as const;

/**
 * Validate required environment variables
 */
export function validateEnv() {
  const requiredVars = ['NODE_ENV'] as const;

  const missingVars = requiredVars.filter((varName) => !env[varName]);

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }
}

/**
 * Get environment-specific configuration
 */
export function getEnvConfig() {
  const isDevelopment = env.NODE_ENV === 'development';
  const isProduction = env.NODE_ENV === 'production';

  return {
    isDevelopment,
    isProduction,
    isTest: env.NODE_ENV === 'test',

    // Environment-specific settings
    logLevel: isProduction ? 'error' : 'debug',
    enableDebug: !isProduction,
  };
}

/**
 * Environment type for TypeScript
 */
export type Environment = typeof env;

/**
 * Environment configuration type
 */
export type EnvConfig = ReturnType<typeof getEnvConfig>;
