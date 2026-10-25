import { AppError } from "./AppError.js";
import { HTTP_STATUS } from "./constants.js";

const { SERVER_ERROR } = HTTP_STATUS;

export class ServerError extends AppError {
  constructor(message) {
    super(message, SERVER_ERROR);
  }
}
