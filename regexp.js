/**
 *  MATCH DUPLICATES
 *
 *  /: The start of the regular expression pattern.
 *  ([^]): The first capturing group matches any character except for a line break. 
 *  The ^ inside the square brackets negates the character class, making it match any character that is not in the set, which is empty here. 
 *  The ) closes the capturing group.
 *  \1+: Matches one or more occurrences of the same character as captured by the first group.
 *  /: The end of the regular expression pattern.
 *  g: This flag indicates that the pattern should be applied globally, 
 *  which means that it will match all occurrences in the input string rather than just the first one.
 **/
const duplicates = "some string".match(/([^])\1+/g) 




