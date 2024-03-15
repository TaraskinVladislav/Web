function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function alertPrimesUpToN(n) {
  let primes = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  alert("Простые числа от 2 до " + n + ": " + primes.join(", "));
}

// Пример использования для n = 10
alertPrimesUpToN(10);
