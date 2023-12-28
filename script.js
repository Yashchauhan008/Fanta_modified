// gsap.to('#fanta',{
//     rotate:360,
//     scrollTrigger:{
//         trigger:'#fanta',
//         scroll:"body",
//         start:'70% 50%',
//         end:'150%',
//         markers:true,
//         scrub:1.5,
//         top:1500,
//     }
// })


var tl = gsap.timeline({scrollTrigger:{
    trigger:".two" ,
    start:'0% 95%',
    end:'70% 50%',
    scrub:1.8,
    markers:false
}}) 

tl.to("#fanta",{
    top:"105%",
    left:"3%"
},'two')

tl.to("#slice",{
    top:"150%",
    left:"8%"
},'two')

tl.to("#orange",{
    top:"165%",
    left:"70%",
    scale:0.9
},'two')

tl.to("#leaf1",{
    top:"110%",
    left:"80%",
    rotate:280,
    scale:0.9
},'two')

tl.to("#leaf3",{
    top:"105%",
    left:"0%",
    scale:0.9
},'two')



var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: 1.8,
    markers: false,
}})

tl2.from("#lemon",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
},'three')

tl2.from("#pepsi",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
},'three')

tl2.from("#apple",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'three')

tl2.from("#coc",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'three')

// tl2.to("#fanta",{
//     top:"195%",
//     left:"28%",
// },'three')

tl2.to("#slice",{
    width:"18%",
    left: "42%",
    top: "204%",
}, 'three')

tl2.to("#fanta",{
    width:"35%",
    top: "210%",
    scale:0.9,
    left: "33%",
}, 'three')
