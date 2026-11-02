import { AppError } from "./AppError.js";
import { HTTP_STATUS } from "./constants.js";

const { UNAUTHORIZED } = HTTP_STATUS;

// Use when authentication is missing or invalid.
export class UnauthorizedError extends AppError {
  constructor(message) {
    super(message, UNAUTHORIZED);
  }
}
