import { AppError } from "./AppError.js";
import { HTTP_STATUS } from "./constants.js";

const { CONFLICT } = HTTP_STATUS;

// Use when a request conflicts with the current resource state, such as a duplicate.
export class ConflictError extends AppError {
  constructor(message) {
    super(message, CONFLICT);
  }
}
