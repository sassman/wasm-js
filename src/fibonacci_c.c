int fibonacci_c(int n)
{
  if (n <= 1)
    return n;
  return fibonacci_c(n - 1) + fibonacci_c(n - 2);
}