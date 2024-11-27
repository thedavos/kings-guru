// server/utils/errors.ts

import { H3Error } from 'h3';

export function createNotFoundError(resource: string): H3Error {
  return createError({
    statusCode: 404,
    statusMessage: 'Not Found',
    data: {
      resource,
    },
  });
}

export function isNotFoundError(error: unknown): error is H3Error {
  return error instanceof H3Error && error.statusCode === 404;
}
