function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z\u00E0-\u00FC]{0,}/gi);
//   document.write(array1);
  var result = array1[0];
//   document.write(result); 

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
// console.log(find_longest_word('Tutorial Développement Web'));
document.write(find_longest_word('Tutorial Développement Web'));