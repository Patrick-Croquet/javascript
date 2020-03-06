let start = 'Bonjour ',
    name, end = ' !',
    result;
name = prompt('Quel est votre prénom ?');
result = start + name + end;
alert(result); // Affiche Bonjour Patrick !

console.log(result);

// document.write(result);
document.open();
document.write(result);
document.close();