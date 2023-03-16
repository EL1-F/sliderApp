var locations =[
    {
        name:"Atatürk Arboretumu",
        image: "img/ataturkorberutumu.webp",
        link: "https://www.google.com/maps/place/Atat%C3%BCrk+Arboretumu/@41.1766302,28.9831835,17z/data=!3m1!4b1!4m5!3m4!1s0x14cab4ccc1879c9f:0x398fc905f39432d0!8m2!3d41.1766262!4d28.9853775"
    },
    {
        name:"Ayasofya Camii",
        image: "img/ayasofya.webp",
        link: "https://www.google.com/maps/place/Ayasofya+Camii/@41.008583,28.980175,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab9be92011c27:0x236e6f6f37444fae!8m2!3d41.008583!4d28.980175!16zL20vMGJyNXE"
    },
    {
        name:"Belgrad Ormanı",
        image: "img/belgrad.webp",
        link: "https://www.enuygun.com/bilgi/istanbul-daki-en-guzel-20-piknik-alani/"
    },
    {
        name:"Yerebatan Sarnıcı",
        image: "img/yerebatan.webp",
        link: "https://www.google.com/maps/place/Yerebatan+Sarn%C4%B1c%C4%B1/@41.008388,28.975684,17z/data=!3m1!4b1!4m5!3m4!1s0x14cab9bde0c66ac9:0x60c02fe1ee6d8471!8m2!3d41.008359!4d28.9778409"
    },
    {
        name:"Kapalı Çarşı (Grand Bazaar)",
        image: "img/kapali-carsi.webp",
        link: "https://www.google.com/maps/place/Kapal%C4%B1+%C3%87ar%C5%9F%C4%B1/@41.0106888,28.9658741,17z/data=!3m1!4b1!4m5!3m4!1s0x14cab99162d70527:0x64c8680b5ac198ab!8m2!3d41.0106848!4d28.9680681"
    }
];



var index = 0 ;
var slaytCount = locations.length;
var interval;

var settings= {
    duration: '2000',
    random : true
    //tercihe göre random ya da sıralı şekilde gider
}

init(settings);

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    });
});
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    });
});


function init(set) {

    var prev;

    interval = setInterval(function(){
        if (settings.random) {
            //random index
            //üretilen sayının öncekiyle eşit olmaması için do-while 
            do {
                index = Math.floor(Math.random()*slaytCount);
            } while (index == prev);
            prev =index ;  
        }else{
            //index++
            if (slaytCount == index+1) {
                index=-1;
            }
            showSlide(index);
            //console.log(index);
            index++;
            
        }

        showSlide(index);
    },settings.duration);
}




document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    
    index--;
    showSlide(index);
    //console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    //console.log(index);
});


function showSlide(i){

    index = i;

    if (i < 0) {
        index = slaytCount -1;
    }
    if (i >= slaytCount) {
        index =0;
    }

    document.querySelector('.card-img-top').setAttribute('src',locations[index].image);
    document.querySelector('.card-title').textContent=locations[index].name;
    document.querySelector('.card-link').setAttribute('href',locations[index].link);

};

