// Common types used across the application

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
