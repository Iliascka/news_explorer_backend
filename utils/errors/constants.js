export const HTTP_STATUS = {
  BAD_REQUEST: 400,
  // The request is invalid or malformed.
  UNAUTHORIZED: 401,
  // Authentication is required or invalid.
  FORBIDDEN: 403,
  // The user is authenticated but not allowed to access the resource.
  NOT_FOUND: 404,
  // The requested resource does not exist.
  CONFLICT: 409,
  // The request conflicts with the current resource state.
  SERVER_ERROR: 500,
  // The server encountered an unexpected error.
};
