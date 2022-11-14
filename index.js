//The species is a confirmed member of the Juglandaceae family, genus: Juglans, but depending on the exact species, it will receive a particular English name.
function nameRandomiser(speciesNumber) {
    if (speciesNumber<=1) {
        return('English Walnut');//yes
    } else {
        if (speciesNumber<=2) {
            return('Eastern Black Walnut');//yes
        } else {
            if (speciesNumber<=3) {
                return('Butternut Walnut');//yes
            } else {
                if (speciesNumber<=4) {
                    return('Manchurian Walnut');//yes
                } else {
                    if (speciesNumber<=5) {
                        return('Northern California Walnut');//yes
                    } else {
                        return('Colombian Walnut');//yes
                    }
                }
            }
        }
    }
}

function factRandomiser(factNumber) {
     if (factNumber<=1) {
        return('Walnuts, like other tree nuts, must be processed and stored properly. Poor storage makes walnuts susceptible to insect and fungal mold infestations.');//yes
    } else {
        if (factNumber<=2) {
            return('The ideal temperature for the extended storage of walnuts is -3 to 0 °C (27 to 32 °F) with low humidity for industrial and home storage. ');//yes
        } else {
            if (factNumber<=3) {
                return('Walnut meats are available in two forms: in their shells or de-shelled. The meats may be whole, halved, or in smaller portions due to processing.');//yes
            } else {
                if (factNumber<=4) {
                    return('Walnuts may be used as an ingredient in other foodstuffs. Walnut is an important ingredient in baklava, Circassian chicken, chicken in walnut sauce, and poultry or meat ball stew from Iranian cuisine.');//yes
                } else {
                    if (factNumber<=5) {
                        return('Walnuts are also popular as an ice cream topping, and walnut pieces are used as a garnish on some foods.');//yes
                    } else {
                        return('Nocino is a liqueur made from unripe green walnuts steeped in alcohol with syrup added.');//yes
                    }
                }
            }
        }
    }
}

let speciesNumber=Math.random()*6
let factNumber=Math.random()*6

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading")
    }
}

function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}


console.log("Today's member of the Walnut family is The " + nameRandomiser(speciesNumber) + '. Please find a short fact about Walnuts: ' + factRandomiser(factNumber) + ' Stay tuned for more Walnuts!');
document.write("Today's member of the Walnut family is The " + nameRandomiser(speciesNumber) + '. Please find a short fact about Walnuts: ' + factRandomiser(factNumber) + ' Stay tuned for more Walnuts!')











