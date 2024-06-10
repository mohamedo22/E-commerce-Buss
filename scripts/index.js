let header = document.querySelector("header");
header.addEventListener('mouseenter' , function(){
    header.style.backgroundColor = 'white';
    let PinHeader = document.querySelectorAll("header p").forEach(function(el)
    {
        el.style.color = 'black';
    });
    document.querySelectorAll(".icons path").forEach((el)=>{
        el.style.fill = 'black';
    });
    document.querySelector('.bag path').style.stroke = 'black';
    document.querySelector('.bag path').style.fill = 'black';
});
header.addEventListener('mouseleave', function(){
    let header = document.querySelector("header");
    header.style.backgroundColor = '';
    let PinHeader = document.querySelectorAll("header p").forEach(function(el)
    {
        el.style.color = '';
    });
    document.querySelectorAll(".icons path").forEach((el)=>{
        el.style.fill = '';
    });
    document.querySelector('.bag path').style.stroke = '';
    document.querySelector('.bag path').style.fill = '';
   
});
window.addEventListener('scroll', function() {
    if (window.scrollY > 5) {
        header.style.backgroundColor = 'white';
        header.style.color = 'black';
        let PinHeader = document.querySelectorAll("header p").forEach(function(el)
        {
            el.style.color = 'black';
        });
        document.querySelectorAll(".icons path").forEach((el)=>{
            el.style.fill = 'black';
        });
        document.querySelector('.bag path').style.stroke = 'black';
        document.querySelector('.bag path').style.fill = 'black';
    } else {
        let header = document.querySelector("header");
        header.style.backgroundColor = '';
        header.style.color = '';
        let PinHeader = document.querySelectorAll("header p").forEach(function(el)
        {
            el.style.color = '';
        });
        document.querySelectorAll(".icons path").forEach((el)=>{
            el.style.fill = '';
        });
        document.querySelector('.bag path').style.stroke = '';
        document.querySelector('.bag path').style.fill = '';
       
    }
});
let el = 0;
function NextElement(elementNumber)
{
    el++;
    console.log(el);
    if(el > 5)
    {
            el=0;
    }
    if(window.innerWidth >= 1000)
    {
            document.querySelector(`.wrapper${elementNumber}`).style.marginLeft = `${-el*25}rem`;
    }
    else
    {
        document.querySelector(`.wrapper${elementNumber}`).style.marginLeft = `${-el*26}rem`;
    }
    document.querySelectorAll(`.thempn${elementNumber}`).forEach((el)=>
    {
        el.style.backgroundColor = 'silver';
    });
    document.querySelector(`.ThembNav${el}${elementNumber}`).style.backgroundColor = 'black';
}
function LastElement(elementNumber)
{
    el--;
    console.log(el);
    if(el < 0)
    {
            el=5;
    }
    if(window.innerWidth >= 1000)
        {
                document.querySelector(`.wrapper${elementNumber}`).style.marginLeft = `${-el*25}rem`;
        }
        else
        {
            document.querySelector(`.wrapper${elementNumber}`).style.marginLeft = `${-el*26}rem`;
        }
    document.querySelectorAll(`.thempn${elementNumber}`).forEach((el)=>
        {
            el.style.backgroundColor = 'silver';
        });
        document.querySelector(`.ThembNav${el}${elementNumber}`).style.backgroundColor = 'black';
}
document.querySelectorAll(".ContainerOFinksFooter:not(.formContainer)").forEach((el) => {
    el.addEventListener("click", function() {
        let height = el.style.height;
        if (height === '1rem') {
            el.style.height = '10rem';
        } else {
            el.style.height = '1rem';
        }
    });
});
function openSearchWindow()
{
    let searchWindow = document.querySelector('.search');
    searchWindow.style.visibility = 'visible';
    
        header.style.backgroundColor = 'white';
        header.style.color = 'black';
        let PinHeader = document.querySelectorAll("header p").forEach(function(el)
        {
            el.style.color = 'black';
        });
        document.querySelectorAll(".icons path").forEach((el)=>{
            el.style.fill = 'black';
        });
        document.querySelector('.bag path').style.stroke = 'black';
        document.querySelector('.bag path').style.fill = 'black';
    
}
function closeSearchWindow()
{
    let searchWindow = document.querySelector('.search');
    searchWindow.style.visibility = '';
    let header = document.querySelector("header");
        header.style.backgroundColor = '';
        header.style.color = '';
        let PinHeader = document.querySelectorAll("header p").forEach(function(el)
        {
            el.style.color = '';
        });
        document.querySelectorAll(".icons path").forEach((el)=>{
            el.style.fill = '';
        });
        document.querySelector('.bag path').style.stroke = '';
        document.querySelector('.bag path').style.fill = '';
}
function openFavWindow()
{
    let wishlist = document.querySelector('.wishlist');
    wishlist.style.right = '0rem';
    
        header.style.backgroundColor = 'white';
        header.style.color = 'black';
        let PinHeader = document.querySelectorAll("header p").forEach(function(el)
        {
            el.style.color = 'black';
        });
        document.querySelectorAll(".icons path").forEach((el)=>{
            el.style.fill = 'black';
        });
        document.querySelector('.bag path').style.stroke = 'black';
        document.querySelector('.bag path').style.fill = 'black';
    
}
function closeFavWindow()
{
    let wishlist = document.querySelector('.wishlist');
    wishlist.style.right = '';
    let header = document.querySelector("header");
        header.style.backgroundColor = '';
        header.style.color = '';
        let PinHeader = document.querySelectorAll("header p").forEach(function(el)
        {
            el.style.color = '';
        });
        document.querySelectorAll(".icons path").forEach((el)=>{
            el.style.fill = '';
        });
        document.querySelector('.bag path').style.stroke = '';
        document.querySelector('.bag path').style.fill = '';
}
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'en'},
        'google_translate_element'
    );
} 
function toArabic() {
    let listOfLanguage = document.querySelector(".goog-te-combo");
    listOfLanguage.value = "ar";
    //   document.getElementById().style.
    listOfLanguage.dispatchEvent(new Event('change'));
    let textElements = document.querySelectorAll("p, .FirstSectionOfContactUs , h1, h2, h3, h4, h5, h6, span, li, a, button, input, textarea, label");

    textElements.forEach((el) => {
        el.style.textAlign = "right";
        el.style.lineHeight = "2rem";
        el.style.fontSize = "1rem";
        el.dir = "rtl";
        document.querySelector(".section5").dir = "ltr";
    });
}

function toEnglish() {
    let listOfLanguage = document.querySelector(".goog-te-combo");
    listOfLanguage.value = "en";
    listOfLanguage.dispatchEvent(new Event('change'));
    let textElements = document.querySelectorAll("p, .FirstSectionOfContactUs , h1, h2, h3, h4, h5, h6, span, li, a, button, input, textarea, label");

    textElements.forEach((el) => {
        el.style.textAlign = "left";
        el.style.lineHeight = "1rem";
        el.style.letterSpacing = "unset";
        el.style.fontFamily = "General Sans"
        el.style.fontSize = ".92rem";
        el.dir = "ltr";
        document.querySelector(".section5").dir = "ltr";
    });
}
