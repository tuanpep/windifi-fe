import { describe, expect, it } from 'vitest';
import {
  capitalize,
  cn,
  formatCurrency,
  formatNumber,
  generateId,
  isValidEmail,
  slugify,
  truncate,
} from '../common';

describe('String Utilities', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('WORLD')).toBe('World');
      expect(capitalize('test string')).toBe('Test string');
    });

    it('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });
  });

  describe('truncate', () => {
    it('should truncate string to specified length', () => {
      expect(truncate('Hello World', 5)).toBe('Hello...');
      expect(truncate('Short', 10)).toBe('Short');
      expect(truncate('Very Long String', 8)).toBe('Very Lon...');
    });

    it('should handle empty string', () => {
      expect(truncate('', 5)).toBe('');
    });
  });

  describe('slugify', () => {
    it('should convert string to slug format', () => {
      expect(slugify('Hello World')).toBe('hello-world');
      expect(slugify('Test String 123')).toBe('test-string-123');
      expect(slugify('Special@Characters!')).toBe('specialcharacters');
      expect(slugify('Multiple   Spaces')).toBe('multiple-spaces');
    });

    it('should handle empty string', () => {
      expect(slugify('')).toBe('');
    });
  });
});

describe('Number Utilities', () => {
  describe('formatNumber', () => {
    it('should format numbers with default decimals', () => {
      expect(formatNumber(1234.5678)).toBe('1,234.57');
      expect(formatNumber(1000)).toBe('1,000.00');
      expect(formatNumber(0)).toBe('0.00');
    });

    it('should format numbers with custom decimals', () => {
      expect(formatNumber(1234.5678, 1)).toBe('1,234.6');
      expect(formatNumber(1234.5678, 0)).toBe('1,235');
    });
  });

  describe('formatCurrency', () => {
    it('should format currency with default USD', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56');
      expect(formatCurrency(1000)).toBe('$1,000.00');
    });

    it('should format currency with custom currency', () => {
      expect(formatCurrency(1234.56, 'EUR')).toBe('€1,234.56');
    });
  });
});

describe('Validation Utilities', () => {
  describe('isValidEmail', () => {
    it('should validate correct email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
      expect(isValidEmail('user+tag@example.org')).toBe(true);
    });

    it('should reject invalid email addresses', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });
  });
});

describe('ID Generation', () => {
  describe('generateId', () => {
    it('should generate unique IDs', () => {
      const id1 = generateId();
      const id2 = generateId();

      expect(id1).toBeDefined();
      expect(id2).toBeDefined();
      expect(id1).not.toBe(id2);
      expect(typeof id1).toBe('string');
      expect(id1.length).toBeGreaterThan(0);
    });
  });
});

describe('Class Name Utilities', () => {
  describe('cn', () => {
    it('should combine class names', () => {
      expect(cn('class1', 'class2')).toBe('class1 class2');
      expect(cn('class1', false && 'class2', 'class3')).toBe('class1 class3');
      expect(cn('class1', true && 'class2')).toBe('class1 class2');
    });

    it('should handle conditional classes', () => {
      expect(cn('base', { conditional: true })).toBe('base conditional');
      expect(cn('base', { conditional: false })).toBe('base');
    });
  });
});
