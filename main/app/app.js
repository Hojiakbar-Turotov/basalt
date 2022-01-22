let count = 0;
let menuClass = document.getElementById("menu").classList;
let menubtnStyle = document.getElementById("menubtn").style;
function pageMenu() {
    if (screen.width < 1140) {
        if (count) {
            menuClass.add("activemax");
            menubtnStyle.transform = 'rotate(0deg)';
            count++
        } else {
            menuClass.remove("activemax");
            menubtnStyle.transform = 'rotate(180deg)';
            count--
        }
    } else {
        if (count) {
            menuClass.remove("activemin");
            menuClass.remove("d-flex");
            menuClass.add("d-none");
            menubtnStyle.transform = 'rotate(180deg)';
            count++
        } else {
            menuClass.add("activemin");
            menuClass.remove("d-none");
            menuClass.add("d-flex");
            menubtnStyle.transform = 'rotate(0deg)';
            count--
        }
    }
}


/* ************************** */
let light = 1;
let bodyClass = document.getElementById("body").classList;
let x, i;
x = document.querySelectorAll(".dLparnyori");
function darkLight() {
    if (light) {
        bodyClass.remove("ligth");
        bodyClass.add("dark");
        document.getElementById("dLlogo").src = "./main/img/light/footer/brend.png";
        document.getElementById("dLpoizk").src = "./main/img/dark/poizk.png";
        document.getElementById("dLmoon").src = "./main/img/dark/quyosh.png";
        document.getElementById("dLmenu").src = "./main/img/dark/menu.png";
        for (i = 0; i < x.length; i++) {
            x[i].src = "./main/img/dark/partnyori/discover.png";
        }
        light--
    } else {
        bodyClass.remove("dark");
        bodyClass.add("ligth");
        document.getElementById("dLlogo").src = "./main/img/light/LOGO.png";
        document.getElementById("dLpoizk").src = "./main/img/light/POIZK.png";
        document.getElementById("dLmoon").src = "./main/img/light/MOON.png";
        document.getElementById("dLmenu").src = "./main/img/light/MENU.png";
        for (i = 0; i < x.length; i++) {
            x[i].src = "./main/img/light/partnyori/discoverinvest.png";
        }
        light++
    }
}
