<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Brian Spencer</title>
        <link rel="icon" href="images/favIcon.png"/>
        <link rel="stylesheet" href="../../css/kyf.css" />
        <link
              href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
              rel="stylesheet"
              />
        <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous"
              />
        <script
                src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                crossorigin="anonymous"
                ></script>
        <script
                src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                crossorigin="anonymous"
                ></script>
        <script
                src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                crossorigin="anonymous"
                ></script>
        <link href= 
              "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
              rel="stylesheet" /> 
        <script
                src="https://code.jquery.com/jquery-3.1.1.min.js"
                integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
                crossorigin="anonymous"></script>
        <script src= 
                "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"> 
        </script> 

    </head>
    <body class="bg-dark">

        <div class="text-center">
            <br>
            <img src="/images/DBD_RULES.png">
        </div>
        <div class="container header jumbotron jumbotron-fluid bg-dark">
            <div class="ui top attached tabular menu">
                <a class="item active bg-dark" data-tab="first"><h2 class="text-white">General</h2></a>
                <a class="item bg-dark" data-tab="second"><h2 class="text-white">Survivors</h2></a>
                <a class="item bg-dark" data-tab="third"><h2 class="text-white">Killer</h2></a>
                <a class="item bg-dark" data-tab="fourth"><h2 class="text-white">Random Survivor Build</h2></a>
                <a class="item bg-dark" data-tab="fifth"><h2 class="text-white">Random Killer Build</h2></a>
            </div>
            <div class="ui bottom attached tab segment active bg-dark" data-tab="first">
                <h3>Current</h3>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-dark">
                        Offerings are not allowed
                    </li>
                    <li class="list-group-item list-group-item-dark">
                        Two maps will be randomly chosen and the survivors will vote on them (Killer breaks a tie)
                    </li>
                </ul>
                <h3>Proposed</h3>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-success">
                        Not allowed to play The Spirit
                    </li>
                    <li class="list-group-item list-group-item-success">
                        No toolboxes allowed
                    </li>
                    <li class="list-group-item list-group-item-success">
                        Only one of each item type is allowed
                    </li>
                </ul>
            </div>
            <div class="ui bottom attached tab segment bg-dark" data-tab="second">
                <h3>Gameplay/Loadout</h3>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-primary">
                        No identical outfits
                    </li>
                    <li class="list-group-item list-group-item-primary">
                        No sabotage build
                    </li>
                    <li class="list-group-item list-group-item-primary">
                        Only one flashlight can be brought
                    </li>
                    <li class="list-group-item list-group-item-primary">
                        No more than two toolboxes can be brought
                    </li>
                </ul>
                <h3>Items</h3>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-primary">
                        Toolboxes above uncommon rarity
                    </li>
                    <li class="list-group-item list-group-item-primary">
                        Brand new parts
                    </li>
                    <li class="list-group-item list-group-item-primary">
                        Any key above Rare rarity
                    </li>
                </ul>
                <h3>Perks</h3>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-primary">
                        Object of Obsession
                    </li>
                </ul>
            </div>
            <div class="ui bottom attached tab segment bg-dark" data-tab="third">
                <h3>Gameplay/Loadout</h3>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-danger">
                        Cannot play The Nurse
                    </li>
                    <li class="list-group-item list-group-item-danger">
                        No face camping
                    </li>
                    <li class="list-group-item list-group-item-danger">
                        Cannot proxy unless there are signs of rescue
                    </li>
                </ul>
                <h3>Addons</h3>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-danger">
                        Iridescent Head Huntress
                    </li>
                    <li class="list-group-item list-group-item-danger">
                        Instakill Myers
                    </li>
                    <li class="list-group-item list-group-item-danger">
                        Anything that causes Exhaustion
                    </li>
                </ul>
                <h3>Perks</h3>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-danger"
                        >Hex: No one Escapes Death
                    </li>
                    <li class="list-group-item list-group-item-danger">
                        Hex: Devour Hope
                    </li>
                    <li class="list-group-item list-group-item-danger">
                        Lightborn
                    </li>
                </ul>
                
                <br><br>
                
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRNqWt1PnWHcddsLEIu5cI3FQzz9MdqOnPVYQblO3zCSmRJumMROT1Z1DuZz9CrBodC2QDcYHjOS2td/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                </div>
            </div>
            <div class="ui bottom attached tab segment bg-dark" data-tab="fourth">
                <div class="text-center">
                    <button class="btn btn-primary" onclick="fetchPerks()">Generate A New Build</button>
                </div>
                <br>
                <ul id="sPerks">
                </ul>
            </div>
            <div class="ui bottom attached tab segment bg-dark" data-tab="fifth">
                <div class="text-center">
                    <button class="btn btn-danger" onclick="fetchKiller()">Generate A New Killer</button>
                </div>
                <br>
                <ul id="killerSlot">
                </ul>
                <br>
                <div class="text-center">
                    <button class="btn btn-danger" onclick="fetchMaps()">Generate New Maps</button>
                </div>
                <br>
                <ul id="maps">
                </ul>
                <br>
                <div class="text-center">
                    <button class="btn btn-danger" onclick="fetchKPerks()">Generate A New Build</button>
                </div>
                <br>
                <ul id="kPerks">
                </ul>
            </div>
            <script src="../../js/genMap.js"></script>
            <script src="../../js/genKPerks.js"></script>
            <script src="../../js/genSPerks.js"></script>
            <script src="../../js/genKiller.js"></script>
            <script> 
                $('.menu .item').tab();                    
            </script> 
        </div>

        <div class="footer-copyright text-center py-3">
            <text style="color: white;">© 2020 Brian Spencer</text> 
        </div>

    </body>
</html>
