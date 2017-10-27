characters = [
  {
    comics: 'Marvel',
    height: 1.78,
    link: [
      'http://marvel.com/characters/54/spider-man', 
      'http://marvel.com/universe/Spider-Man_(Peter_Parker)'
    ],
    name: 'Spider-Man',
    realName: 'Peter Benjamin Parker',
    weight: 76
  },
  {
    comics: 'Marvel',
    height: 2.44,
    link: [
      'http://marvel.com/characters/25/hulk',
      'http://marvel.com/universe/Hulk_(Bruce_Banner)'
    ],
    name: 'Hulk',
    realName: 'Robert Bruce Banner',
    weight: 635
  },
  {
    comics: 'DC',
    height: 1.91,
    link: [
      'http://www.dccomics.com/characters/superman',
      'http://dc.wikia.com/wiki/Superman_(Clark_Kent)'
    ],
    name: 'Superman',
    realName: 'Clark Joseph Kent',
    weight: 107
  },  
  {
    comics: 'DC',
    height: 1.88,
    link: [
      'http://www.dccomics.com/characters/batman',
      'http://dc.wikia.com/wiki/Bruce_Wayne_(New_Earth)'
    ],
    name: 'Batman',
    realName: 'Bruce Wayne',
    weight: 95
  }
  // TODO bad guys, villain
]


function names(characters, n) {
	dc = characters.filter(c => c.comics == n)
	result =dc.map(names => names.name)
  return result
}

function weight(characters, n) {
  	dc = characters.filter(c => c.comics == n)
	//console.log(dc)
	result = dc.reduce((total, peso) => total + peso.weight, 0)
  return result/dc.length
}

function namesTopWeight(characters, n){
	
	dc = characters.filter(c => c.comics == n)
	or = dc.sort(function(a, b) {
		if(a.weight>b.weight){ return -1}
		else if (a.weight<b.weight){ return 1}
		else if (a.weight==b.weight){ return 0}
	})
	result = or.map(names => names.name)
	 
  return result
}

//console.log(namesTopWeight(characters, n))

module.exports = {
  names,
  weight, 
  namesTopWeight
}