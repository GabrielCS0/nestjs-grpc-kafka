export class ProductNotFoundError extends Error {
  constructor() {
    super('This product does not exist.');
    this.name = 'ProductNotFoundError';
  }
}
