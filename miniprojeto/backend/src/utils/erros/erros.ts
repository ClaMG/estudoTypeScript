export class AppError {
  constructor(
    public readonly message: string,
    public readonly statusCode: number = 400
  ) {}
}

export class NotFoundError extends AppError {
  constructor(message: string) {
    super(message, 404);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string) {
    super(message, 401);
  }
}