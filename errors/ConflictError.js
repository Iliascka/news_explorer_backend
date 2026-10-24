import { AppError } from "./AppError";
import { HTTP_STATUS } from "./constants";

const { CONFLICT } = HTTP_STATUS;

export class ConflictError extends AppError {
  constructor(message) {
    super(message, CONFLICT);
  }
}
