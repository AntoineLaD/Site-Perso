document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('fade-in');
});

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez les boutons et le div de contenu
    const btn0 = document.getElementById('0');

    const btn1 = document.getElementById('1');
    const btn2 = document.getElementById('2');
    const btn3 = document.getElementById('3');
    const contentSections = document.querySelectorAll('.content ');

    // Fonction pour cacher toutes les sections de contenu
    function hideAllContent() {
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
    }

    // Ajoutez des écouteurs d'événements aux boutons
    btn0.addEventListener('click', function() {
        hideAllContent();
        document.querySelector('.home').style.display = 'block';
    });
    btn1.addEventListener('click', function() {
        hideAllContent();
        document.querySelector('.contact').style.display = 'block';
    });

    btn2.addEventListener('click', function() {
        hideAllContent();
        document.querySelector('.about').style.display = 'block';    });

    btn3.addEventListener('click', function() {
        hideAllContent();
        document.querySelector('.project').style.display = 'block';    });
});
document.addEventListener('DOMContentLoaded', function() {
    const token = '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'; // Remplacez par votre token d'accès personnel
    const username = 'AntoineLaD'; // Remplacez par votre nom d'utilisateur GitHub
    const statsDiv = document.getElementById('github-stats');

    fetch(`https://api.github.com/users/${username}`, {
        headers: {
            Authorization: `token ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        statsDiv.innerHTML = `
            <h2>${data.name}</h2>
            <p>Nom d'utilisateur: ${data.login}</p>
            <p>Nombre de dépôts publics: ${data.public_repos}</p>
            <p>Nombre de followers: ${data.followers}</p>
            <p>Nombre de suivis: ${data.following}</p>
        `;
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des statistiques GitHub:', error);
        statsDiv.innerHTML = '<p>Impossible de charger les statistiques.</p>';
    });
});