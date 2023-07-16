const and = (...andArgs): boolean => {
  return andArgs.every((arg) => !!arg);
};

const or = (...orArgs): boolean => {
  return orArgs.some((arg) => !!arg);
};

const con = <T, K>(condition: boolean, ifTrue: T, ifFalse: K): T | K => {
  return condition ? ifTrue : ifFalse;
};

export { and, or, con };
