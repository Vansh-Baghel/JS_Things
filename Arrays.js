
let outdoorGames = [
    {
        name : 'Cricket',
        players : 11
    },
{
    name : 'Football',
    players : 11
}, 
{
    name : 'Kho Kho',
    players : 9 
}
]

// find() by arrow method
console.log(outdoorGames.find(Element => Element.name === 'Football'))

console.log(outdoorGames.find(function(random_para){
    return random_para.name === 'Kho Kho'
}))



