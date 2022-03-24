//creo array con tutti i dati dei membri del team
let team = [
    {
        'name' : 'Wayne Barnett',
        'position' : 'Founder & CEO',
        'img' : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'name' : 'Angela Caroll',
        'position' : 'Chief Editor',
        'img' : 'angela-caroll-chief-editor.jpg'
    },
    {
        'name' : 'Walter Gordon',
        'position' : 'Office Manager',
        'img' : 'walter-gordon-office-manager.jpg'
    },
    {
        'name' : 'Angela Lopez',
        'position' : 'Social Media Manager',
        'img' : 'angela-lopez-social-media-manager.jpg'
    },
    {
        'name' : 'Scott Estrada',
        'position' : 'Developer',
        'img' : 'scott-estrada-developer.jpg'
    },
    {
        'name' : 'Barbara Ramos',
        'position' : 'Graphic Designer',
        'img' : 'barbara-ramos-graphic-designer.jpg'
    },
];
//stampo in console elenco membri team + caratteristica tutti separati
for ( let key in team ){
    console.log(team[key]);
};
//stampo a video card membri usando card di bootstrap
for ( let i = 0; i < team.length;i++ ){
    document.getElementById("target").innerHTML += 
        `<div class="card zoom animation margin-10" style="width: 18rem;">
            <img src="./img/${team[i]["img"]}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">${team[i]["name"]}</h4>
                <h6 class="card-text">${team[i]["position"]}</h6>                              
            </div>
        </div>`
    ;
}