const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];
$('body').append("<div id = allContent></div>")
$('#allContent').append("<h1>Products</h1>");
$('#allContent').append("<div id = contentContainer></div>");

storeItems.forEach(function(i) {                        
 if (i.inStock) {

     $('#contentContainer').append(`<div class = infoBlock>
            <div class = "price item">$` + i.price +`</div>
            <div class = "name item">` + i.name +`</div>
            <div class = "details item">` + i.details + `</div>
        </div>`);

    }
});
$('#allContent').append("<button id = button>Toggle Dark Mode</button>")
$('body').css( {
    "background-color":"#eeeeee",
    "font-family":"sans-serif",
    "font-weight":"300",
    "margin-top":"0",
})

$('#allContent').css( {
    "width":"700px",
    "margin":"0 auto",
})
$('#contentContainer').css( {
    "margin-top":"0",
    
});
$('h1').css( {
    "font-weight":"150",
})

$('.infoBlock').css({
   //"border":"1px inherit white",
    "padding":"8px",
    "display":"flex",
    "margin":"8px auto",
    "background-color":"white",
    "border-style":"hidden",
    "border-color":"#A9A9A9",
    "border-radius":"3px",
    "box-shadow":"3px 3px 10px #aaaaaa",
    
    //"width":"250px",
});
$(".item").css( {
    "flex-basis":"33%",
    "justify-content":"flex-start",
});
$('.price').css({
});

$('.name').css({
    "text-align":"left",
});
$('.details').css({
    "text-align":"left",
});
$("button").css( {
    "margin-top":"5px",
    "padding":"8px",
    "border":"1px solid #A9A9A9",
    "border-radius":"3px",
})
$('#button').click(function() {
    $('#contentContainer').toggleClass('darkMode');
});