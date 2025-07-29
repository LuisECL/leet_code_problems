import { test_solution } from "./00-assets"

function mergeAlternately(word1: string, word2: string): string {
  const word1_array = word1.split('')
  const word2_array = word2.split('')
  let result = ''

  while (word1_array.length > 0 && word2_array.length > 0) {
    result = result + word1_array.shift() + word2_array.shift()
  }

  result = result + word1_array.join('') + word2_array.join('')

  return result
};

test_solution(mergeAlternately('abc', 'pqr'), 'apbqcr')
test_solution(mergeAlternately('ab', 'pqrs'), 'apbqrs')
test_solution(mergeAlternately('abcd', 'pq'), 'apbqcd')