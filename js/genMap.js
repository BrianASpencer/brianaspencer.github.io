const maps = document.getElementById('maps');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const fetchMaps = (bound) => {
    const allMaps = [
        "Mother's Dwelling",
        "Shelter Woods",
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
        "Treatment Theatre",
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
    
    var index_1 = getRandomInt(allMaps.length);
    while (true) {
        var index_2 = getRandomInt(allMaps.length);
        if (index_1 != index_2) {
            break;
        }
    }
    return displayMaps([allMaps[index_1], allMaps[index_2]]);
};

const displayMaps = (allMaps) => {
    const map_1 = '<li class="list-group-item list-group-item-warning">'+allMaps[0]+'</li>';
    const map_2 = '<li class="list-group-item list-group-item-warning">'+allMaps[1]+'</li>';
    maps.innerHTML = map_1 + map_2;
};

fetchMaps();
