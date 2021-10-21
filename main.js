const linksSocialMedia = {
    github:    'Gian-Milani',
    facebook:  'giancarlo.milani.5',
    instagram: 'gian_milani',
    twitter:   'gianmilani_'
}

function replaceLinks(){
    for (let li of socialLinks.children){
        const social = (li.getAttribute('class'))
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
}
replaceLinks()

function getInfosUser(){
    const urlUser = `https://api.github.com/users/${linksSocialMedia.github}`

    // Replace user informations, through api GitHub
    fetch(urlUser).then(response => response.json()).then(data => {
        userImage.src = data.avatar_url
        userName.textContent = data.name
        userProfile.href = data.html_url
        userLogin.textContent = data.login
        userBio.textContent = data.bio
    })
}

getInfosUser()
