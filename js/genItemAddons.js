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

function timeOutButton_2(obj) {
    obj.disabled = true;
    setTimeout(function() {
        fetchItem();
        timeOutTime_2(obj);
    }, 800);
}

function timeOutTime_2(obj) {
    setTimeout(function() {
        obj.disabled = false;
        fetchItemAddon();
    }, 600);
}


function displayAddons() {
    var items = getItem();
    var indeces = getIndeces(2, items.length);
    var addons = [items[indeces[0]], items[indeces[1]]];
    var lag = '<div class="eight wide column">';
    var i = 0;
    for (i = 0; i < 2; i++) {
        lag += '<div class="text-center"><h3>' +
        addons[i].name + '</h3>' + '<img class="ui centered small image" src="' + addons[i].image +'">' + '</div>';
    }
    return lag;
}

function letsgoia() {
    var i = 0;
    var arr = ['name: ', 'image: ', 'parentItem: [\n'];
    var a = 'const survItemAddons = [\n';
    for(i = 0; i < survItemAddons.length; i++) {
        var j = 0;
        var add;
        a += '\t{\n';
        for (j = 0; j < arr.length; j++) {
            var index = survItemAddons[i].image.lastIndexOf('_')+1;
            index = '../../images/DbD/addons/' + survItemAddons[i].image.substr(index);
            if (j == arr.length-1) { 
                add = '';
                // another for loop for array of parent items
                a += '\t\t' + arr[j];
                for(k = 0; k < survItemAddons[i].parentItem.length; k++) {
                    if (k == survItemAddons[i].parentItem.length - 1) {
                        add += '\t\t\t"' + survItemAddons[i].parentItem[k] + '"]';
                    } else {
                        add += '\t\t\t"' + survItemAddons[i].parentItem[k] + '",\n';
                    }
                }
                a += add + '\n';
            } else if (j == arr.length-2) {
                a += '\t\t' + arr[j];
                add = '"' + index + '"';
                a += add + ',\n';
            }else {
                a += '\t\t' + arr[j];
                add = '"' + survItemAddons[i].name + '"';
                a += add + ',\n';
            }
        }
        if (i == survItemAddons.length-1) {
            a += '\t}\n';
        } else {
            a += '\t},\n'
        }
    }
    a += '];';
    console.log(a);
}

function getItemsss() {
    var arr = [];
    var i;
    var cnt = 0;
    for(i = 0; i < survItemAddons.length; i++) {
        var j;
        for(j = 0; j < survItemAddons[i].parentItem.length; j++) {
            if (cnt == 2) {
                break;
            }
            if (survItemAddons[i].parentItem === sItem.id) {
                arr.push(survItemAddons[i]);
                cnt++;
            }
        }
    }
    
    return arr;
}

function getItem() {
    var arr = [];
    var i;
    var cnt = 0;
    for(i = 0; i < survItemAddons.length; i++) {
        var j;
        for(j = 0; j < survItemAddons[i].parentItem.length; j++) {
            if (survItemAddons[i].parentItem[j] === sItem.id) {
                arr.push(survItemAddons[i]);
                cnt++;
            }
        }
    }
    
    return arr;
}