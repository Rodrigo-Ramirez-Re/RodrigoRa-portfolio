const tabs = document.querySelectorAll(".tab-title");
const projectList = document.querySelector("#project-list");
let currentCategory = 'front-end';

const projects = [
    {
        'id': 1,
        'url': 'https://www.alfacleaning.co/',
        'imgSrc': './src/alfa.png',
        'title': 'Alfa Cleaning',
        'technologies': {
            '1': 'Wix',
            '2': 'Figma',
            '3': 'UI'
        },
        'category': 'design' 
    },
    {
        'id': 2,
        'url': 'https://www.cleanisimo.com.mx/',
        'imgSrc': './src/cleanisimo.png',
        'title': 'Cleanisimo',
        'technologies': {
            '1': 'React',
            '2': 'TailwindCSS'
        },
        'category': 'front-end' 
    },
    {
        'id': 3,
        'url': 'https://www.institutoteologicodequeretaro.com/',
        'imgSrc': './src/itq.png',
        'title': 'Instituto Teológico de Querétaro',
        'technologies': {
            '1': 'Wix',
            '2': 'Figma',
            '3': 'UI'
        },
        'category': 'design' 
    },
    {
        'id': 4,
        'url': 'https://www.airctec.com/',
        'imgSrc': './src/airtec-web.png',
        'title': 'Airtec S. A.',
        'technologies': {
            '1': 'Wix',
            '2': 'Figma',
            '3': 'UI'
        },
        'category': 'design' 
    },
    {
        'id': 5,
        'url': 'https://rodrigo-ramirez-re.github.io/reproductor-musica/',
        'imgSrc': './src/reproductor.png',
        'title': 'Reproductor de música - Audius API',
        'technologies': {
            '1': 'HTML',
            '2': 'CSS',
            '3': 'Javascript'
        },
        'category': 'front-end' 
    },
    {
        'id': 6,
        'url': 'https://rodrigo-ramirez-re.github.io/palindrome-checker/',
        'imgSrc': './src/palindrome.png',
        'title': 'Palindrome Checker',
        'technologies': {
            '1': 'HTML',
            '2': 'CSS',
            '3': 'Javascript'
        },
        'category': 'front-end' 
    }
];

/* functions  */

const renderProjects = (category) => {

    let technologyList = ""
    
    projectList.innerHTML = ""

    projects.forEach(project => {

        for (const key in project.technologies) {
            technologyList += `<li>${project.technologies[key]}</li>`
        }
    
        if(project.category === category) {
            projectList.insertAdjacentHTML('beforeend', `
                <div class="project-list-card">
                <a href="${project.url}" target="_blank"><img src="${project.imgSrc}" alt="" class="card-img"></a>
                <div class="card-info">
                    <h3>${project.title}</h3>
                    <ul class="card-technology-list">${technologyList}</ul>
                </div>
            </div>
        `)}

        technologyList = ""
    });
    
}

/* events */

tabs.forEach(tab => {

    tab.addEventListener("click", event => {

        document.querySelector(".tab-selected")?.classList.remove("tab-selected");
        event.currentTarget.classList.add("tab-selected");

        if (event.currentTarget.id === 'front-end-tab') {
            currentCategory = 'front-end';
            renderProjects(currentCategory);
            
        } else {
            currentCategory = 'design';
            renderProjects(currentCategory);
        }

        console.log(event.currentTarget)
            
    });

})

/* init */
renderProjects(currentCategory);