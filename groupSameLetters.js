let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
function groupAnagrams(strs) {
  
 const map = new Map();


  for (let word of strs) {
    let key = word.split('').sort().join('');

    if (map.has(key)) {   //if key alredy exists
      map.get(key).push(word);
    } else {                //create new arr with key
      map.set(key, [word]);
    }
  }

  return Array.from(map.values());
    
}

console.log(groupAnagrams(strs));
