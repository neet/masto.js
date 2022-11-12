function lift<T, U1>(
  f: (a: U1) => AsyncIterator<T>,
): (a: U1) => Promise<IteratorResult<T>>;
function lift<T, U1, U2>(
  f: (a: U1, b: U2) => AsyncIterator<T>,
): (a: U1, b: U2) => Promise<IteratorResult<T>>;
function lift<T, U1, U2, U3>(
  f: (a: U1, b: U2, c: U3) => AsyncIterator<T>,
): (a: U1, b: U2, c: U3) => Promise<IteratorResult<T>>;
function lift<T, U1, U2, U3, U4>(
  f: (a: U1, b: U2, c: U3, d: U4) => AsyncIterator<T>,
): (a: U1, b: U2, c: U3, d: U4) => Promise<IteratorResult<T>>;
function lift<T, U>(f: (...args: U[]) => AsyncIterator<T>) {
  return (...params: U[]): Promise<IteratorResult<T>> => {
    return f(...params).next();
  };
}

export { lift };
