import { AppError } from "./AppError";
import { HTTP_STATUS } from "./constants";

const { SERVER_ERROR } = HTTP_STATUS;

export class ServerError extends AppError {
  constructor(message) {
    super(message, SERVER_ERROR);
  }
}
