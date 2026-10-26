import { AppError } from "./AppError.js";
import { HTTP_STATUS } from "./constants.js";

const { FORBIDDEN } = HTTP_STATUS;

export class ForbidenError extends AppError {
  constructor(message) {
    super(message, FORBIDDEN);
  }
}
