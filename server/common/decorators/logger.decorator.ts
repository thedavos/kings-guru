import 'reflect-metadata';
import { container } from 'tsyringe';
import { LoggerService } from 'server/common/services/logger.service';

export function Logger(context?: string) {
  return function (target: FunctionConstructor) {
    const logger = container.resolve(LoggerService);
    if (context) {
      logger.setContext(context);
    }

    target.prototype.logger = logger;
  };
}
