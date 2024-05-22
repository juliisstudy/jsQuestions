var compose = function (functions) {
  return (x) => functions.reduceRight((acc, f) => f(acc), x);
};

var compose = function (functions) {
  return function (input) {
    if (functions.length === 0) {
      return input;
    }
    for (const fn of functions.reverse()) {
      input = fn(input);
    }
    return input;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
