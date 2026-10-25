import { AppError } from "./AppError.js";
import { HTTP_STATUS } from "./constants.js";

const { CONFLICT } = HTTP_STATUS;

export class ConflictError extends AppError {
  constructor(message) {
    super(message, CONFLICT);
  }
}
