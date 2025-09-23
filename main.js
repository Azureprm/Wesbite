import { SKILLS, PROJECTS } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname.split("/").pop();
    
    // Set current year in both desktop and mobile footers
    const yearSpanDesktop = document.getElementById('current-year-desktop');
    if (yearSpanDesktop) {
        yearSpanDesktop.textContent = new Date().getFullYear();
    }
    const yearSpanMobile = document.getElementById('current-year-mobile');
    if (yearSpanMobile) {
        yearSpanMobile.textContent = new Date().getFullYear();
    }
    
    // Render content based on page
    if (path.includes('skills.html') || path === 'skills' || path === '') {
        renderSkills();
    }
    if (path.includes('projects.html') || path === 'projects' || path === '') {
        renderProjects();
    }
});

function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;

    let skillsHTML = '';
    SKILLS.forEach(skill => {
        let ratingDots = '';
        for (let i = 0; i < 3; i++) {
            const dotClass = i < skill.rating ? 'bg-sky-400' : 'bg-slate-600';
            ratingDots += `<span class="h-3 w-3 rounded-full ${dotClass}"></span>`;
        }

        skillsHTML += `
            <div class="bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-sky-500/20 transition-shadow duration-300 flex flex-col items-center justify-center text-center">
                <p class="font-semibold text-slate-200">${skill.name}</p>
                <div class="flex gap-1.5 mt-2">
                    ${ratingDots}
                </div>
            </div>
        `;
    });
    skillsContainer.innerHTML = skillsHTML;
}

function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;
    
    let projectsHTML = '';
    PROJECTS.forEach(project => {
        const techTags = project.technologies.map(tech => 
            `<span class="bg-sky-500/20 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full">${tech}</span>`
        ).join('');

        projectsHTML += `
            <div class="bg-slate-800/50 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-sky-400/20 group">
                <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-48 object-cover" />
                <div class="p-6">
                    <h3 class="text-xl font-bold text-slate-100 mb-2 group-hover:text-sky-400 transition-colors duration-300">${project.title}</h3>
                    <p class="text-slate-400 mb-4 text-sm">${project.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${techTags}
                    </div>
                </div>
            </div>
        `;
    });
    projectsContainer.innerHTML = projectsHTML;
}