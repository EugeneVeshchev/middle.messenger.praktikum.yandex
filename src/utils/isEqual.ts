import { isArrayOrObject } from './isArrayOrObject';
import { PlainObject } from '../global-definition';

export function isEqual(lhs: PlainObject, rhs: PlainObject) {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key];
    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      // @ts-ignore
      if (isEqual(value, rightValue)) {
        // eslint-disable-next-line no-continue
        continue;
      }
      return false;
    }

    if (value !== rightValue) {
      return false;
    }
  }

  return true;
}
