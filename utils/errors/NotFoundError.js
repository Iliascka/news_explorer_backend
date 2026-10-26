import { AppError } from "./AppError.js";
import { HTTP_STATUS } from "./constants.js";

const { NOT_FOUND } = HTTP_STATUS;

export class NotFoundError extends AppError {
  constructor(message) {
    super(message, NOT_FOUND);
  }
}
