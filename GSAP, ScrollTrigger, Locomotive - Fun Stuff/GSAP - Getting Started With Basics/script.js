// gsap.to("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue",
//     rotate:360
// });  // starting se end tak jane ke liye  initial se final tak

// final se intial position tak le jane ke liye gsap.from use karte hai.
// gsap.from("#box",{
//     x:1000,
//     rotate:360,
//     duration:2,
//     delay:1,
//     backgroundColor:"yellow"
// });

// Timeline

var tl = gsap.timeline();

tl.to("#box1",{
    x:1200,
    scale:0.5,
    duration:2,
    delay:1,
    backgroundColor:"orangered",
    rotate:360,
});
tl.to("#box2",{
    x:1200,
    scale:0.5,
    duration:2,
    delay:2,
    backgroundColor:"purple",
    rotate:360,
});
tl.to("#box3",{
    x:1200,
    scale:0.5,
    duration:2,
    delay:1,
    backgroundColor:"yellow",
    rotate:360,
})