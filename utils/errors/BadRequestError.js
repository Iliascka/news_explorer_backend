import { AppError } from "./AppError.js";
import { HTTP_STATUS } from "./constants.js";
const { BAD_REQUEST } = HTTP_STATUS;

// Use when request data is missing, malformed, or invalid.
export class BadRequestError extends AppError {
  constructor(message) {
    super(message, BAD_REQUEST);
  }
}
