/* 
1. make a call to https://api.github.com/user
  a. find name from response
2. make a call to https://api.github.com/users/iamthecry/repos
  a. returns an array of all user repos
3. for each repo count all commits made by owner name

All calls must be done async, upon finishing all requests have the function add up all the number of commits
*/