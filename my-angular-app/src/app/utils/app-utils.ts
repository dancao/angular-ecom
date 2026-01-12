// src/app/utils/app-utils.ts
export class AppUtils {

  static formatDate(date: Date | string): string {
    const d = new Date(date);
    return d.toLocaleDateString();
  }

  static capitalize(text: string): string {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  static isNullOrEmpty(value?: string | null): boolean {
    return !value || value.trim() === '';
  }

  static formatMoney(
    amount: number | string,
    currency: string = 'USD',
    locale: string = 'en-US'
  ): string {
    const value = typeof amount === 'string' ? parseFloat(amount) : amount;

    if (isNaN(value)) return '';

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    }).format(value);
  }

  static formatCents(
    cents: number,
    currency: string = 'USD',
    locale: string = 'en-US'
  ): string {
    if (isNaN(cents)) return '';

    const amount = cents / 100;

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    }).format(amount);
  }
}
