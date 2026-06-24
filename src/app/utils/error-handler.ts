export class ErrorHandler {
  static handle(error: any): string {
    if (error.status === 404) {
      return 'Transactions not found';
    }
    return 'An error occurred';
  }
}