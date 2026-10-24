import { AppError } from "./AppError";
import { HTTP_STATUS } from "./constants";

const { FORBIDDEN } = HTTP_STATUS;

export class ForbidenError extends AppError {
  constructor(message) {
    super(message, FORBIDDEN);
  }
}
