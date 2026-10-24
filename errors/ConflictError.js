import { AppError } from "./AppError";
import { HTTP_STATUS } from "./constants";

const { CONFLICT } = HTTP_STATUS;

export class CoflictError extends AppError {
  constructor(message) {
    super(message, CONFLICT);
  }
}
