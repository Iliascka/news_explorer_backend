import winston from "winston";
import expressWinston from "express-winston";
import DailyRotateFile from "winston-daily-rotate-file";

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
    //Rotates log files daily or at 10MB and retains them for 14 days
    new DailyRotateFile({
      //Saves logs in the logs/ folder, with a seperate filename for each date.
      filename: "logs/request-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      maxSize: "10m",
      maxFiles: "14d",
      format: winston.format.json(),
    }).on("error", (error) => {
      //Event Listener: callback displays request file transport errors.
      console.error("Request log file error", error);
    }),
  ],
});

const errorLogger = expressWinston.errorLogger({
  requestWhitelist: ["method"],
  transports: [
    new winston.transports.Console({
      format: messageFormat,
    }),

    new DailyRotateFile({
      filename: "logs/error-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      maxSize: "10m",
      maxFiles: "14d",
      format: winston.format.json(),
    }).on("error", (error) => {
      console.error("Error log file error", error);
    }),
  ],
});

//Logs uncaught exceptions before the Node.js process exits
winston.exceptions.handle(
  new DailyRotateFile({
    filename: "logs/exceptions-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    maxSize: "10m",
    maxFiles: "14d",
    format: winston.format.json(),
  }).on("error", (error) => {
    console.error("Error log file error", error);
  }),
);

export { requestLogger, errorLogger };
