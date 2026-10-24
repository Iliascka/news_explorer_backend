import { AppError } from "./AppError";
import { HTTP_STATUS } from "./constants";

const { NOT_FOUND } = HTTP_STATUS;

export class NotFoundError extends AppError {
  constructor(message) {
    super(message, NOT_FOUND);
  }
}
