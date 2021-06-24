export default function queryStringify<TData = any>(data?: TData): string {
  if (!data) return '';
  // Можно делать трансформацию GET-параметров в отдельной функции
  return `?${Object.entries(data)
    .map(([key, value]) => `${key}=${String(value)}`).join('&')}`;
}
