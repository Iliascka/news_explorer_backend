import { AppError } from "./AppError.js";
import { HTTP_STATUS } from "./constants.js";

const { FORBIDDEN } = HTTP_STATUS;

// Use when an authenticated user does not have permission to perform an action.
export class ForbidenError extends AppError {
  constructor(message) {
    super(message, FORBIDDEN);
  }
}
