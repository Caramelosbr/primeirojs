let heroes = [];

function namehero( name ){
    return name;
}
function xphero( xp ){
    return xp * 5;
}
function categoryhero(xp){
  if(xp <= 1000){
    return "iron";
  }else if( xp >= 1001 && xp <2000){
      return "bronze";
  }  else if(xp >= 2001 && xp <6000){
      return "silver";
  }  else if(xp >= 6001 && xp <7000){
      return "gold";
  }  else if(xp >= 7001 && xp <8000){
      return "platinum";
  }  else if(xp >= 8001 && xp <9000){
      return "ascedent";
  } else if(xp >= 9001 && xp <10000){
      return "Imortal";
  }  else if(xp >= 10000){
      return "radiante";
  }
}
function calculator(xp) {
  return xphero(xp);
}

function addhero(name, xp) {
  const finalXp = xphero(xp);

  heroes.push({
    name: namehero(name),
    xp: finalXp,
    category: categoryhero(finalXp)
  });
}

function showHeroes() {
  heroes.forEach(hero => {
    console.log(`O heroi de nome: ${hero.name} 
    da categoria: ${hero.category}
    possui nivel de:${hero.xp} xp  `);
  });
}

addhero("Noctis", 22);
addhero("Arthur", 500);
addhero("luccas", 100);

showHeroes();


