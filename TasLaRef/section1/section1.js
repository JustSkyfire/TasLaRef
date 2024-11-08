tab_meme = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
    '6.png', '7.jpg', '8.jpg', '9.png', '10.png',
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg',
    '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg',
    '23.jpg', '24.jpg', '25.jpg'];

tab_rep = ['/Samos|samos|ca fait 16 fois|16 fois|qu\'il perd|perd|puissance 4/',
    '/L\'ancien|l\'Ancien|ancien|premier essai|buteur|Buteur/',
    '/J\'peux|je peux|la fleche|flèche|moi aussi|ou*|que les petits|p\'tits/',
    '/fruits|légumes|Fruits|Légumes|hyper tensé|chinois|whippin|hyper tenssé/', 
    '/Dembouz|dembouz|Dembele|dembélé|dembele|Dembélé|11 minutos tarde/',
    '/Zola|zola|trop relou|anglais|studio|les mots/',
    '/Billy|billy|Reubeudeter|rebeudeter|malveillance max|valorant/',
    '/Quel belle journée|Belle journée|soucis|belle journée|0 soucis/',
    '/bassem|T\' es pas down|anglais|brunch|pas down|ou quoi|t\’es|Comment|comment je les déteste|ces 3tay|3tay|hatay|qui parle|mi-anglais|mi-francais/',
    '/Bande de batard|bande de batard|batards|On est |on est que 2/', 
    '/prime|Prime|kc|kcorp|amine|pleure/',
    '/L\' ancien|il veut pas lacher|midi|minuit|le rainté/', 
    '/ps4|Ps4|délai|jltomy|tomy|y a pas/',
    '/mbappé|Mbappé|ldc|lache ca|lache ça| imbécile|mbappe/',
    '/il a rien compris|Il a|bête|il comprend rien lui/',
    '/Qui|qui le connais|connaît|connait|important|même/',
    '/Bro|bro thinks|think|he is on the team|he\'s|Drake/',
    '/Tous|tous ces gens|sont partis voir|le gros|caca|là/',
    '/Ma|ma pharmacienne|j\'avais jamais vu|ireel|iréel|une photo ou ferme la/',
    '/Allo|allo selem|allo salem|singe/',
    '/Naruto|naruto|alliance|clan|madara|uchiha|hashirama|senju/',
    '/C\'est plus un|guetteur|un mirador|long|grand|plus/',
    '/Armée|armée|intru|clown/',
    '/Il|il a eu 0\/20|zéro|vingt|sur/',
    '/T\'es|t\'es un barjo|barjo|plantes|tah|keski ya|casquette rose/'
];

let i=0;
img = $('img#meme'); 
img.attr({
src: tab_meme[i]});

$('.input').on('keydown', function(event){
    regexString = tab_rep[i].slice(1, -1); //j'enlève l'echappement '/' de l'élément choisie du tableau de regex 
    const regexcap = new RegExp(regexString);
    if(event.key==='Enter'){
        if(regexcap.test($('.input').val())){
            $('#meme').css('filter', 'blur(0px)');
            $('#suivant').css('display', 'block');
            $('.input').val('');
        }
    }
});

    
    
    
