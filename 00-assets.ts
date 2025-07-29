type TestSolution<T> = (test: T, expected_result: T) => {
  success: boolean,
  result: T,
  expected: T
}

export const test_solution: TestSolution<any> = (test, expected_result) => {
  const res = {
    success: test === expected_result,
    result: test,
    expected: expected_result
  }

  console.log(res)
  return res
}