class Sieve {
  NthPrime(n) {
    if (!Number.isInteger(n) || n < 0) {
      throw new Error("Index must be a non-negative integer");
    }

    if (n === 0) return 2;

    const m = n + 1;
    const limit = n < 6
      ? 15
      : Math.floor(m * (Math.log(m) + Math.log(Math.log(m)))) + 10;

    const isPrime = new Uint8Array(limit + 1);
    isPrime.fill(1);
    isPrime[0] = 0;
    isPrime[1] = 0;

    let primeCount = 0;

    for (let p = 2; p <= limit; p++) {
      if (isPrime[p] === 1) {
        if (primeCount === n) {
          return p;
        }
        primeCount++;

        if (p * p <= limit) {
          for (let i = p * p; i <= limit; i += p) {
            isPrime[i] = 0;
          }
        }
      }
    }

    throw new Error("Limit exceeded without finding the Nth prime.");
  }
}

module.exports = Sieve;
