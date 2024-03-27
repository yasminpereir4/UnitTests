import { SumException } from "./errors/sum.exception";

export function sum(a: number, b: number) {
  return a + b;
}

export function div(a: number, b: number) {
  return a / b;
}

export function sumException(a: number, b: number) {
  throw new SumException();
}
