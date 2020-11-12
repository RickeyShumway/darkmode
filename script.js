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

$('body').append("<h1>Products</h1>");
$('body').append("<div id = contentContainer></div>");

storeItems.forEach(function(i) {                        
 if (i.inStock) {

     $('#contentContainer').append(`<div class = infoBlock>
            <div class = "price item">$` + i.price +`</div>
            <div class = "name item">` + i.name +`</div>
            <div class = "details item">` + i.details + `</div>
        </div>`);

    }
});
$('body').append("<button id = button>Toggle Dark Mode</button>")
$('.infoBlock').css({
    "border":"1px solid black",
    //"display":"inline",
    "display":"flex",
    //"align-items":"end",
    "justify-content":"center",
    //"align-item":"center",
    //"align-content":"flex-end"
});
$(".item").css( {
    "flex-basis":"33%",
    "justify-content":"flex-start",
});
$('.price').css({
    "color":"blue",
    "border":"1px solid black",

});

$('.name').css({
    "color":"green",
    "border":"1px solid black",
    "text-align":"center",
});
$('.details').css({
    "color":"red",
    "border":"1px solid black",
    "text-align":"right",
});