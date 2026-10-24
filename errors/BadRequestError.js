import { AppError } from "./AppError";
import { HTTP_STATUS } from "./constants";
const { BAD_REQUEST } = HTTP_STATUS;

export class BadRequestError extends AppError {
  constructor(message) {
    super(message, BAD_REQUEST);
  }
}
