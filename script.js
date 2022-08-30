



let div1 = "<div class='main'>Animation Test</div>"
let add = 30

for (let i=add;i !== 0; i--){
    $('body').append(div1)
}



let t = $('.main').css("transition")
$('.main').each(function(index){
    t = "color 1s infinite "+index/10+"s"
    $(this).css("animation", t)
    
    console.log(t)
})

console.log(t)