/**
 * May, 2024.
 */
// Embedded "Database".
let DISKS = [
    { "id": 11, "weight": 10, "unit": "L" },
    { "id": 12, "weight": 15, "unit": "L" },
    { "id": 13, "weight": 10, "unit": "k" },
    { "id": 14, "weight": 1, "unit": "L" },
    { "id": 64, "weight": 1, "unit": "L" },
    { "id": 15, "weight": 0.75, "unit": "L" },
    { "id": 65, "weight": 0.75, "unit": "L" },
    { "id": 16, "weight": 0.5, "unit": "L" },
    { "id": 66, "weight": 0.5, "unit": "L" },
    { "id": 17, "weight": 0.25, "unit": "L" },
    { "id": 67, "weight": 0.25, "unit": "L" },
    { "id": 44, "weight": 20, "unit": "k" },
    { "id": 45, "weight": 15, "unit": "k" },
    { "id": 46, "weight": 10, "unit": "k" },
    { "id": 47, "weight": 5, "unit": "k" },
    { "id": 48, "weight": 2.5, "unit": "k" },
    { "id": 59, "weight": 2.5, "unit": "k" },
    { "id": 49, "weight": 1.25, "unit": "k" },
    { "id": 60, "weight": 1.25, "unit": "k" },
    { "id": 61, "weight": 5, "unit": "k" },
];
let BARBELLS = [
    {
        "id": 21,
        "weight": 20,
        "unit": "k"
    },
    {
        "id": 24,
        "weight": 23,
        "unit": "k"
    },
    {
        "id": 25,
        "weight": 6.2,
        "unit": "k"
    },
    {
        "id": 26,
        "weight": 5.7,
        "unit": "k"
    },
    {
        "id": 58,
        "weight": 13.5,
        "unit": "k"
    },
    {
        "id": 62,
        "weight": 12.1,
        "unit": "k"
    },
    {
        "id": 63,
        "weight": 3.3,
        "unit": "k"
    }
];
let currentBarbell;
let currentDisks;

function handleChangeBarbell() {
    let barbells = document.getElementsByName('barbell');
    let barbell;
    for (let i = 0; i < barbells.length; i++) {
        if (barbells[i].checked) {
            barbell = barbells[i].value;
            sumWeights(barbell);
            currentBarbell = barbell;
            break;
        }
    }
}

function handleChangeDisks() {
    var disks = document.getElementsByName('disks');
    var disksChecked = [];
    for (var i = 0; i < disks.length; i++) {
        if (disks[i].checked) {
            disksChecked.push(disks[i]);
            //console.log('Selected disk id: ' + disks[i].value);
        }
    }
    currentDisks = disksChecked;
    sumWeights(currentBarbell);
}

function sumWeights(barbell) {
    // console.log('Selected barbell id: ' + barbell);
    let totalWeight;
    let barbellWeight;
    if(barbell) {
        	barbellWeight = search(BARBELLS, Number(barbell)).weight;
        totalWeight = barbellWeight;
    } else {
        totalWeight = 0.0;
    }
    console.log('Barbell weight: ' + totalWeight);
    if(currentDisks) {
        console.log('Num of selected disks: ' + currentDisks.length);
        for (var i = 0; i < currentDisks.length; i++) {
            let diskId = Number(currentDisks[i].value);
            let disk = search(DISKS, diskId)
            let weight;
            if(disk.unit === "L") {
                weight = disk.weight * 0.453592;
            } else {
                weight = disk.weight;
            }
            totalWeight += 2 * weight;
        }
    }
    // console.log('TW: ' + totalWeight);
    document.getElementById('totalWeight').innerHTML = totalWeight.toFixed(1) + ' k.';
}

function search(array, valuetofind) {
    for (i = 0; i < array.length; i++) {
        if (array[i]['id'] === valuetofind) {
            return array[i];
        }
    }
    return -1;
}
