import { AppError } from "./AppError.js";
import { HTTP_STATUS } from "./constants.js";

const { UNAUTHORIZED } = HTTP_STATUS;

export class UnauthorizedError extends AppError {
  constructor(message) {
    super(message, UNAUTHORIZED);
  }
}
