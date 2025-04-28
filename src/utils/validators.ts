// Validate email format
export function isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // Validate password strength
  export function isStrongPassword(password: string): boolean {
    // At least 8 chars, one uppercase, one lowercase, one number
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }
  
  // Validate that two passwords match
  export function doPasswordsMatch(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
  }
  