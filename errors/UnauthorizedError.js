import { AppError } from "./AppError";
import { HTTP_STATUS } from "./constants";

const { UNAUTHORIZED } = HTTP_STATUS;

export class UnauthorizedError extends AppError {
  constructor(message) {
    super(message, UNAUTHORIZED);
  }
}
