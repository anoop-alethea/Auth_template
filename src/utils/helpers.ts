// Format dates nicely
export function formatDate(date: Date | string): string {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  
  // Capitalize the first letter of a string
  export function capitalize(text: string): string {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  
  // Shorten large numbers (like Stripe invoices)
  export function formatCurrency(amount: number, currency = "USD"): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(amount / 100); // Stripe uses cents
  }
  