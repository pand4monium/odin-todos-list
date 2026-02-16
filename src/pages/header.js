export const loadHeader = () => {
    const headerHTML = `
        <div id="appName">
            ToDos List
        </div>

        <div id="profile">
            <div id="profilePicture">A</div>
            <div id="profileName">Pand4monium</div>
        </div>
    `

    const pageContent = document.getElementById("header");
    pageContent.innerHTML = headerHTML;
}