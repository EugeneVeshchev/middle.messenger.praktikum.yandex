import { isPlainObject } from './isPlainObject';
import { isArray } from './isArray';
import { PlainObject } from '../global-definition';

export function isArrayOrObject(value: unknown): value is ([] | PlainObject) {
  return isPlainObject(value) || isArray(value);
}
