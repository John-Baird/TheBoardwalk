



let div1 = "<a class='main' href='coolio.html'>Animation Test</a>"
let add = 30
let delay = 12

for (let i=add;i !== 0; i--){
    $('body').append(div1)
}



let t = $('.main').css("transition")
$('.main').each(function(index){
    t = "color 1s infinite "+index/delay+"s"
    $(this).css("animation", t)
    
    console.log(t)
})



console.log(t)