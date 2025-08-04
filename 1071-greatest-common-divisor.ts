import { test_solution } from "./00-assets"

function gcdOfStrings(str1: string, str2: string): string {
  const long_str = str1.length >= str2.length ? str1 : str2
  const short_str = str2.length <= str1.length ? str2 : str1
  let max_possible_length = short_str.length
  let min_possible_length = 1

  if (long_str.substring(0, short_str.length) !== short_str) return ''

  while (min_possible_length <= max_possible_length) {
    if (long_str.length % max_possible_length !== 0) {
      max_possible_length = max_possible_length - 1
    } else {
      const string_to_test = short_str.substring(0, max_possible_length)

      const repeated_on_short_string = short_str === string_to_test.repeat(short_str.length / max_possible_length)
      const repeated_on_long_string = long_str === string_to_test.repeat(long_str.length / max_possible_length)
      if (repeated_on_short_string && repeated_on_long_string) {
        return short_str.substring(0, max_possible_length)
      } else {
        max_possible_length = max_possible_length - 1
      }
    }
  }

  return ''
}

test_solution(gcdOfStrings('ABCABC', 'ABC'), 'ABC')
test_solution(gcdOfStrings('ABABAB', 'ABAB'), 'AB')
test_solution(gcdOfStrings('LEET', 'CODE'), '')
test_solution(gcdOfStrings('ABCDEF', 'ABC'), '')
test_solution(gcdOfStrings('TAUXXTAUXXTAUXXTAUXXTAUXX', 'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX'), 'TAUXX')

