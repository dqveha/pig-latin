Describe: pigLatin()

<!-- Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away" -->
<!--
Test: "It will add 'way' to the end of words that begin with a vowel regardless of case."
Code: pigLatin("A");
Expected Output: "Away" -->

<!-- Test: "It will add 'ay' to the end of words that begin with a consonant."
Code: pigLatin("ze");
Expected Output: "ezay" -->

<!-- Test: "It will add 'ay' to the end of words that begin with a consonant regardless of case."
Code: pigLatin("Ze");
Expected Output: "eZay" -->

Test: "It will add 'ay' to the end of words that begin with two consecutive consonants."
Code: pigLatin("zs");
Expected Output: "zsay"

Test: "It will add 'ay' to the end of words that begin with three consecutive consonants."
Code: pigLatin("zsw");
Expected Output: "zsway"

Test: "It will add 'ay' to the end of words that begin with 'qu'."
Code: pigLatin("quick");
Expected Output: "ickquay"

Test: "It will add 'ay' and 'way' respectively to vowels and consonants with multiple words in an entry."
Code: pigLatin("hello amy");
Expected Output: "ellohay amyway"

<!-- code = "c"ode
code = "cay"ode
code = ode"cay"

vs

code = "c"ode
code = ode"c"
code = ode"cay" -->

<!-- Describe: vowelCounter();

Test: "It recognizes a single vowel."
Code: vowelCounter("a");
Expected Output: 1

Test: "It recognizes a single vowel regardless of case."
Code: vowelCounter("A");
Expected Output: 1

Test: "It recognizes a single vowel in a word with multiple characters."
Code: vowelCounter("cat");
Expected Output: 1

Test: "It recognizes multiple vowels in a single word."
Code: vowelCounter("cater");
Expected Output: 2

Test: "It recognizes vowels in a multiple-word sentence."
Code: vowelCounter("cats catered the event");
Expected Output: 7

Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
Code: vowelCounter("CATS CATERED THE EVENT");
Expected Output: 7

Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
Code: vowelCounter("CaTS CATEReD ThE EveNT");
Expected Output: 7

Test: "It ignores non-alphabetical characters since they can't be vowels."
Code: vowelCounter("\*&$92%");
Expected Output: 0 -->
