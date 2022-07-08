let expenses = 0;

const word = 'Expenses: ₱ '

function DisableContainers(id){
    var nodes = document.getElementById(id).getElementsByTagName('*');
        for(var i = 0; i < nodes.length; i++){
            nodes[i].disabled = true;
            document.getElementById("warn-budget").style.display = "block";
            
        }
}

function EnableContainers(id){
    var nodes = document.getElementById(id).getElementsByTagName('*');
        for(var i = 0; i < nodes.length; i++){
            nodes[i].disabled = false;
            document.getElementById("warn-budget").style.display = "none";
        }
}

function disableForm(){
    DisableContainers("processor-choice");
    DisableContainers("model-processor");
    DisableContainers("storage-choice");
    DisableContainers("size-storage");
    DisableContainers("ram-dropdown");
    DisableContainers("graphics-dropdown");
    DisableContainers("powersupply");
    DisableContainers("button");
    DisableContainers("motherboard");
    DisableContainers("pc_case");
    DisableContainers("fan");
    document.getElementById("warn-budget").style.display = "none";
    
}

function budgetChecker(budget){

    if (budget>=10000){
        EnableContainers("processor-choice");
            
    }else {
        DisableContainers("processor-choice");
        
        
    }

}

function enableOthers(){
    EnableContainers("model-processor");
    EnableContainers("storage-choice");
    EnableContainers("size-storage");
    EnableContainers("ram-dropdown");
    EnableContainers("graphics-dropdown");
    EnableContainers("powersupply");
    EnableContainers("button");
    EnableContainers("motherboard");
    EnableContainers("pc_case");
    EnableContainers("fan");

}

function hideItems(item_id){
    document.getElementById(item_id).style.display = "none";
}

function showItems(item_id){
    document.getElementById(item_id).style.display = "block";
}


//for Processors hide/show
function hideIntel(){
    //Processors
    hideItems("Intel Core i5-3450");
    hideItems("Intel Pentium G5400 Gold Coffee Lake");
    hideItems("Intel Core i5-9400");
    hideItems("Intel Core i3 9100F");
    hideItems("INTEL Core i7-9700KF");
    hideItems("Intel Core I3-10100F");
    hideItems("Intel Core I3-10100");
    hideItems("Intel Core I5-10400");
    hideItems("Intel Core I5-11400");
    hideItems("Intel Core i7-10700");

    //Motherboards
    hideItems("Gigabyte GA-H61M-DS2");
    hideItems("Gigabyte GA-B75M-D3H");
    hideItems("Asus P8Z77-V PRO");
    hideItems("Asus Sabertooth Z77");
    hideItems("ASRock Z77 Extreme");

    hideItems("Biostar H310M");
    hideItems("Gigabyte H310M DS2 2.0");
    hideItems("H310M PRO-VDH PLUS");
    hideItems("H310CM-HDV");

    hideItems("Gigabyte H310M S2H");
    hideItems("H310M H 2.0");
    hideItems("ASRock H310CM-HDV");
    hideItems("ASRock B365M Pro4");

    hideItems("ASRockH510M-HDV");
    hideItems("ASrock B460");
    hideItems("Msi B460M-A");
    hideItems("MSI H510M-A Pro");

}

function hideAmd(){
    //Processors
    hideItems("AMD Athlon 3000G");
    hideItems("Athlon 200GE");
    hideItems("AMD RYZEN 3 2200G");
    hideItems("Ryzen 3 3200G");
    hideItems("AMD A8-9600");
    hideItems("AMD RYZEN 3 4350G");
    hideItems("Ryzen 5 3400G");
    hideItems("Ryzen 5 3500");
    hideItems("AMD Ryzen 5 3600");
    hideItems("AMD Ryzen 5 Pro 4650G");
    hideItems("AMD Ryzen 5 5600G");
    hideItems("AMD Ryzen 5 5600X");
    hideItems("AMD Ryzen 7 5700G");

    //Motherboards
    hideItems("Asus Prime A320M");
    hideItems("A320M-A PRO");
    hideItems("B450M-A PRO MAX");
    hideItems("ASUS TUF GAMING B450M-PLUS II");
    hideItems("ASUS TUF GAMING B550M-PLUS (WI-FI)");
    hideItems("Asus EX A320M");
    hideItems("Msi A320M Pro-VH");
    hideItems("Asrock B450M Steel Legend");
}

function showAmd(){
    //Processors
    showItems("AMD Athlon 3000G");
    showItems("Athlon 200GE");
    showItems("AMD RYZEN 3 2200G");
    showItems("Ryzen 3 3200G");
    showItems("AMD A8-9600");
    showItems("AMD RYZEN 3 4350G");
    showItems("Ryzen 5 3400G");
    showItems("Ryzen 5 3500");
    showItems("AMD Ryzen 5 3600");
    showItems("AMD Ryzen 5 Pro 4650G");
    showItems("AMD Ryzen 5 5600G");
    showItems("AMD Ryzen 5 5600X");
    showItems("AMD Ryzen 7 5700G");

    //Motherboards

    showItems("Asus Prime A320M");
    showItems("A320M-A PRO");
    showItems("B450M-A PRO MAX");
    showItems("ASUS TUF GAMING B450M-PLUS II");
    showItems("ASUS TUF GAMING B550M-PLUS (WI-FI)");
    showItems("Asus EX A320M");
    showItems("Msi A320M Pro-VH");
    showItems("Asrock B450M Steel Legend");
}

function showIntel(){
    //Show Processors
    showItems("Intel Core i5-3450");
    showItems("Intel Pentium G5400 Gold Coffee Lake");
    showItems("Intel Core i5-9400");
    showItems("Intel Core i3 9100F");
    showItems("INTEL Core i7-9700KF");
    showItems("Intel Core I3-10100F");
    showItems("Intel Core I3-10100");
    showItems("Intel Core I5-10400");
    showItems("Intel Core I5-11400");
    showItems("Intel Core i7-10700");

    //Motherboards
    showItems("Gigabyte GA-H61M-DS2");
    showItems("Gigabyte GA-B75M-D3H");
    showItems("Asus P8Z77-V PRO");
    showItems("Asus Sabertooth Z77");
    showItems("ASRock Z77 Extreme");

    showItems("Biostar H310M");
    showItems("Gigabyte H310M DS2 2.0");
    showItems("H310M PRO-VDH PLUS");
    showItems("H310CM-HDV");

    showItems("Gigabyte H310M S2H");
    showItems("H310M H 2.0");
    showItems("ASRock H310CM-HDV");
    showItems("ASRock B365M Pro4");

    showItems("ASRockH510M-HDV");
    showItems("ASrock B460");
    showItems("Msi B460M-A");
    showItems("MSI H510M-A Pro");
}

//for Storage hide/show
function hideHdd(){
    hideItems("Seagate 500gb HDD");
    hideItems("SeagateBarracuda");
    hideItems("Western Digital Blue 1tb");
    hideItems("Western Digital Blue -- 2tb");
    hideItems("Seagate -- 4tb");
}

function hideSdd(){
    hideItems("Kingspec");
    hideItems("PNY CS900");
    hideItems("Adata SU630");
    hideItems("Western Digital Ssd 240");
    hideItems("SanDisk -- 240gb");
    hideItems("Kingston A400");
    hideItems("GigabyteSsd");
}

function showHdd(){
    showItems("Seagate 500gb HDD");
    showItems("SeagateBarracuda");
    showItems("Western Digital Blue 1tb");
    showItems("Western Digital Blue -- 2tb");
    showItems("Seagate -- 4tb");
}

function showSdd(){
    showItems("Kingspec");
    showItems("PNY CS900");
    showItems("Adata SU630");
    showItems("Western Digital Ssd 240");
    showItems("SanDisk -- 240gb");
    showItems("Kingston A400");
    showItems("GigabyteSsd");
}

function addProcie(){
    expenses = 0;
    let processor_price = document.getElementById("processor").value;
    expenses= +expenses + +processor_price;
    displayExpenses();  
}

function addMother(){
    expenses = 0;
    let motherboard_price  = document.getElementById("motherboardChoices").value;
    expenses= +expenses + +motherboard_price;
    displayExpenses();  
}

function displayExpenses(){
    expenses = 0;
    let processor_price = document.getElementById("processor").value;
    let motherboard_price = document.getElementById("motherboardChoices").value;
    let storage_price = document.getElementById("size-storage-choice").value;
    let ram_price = document.getElementById("rams").value;
    let graphicsCard_price = document.getElementById("graphics-card").value;
    let powersupply_price = document.getElementById("powersupplyChoices").value;
    let pcCase_price = document.getElementById("pc_case_choice").value;
    let fan_price = document.getElementById("fan_choice").value;
    expenses += +processor_price + +motherboard_price + +storage_price + +ram_price + +graphicsCard_price + +powersupply_price + +pcCase_price + +fan_price;
    document.getElementById('exp').innerHTML = word + expenses;
    alertTooExpensive(expenses);
}

function alertTooExpensive(exp){
    if(exp>document.getElementById('budget').value){
        alert('Expenses exceeds the budget! '+exp)
    }
}

function Compatibility(){

switch(document.getElementById('processor').value){

    case '2699':
    //Show Compatible
    showItems("Gigabyte GA-H61M-DS2");
    showItems("Gigabyte GA-B75M-D3H");
    showItems("Asus P8Z77-V PRO");
    showItems("Asus Sabertooth Z77");
    showItems("ASRock Z77 Extreme");

    //Hide not compatible
    hideItems("Biostar H310M");
    hideItems("Gigabyte H310M DS2 2.0");
    hideItems("H310M PRO-VDH PLUS");
    hideItems("H310CM-HDV");

    hideItems("Gigabyte H310M S2H");
    hideItems("H310M H 2.0");
    hideItems("ASRock H310CM-HDV");
    hideItems("ASRock B365M Pro4");

    hideItems("ASRockH510M-HDV");
    hideItems("ASrock B460");
    hideItems("Msi B460M-A");
    hideItems("MSI H510M-A Pro");
    break;

    case '2930':
    //Show Compatible
    showItems("Biostar H310M");
    showItems("Gigabyte H310M DS2 2.0");
    showItems("H310M PRO-VDH PLUS");
    showItems("H310CM-HDV");

    //Hide not compatible
    hideItems("Gigabyte GA-H61M-DS2");
    hideItems("Gigabyte GA-B75M-D3H");
    hideItems("Asus P8Z77-V PRO");
    hideItems("Asus Sabertooth Z77");
    hideItems("ASRock Z77 Extreme");
    //dsad
    hideItems("Gigabyte H310M S2H");
    hideItems("H310M H 2.0");
    hideItems("ASRock H310CM-HDV");
    hideItems("ASRock B365M Pro4");
    
    hideItems("ASRockH510M-HDV");
    hideItems("ASrock B460");
    hideItems("Msi B460M-A");
    hideItems("MSI H510M-A Pro");
    break;

    case '7950':
    case '5599':
    case '18192':
    //Show Compatible
    showItems("Gigabyte H310M S2H");
    showItems("H310M H 2.0");
    showItems("ASRock H310CM-HDV");
    showItems("ASRock B365M Pro4");

    //Hide not compatible
    hideItems("Biostar H310M");
    hideItems("Gigabyte H310M DS2 2.0");
    hideItems("H310M PRO-VDH PLUS");
    hideItems("H310CM-HDV");

    hideItems("Gigabyte GA-H61M-DS2");
    hideItems("Gigabyte GA-B75M-D3H");
    hideItems("Asus P8Z77-V PRO");
    hideItems("Asus Sabertooth Z77");
    hideItems("ASRock Z77 Extreme");
    
    hideItems("ASRockH510M-HDV");
    hideItems("ASrock B460");
    hideItems("Msi B460M-A");
    hideItems("MSI H510M-A Pro");
    break;

    case '4995':
    case '9950':
    case '10940':
    case '16800':
    //Show Compatible
    showItems("ASRockH510M-HDV");
    showItems("ASrock B460");
    showItems("Msi B460M-A");
    showItems("MSI H510M-A Pro");

    //Hide not Compatible
    hideItems("Gigabyte H310M S2H");
    hideItems("H310M H 2.0");
    hideItems("ASRock H310CM-HDV");
    hideItems("ASRock B365M Pro4");

    hideItems("Biostar H310M");
    hideItems("Gigabyte H310M DS2 2.0");
    hideItems("H310M PRO-VDH PLUS");
    hideItems("H310CM-HDV");

    hideItems("Gigabyte GA-H61M-DS2");
    hideItems("Gigabyte GA-B75M-D3H");
    hideItems("Asus P8Z77-V PRO");
    hideItems("Asus Sabertooth Z77");
    hideItems("ASRock Z77 Extreme");
    
}
}


function displayToResult(){
    let modelProcessor =  document.getElementById('processor').value;

    let selectedMotherboard = document.getElementById('motherboardChoices').value;
    
    //let typeStorage = document.getElementById('storage-choice').value;
    
    let sizeOfStorage = document.getElementById('size-storage-choice').value;
    
    let sizeOfRam = document.getElementById('rams').value;
    
    let selectedGraphicsCard = document.getElementById('graphics-card').value;
    
    let selectedPsu = document.getElementById('powersupplyChoices').value;
    
    let selectedCase = document.getElementById('pc_case_choice').value;
    
    let selectedFan = document.getElementById('fan_choice').value;


    displayToResult2("brandProcessor",'Brand of Processor: ',numberToProcessor(modelProcessor), modelProcessor);
    displayToResult2("brandMotherboard",'Motherboard: ',numberToMother(selectedMotherboard), selectedMotherboard);
    displayToResult2("Storagetype",'Storage: ',numberToStorage(sizeOfStorage), sizeOfStorage);
    displayToResult2("ramchoice",'RAM: ',numberToRam(sizeOfRam), sizeOfRam);
    displayToResult2("graphics_",'Graphics Card: ',numberToGC(selectedGraphicsCard), selectedGraphicsCard);
    displayToResult2("psu_",'Power Supply: ',numberToPS(selectedPsu), selectedPsu);
    displayToResult2("chassis_",'Case: ',numberToCase(selectedCase), selectedCase);
    displayToResult2("fan_",'Fan: ',numberToFan(selectedFan), selectedFan);

}

function numberToProcessor(num){
    let proc = ''
    switch(num){
        //Intel
        case '2699':
            proc = 'Intel Core i5-3450';
            break;

        case '2930':
            proc = "Intel Pentium G5400";
            break;

        case '4995':
            proc = "Intel Core I3-10100F";
            break;

        case '5599':
            proc = "Intel Core i3 9100F";
            break;
        case '6495':
            proc = "Intel Core I3-10100";
            break;
        case '7950':
            proc = "Intel Core i5-9400";
            break;
        case '9950':
            proc = "Intel Core I5-10400";
            break;
        case '10940':
            proc = "Intel Core i5 11400";
            break;
        case '16800':
            proc = "Intel Core i7-10700";
            break;
        case '18192':
            proc = "Intel Core i7-9700KF";
            break;

        //Amd
        case '3195':
            proc = "AMD A8-9600";
            break;

        case '4599':
            proc = "Athlon 200GE";
            break;

        case '5095':
            proc = "AMD Athlon 3000G";
            break;

        case '7699':
            proc = "AMD RYZEN 3 2200G";
            break;

        case '9000':
            proc = "AMD RYZEN 3 4350G";
            break;

        case '9495':
            proc = "AMD Ryzen 5 3500";
            break;

        case '11950':
            proc = "AMD Ryzen 3 3200G";
            break;

        case '13450':
            proc = "AMD Ryzen 5 3400G";
            break;

        case '14159':
            proc = "AMD Ryzen 5 3600";
            break;

        case '14495':
            proc = "AMD Ryzen 5 Pro 4650G";
            break;

        case '15195':
            proc = "AMD Ryzen 5 5600G";
            break;

        case '16350':
            proc = "AMD Ryzen 5 5600X";
            break;

        case '23225':
            proc = "AMD Ryzen 7 5700G";
            break;
    }return proc;
}   
function numberToMother(num){
    let mother = ''
    switch(num){
        //intel
        case "1390":
            mother = "Gigabyte GA-H61M-DS2";
            break;

        case "3165":
            mother = "Gigabyte GA-B75M-D3H";
            break;

        case "4720":
            mother = "Asus P8Z77-V PRO";
            break;

        case "6683":
            mother = "Asus Sabertooth Z77";
            break;

        case "7275":
            mother = "ASRock Z77 Extreme";
            break;

        case "2890":
            mother = "Biostar H310M";
            break;

        case "3599":
            mother = "H310M PRO-VDH PLUS";
            break;

        case "2891":
            mother = "H310CM-HDV";
            break;

        case "3450":
            mother = "Gigabyte H310M DS2 2.0";
            break;

        case "2799":
            mother = "H310M H 2.0";
            break;

        case "3794":
            mother = "Gigabyte H310M S2H";
            break;

        case "9626":
            mother = "ASRock H310CM-HDV";
            break;

        case "11076":
            mother = "ASRock B365M Pro4";
            break;

        case "6164":
            mother = "ASrock B460";
            break;

        case "2846":
            mother = "Asus Prime A320M";
            break;

        case "2851":
            mother = "A320M-A PRO";
            break;

        case "2896":
            mother = "Msi A320M Pro-VH";
            break;

        case "3135":
            mother = "Asus EX A320M";
            break;

        case "4044":
            mother = "B450M-A Pro Max";
            break;

        case "4995":
            mother = "Asrock B450M Steel Legend";
            break;
        
        case "5400":
            mother = "ASUS TUF GAMING B450M-PLUS II";
            break;

        case "9600":
            mother = "ASUS TUF GAMING B550M-PLUS (WI-FI)";
            break;
    }return mother;
}
function numberToStorage(num){
    let storage = ''
    switch(num){
        case '1899':
            storage = 'Seagate 500gb';
            break;
        case '2099':
            storage = 'SeagateBarracuda';
            break;
        case '2225':
            storage = 'Western Digital Blue 1tb';
            break;
        case '2399':
            storage = 'Western Digital Blue -- 2tb';
            break;
        case '4999':
            storage = 'Seagate -- 4tb';
            break;
        case '899':
            storage = 'Kingspec -- 120gb';
            break;
        case '1530':
            storage = 'PNY CS900 -- 240gb';
            break;
        case '1539':
            storage = 'Adata SU630 -- 240gb';
            break;
        case '1899':
            storage = 'Western Digital -- 240gb';
            break;
        case '1898':
            storage = 'SanDisk -- 240gb';
            break;
        case '1859':
            storage = 'Gigabyte -- 240gb';
            break;
        case '2750':
            storage = 'Kingston A400 -- 240gb';
            break;
        
    }return storage;
}
function numberToRam(num){
    let ram = ''
    switch(num){
        case "1120":
            ram = 'Kingston HyperX Fury 4GB 2400Mhz DDR4';
            break;
    
        case "2240":
            ram = '4GB Kingston HyperX Fury DDR4 2400Mhz --- x2';
            break;
            
        case "4120":
            ram = '16GB Kingston HyperX Fury DDR4 2400Mhz';
            break;

        case "8240":
            ram = '16GB Kingston HyperX Fury DDR4 2400Mhz --- x2';
            break;

        case "875":
            ram = '4GB Ramsta DDR4 2666Mhz';
            break;

        case "1750":
            ram = '4GB Ramsta DDR4 2666Mhz --- x2';
            break;

        case "1480":
            ram = '8GB Ramsta DDR4 2666Mhz';
            break;

        case "2960":
            ram = '8GB Ramsta DDR4 2666Mhz  --- x2';
            break;

        case "1345":
            ram = 'Kingston Fury Beast 4GB DDR4 2666mhz';
            break;

        case "2690":
            ram = 'Kingston Fury Beast 4GB DDR4 2666mhz --- x2';
            break;

        case "1845":
            ram = 'Kingston Fury Beast 8GB DDR4 2666mhz';
            break;

        case "3690":
            ram = 'Kingston Fury Beast 8GB DDR4 2666mhz --- x2';
            break;

        case "3595":
            ram = 'Kingston Fury Beast 16GB DDR4 2666mhz';
            break;

        case "7190":
            ram = 'Kingston Fury Beast 16GB DDR4 2666mhz --- x2';
            break;

        case "2670":
            ram = 'Corsair Vengeance LPX 8GB DDR4 3200mhz';
            break;

        case "3595":
            ram = 'T-Force Vulcan TUF Gaming Alliance 16GB 3200mhz -- ( 8GBx2 )';
            break;

        case "4390":
            ram = 'Corsair Vengeance LPX 16GB 3200mhz -- ( 2x8GB )';
            break;

        case "9643":
            ram = 'Crucial Ballistix RGB 16GB DDR4 3200mhz -- ( 2x8GB )';
            break;
    }return ram;
}
function numberToGC(num){
    let gc = ''
    switch(num){
        case '3099':
            gc = "Colorful GeForce GT730K";
            break;
        case '3600':
            gc = "Asus GeForce GT730";
            break;
        case '4699':
            gc = "Colorful GT1030";
            break;
        case '5299':
            gc = "Colorful GT1030 -- 4gb";
            break;
        case '9999':
            gc = "Gigabyte GTX1050Ti -- 4gb";
            break;
        case '10499':
            gc = "Colorful GTX1050Ti -- 4gb";
            break;
        case '13495':
            gc = "Palit GTX1650 -- 4gb";
            break;
        case '13999':
            gc = "Colorful GTX1650 -- 4gb";
            break;
    }return gc;
} 
function numberToPS(num){
    let ps = ''
    switch(num){
        case "425":
            ps = "RAKK 400 watts";
            break;
        case "1185":
            ps = "InPlay GS450P 450 Watts";
            break;
        case "1899":
            ps = "Cooler Master ELITE V3 500W" ;
            break;
        case "1898":
            ps = "Seasonic S12III 550 80+ 550Watts" ;
            break;
        case "1945":
            ps = "Thermaltake Litepower 2" ;
            break;
        case "2725":
            ps = "CORSAIR CV550 80+" ;
            break;
        case "3599":
            ps = "STEAMPUNK 650W 80+" ;
            break;
        case "390":
            ps = "Intelligent Power Supply" ;
            break;
        case "1186":
            ps = "Intelligent Awake AK700W 700W";
            break;
        case "2398":
            ps = "Silverstone 700Watts 80";
            break;
        case "3725":
            ps = "Corsair CV750 80+";
            break;
    }return ps;
}

function numberToCase(num){
    let chassis = ''
    switch(num){
        case "925":
            chassis = "Rakk Marug";
            break;
        case "1000":
            chassis = "Rakk Anyag";
            break;
        case "926":
            chassis = "Keytech Arrow";
            break;
        case "1045":
            chassis = "Inplay Meteor 01";
            break;
        case "1145":
            chassis = "Inplay Meteor 03";
            break;
        case "2095":
            chassis = "Rakk Haliya";
            break;
        case "2096":
            chassis = "Fantech Case Aero CG80";
            break;
        
    }return chassis;
}


function numberToFan(num){
    let fan = ''
    switch(num){
        case "69":
            fan = "Allan 12V Fan -- 80mm";
            break;
        case "54":
            fan = "Allan 12V Fan -- 120mm";
            break;
        case "70":
            fan = "ALLAN new style LED fan -- 120mm";
            break;
        case "98":
            fan = "GSTORM Dual Ring WHITE Led fan -- 120mm";
            break;
        case "99":
            fan = "GSTORM Dual Ring RED Led fan -- 120mm";
            break;
        case "97":
            fan = "GSTORM Dual Ring AURORA Led fan -- 120mm";
            break;
        case "125":
            fan = "Powerlong PH White Led -- 120mm";
            break;
    }return fan;
}
function displayToResult2(id,sentence,func, selected){
    document.getElementById(id).innerHTML = sentence+ func+
    "   ₱ "+ selected;
}