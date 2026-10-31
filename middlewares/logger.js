import winston from "winston";
import expressWinston from "express-winston";

const messageFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.printf(
    ({ level, message, meta, timestamp }) =>
      `${timestamp} ${level}: ${meta?.error?.stack || message}`,
  ),
);

const requestLogger = expressWinston.logger({
  requestWhitelist: ["method"],
  responseWhiteList: ["statusCode"],
  msg: "HTTP {{req.method}} {{req.path}} {{res.statusCode}}",
  transports: [
    new winston.transports.Console({
      format: messageFormat,
    }),
    new winston.transports.File({
      filename: "request.log",
      format: winston.format.json(),
    }),
  ],
});

const errorLogger = expressWinston.errorLogger({
  requestWhitelist: ["method"],
  transports: [
    new winston.transports.Console({
      format: messageFormat,
    }),

    new winston.transports.File({
      filename: "error.log",
      format: winston.format.json(),
    }),
  ],
});

export { requestLogger, errorLogger };
