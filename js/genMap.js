const maps = document.getElementById('maps');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getIndeces(length, arrLength) {
    var arr = [];
    while(arr.length < length){
        var r = Math.floor(Math.random() * arrLength);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}

const fetchMaps = (bound) => {
    const allMaps = [
        "Mother's Dwelling",
        "Shelter Woods",
        "Disturbed Ward",
        "Azarov's Resting Place",
        "Blood Lodge",
        "Torment Creek",
        "Lampkin Lane",
        "Grim Pantry",
        "Gas Heaven",
        "Wretched Shop",
        "The Pale Rose",
        "Ironworks of Misery",
        "Suffocation Pit",
        "Rotten Fields",
        "Groaning Storehouse",
        "Fractured Cowshed",
        "The Temple of Purgation",
        "Family Residence",
        "Sanctum of Wrath",
        "Mount Ormond Resort",
        "The Thompson House",
        "Badham Preschool V",
        "Wreckers' Yard",
        "Badham Preschool I",
        "Badham Preschool II",
        "Badham Preschool III",
        "The Game",
        "Father Campbell's Chapel",
        "Badham Preschool IV",
        "Rancid Abattoir",
        "Dead Dawg Saloon",
        "Coal Tower"
    ];
    
    var indeces = getIndeces(2, allMaps.length);
    
    return displayMaps([allMaps[indeces[0]], allMaps[indeces[1]]]);
};

const displayMaps = (allMaps) => {
    const map_1 = '<li class="list-group-item list-group-item-warning">'+allMaps[0]+'</li>';
    const map_2 = '<li class="list-group-item list-group-item-warning">'+allMaps[1]+'</li>';
    maps.innerHTML = map_1 + map_2;
};

fetchMaps();
