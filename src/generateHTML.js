const generateTeam = team => {

    const html = [];

    const managerTeam = manager => {
        let mHtml = `
        <div class="card m-auto shadow-sm p-3 mb-2 bg-body rounded" style="width: 300px">
                    <div class="card-header p-3 mb-2 bg-secondary text-white">
                        <p class="h3">${manager.managersName}</p>
                        <p class="h4">Manager</p>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <span class="font-weight-bold">ID: </span>
                                ${manager.managersId}
                            </li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">Email: </span>
                                <a href="mailto:${manager.managersEmail}">${manager.managersEmail}</a>
                            </li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">Office number: </span>
                                ${manager.managersOfficeNumber}
                            </li>
                        </ul>
                    </div>
                </div>`;
        html.push(mHtml);
    };

    const engineerTeam = engineer => {
        let eHtml = `
        <div class="card m-auto shadow-sm p-3 mb-2 bg-body rounded" style="width: 300px">
                    <div class="card-header p-3 mb-2 bg-secondary text-white">
                        <p class="h3">${engineer.engineersName}</p>
                        <p class="h4">Engineer</p>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <span class="font-weight-bold">ID: </span>
                                ${engineer.engineersId}
                            </li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">Email: </span>
                                <a href="mailto:${engineer.engineersEmail}">${engineer.engineersEmail}</a>
                            </li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">GitHub: </span>
                                <a href="https://github.com/${engineer.engineersGithub}" target="_blank">${engineer.engineersGithub}</a>
                            </li>
                        </ul>
                    </div>
                </div>`;
        html.push(eHtml);
    };

    const internTeam = intern => {
        let iHtml = `
        <div class="card m-auto shadow-sm p-3 mb-2 bg-body rounded" style="width: 300px">
                    <div class="card-header p-3 mb-2 bg-secondary text-white">
                        <p class="h3">${intern.internsName}</p>
                        <p class="h4">Intern</p>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <span class="font-weight-bold">ID: </span>
                                ${intern.internsId}
                            </li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">Email: </span>
                                <a href="mailto:${intern.internsEmail}">${intern.internsEmail}</a>
                            </li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">School: </span>
                                ${intern.internsSchool}
                            </li>
                        </ul>
                    </div>
                </div>`;
        html.push(iHtml);
    };

    for (let i = 0; i < team.length; i++) {

        if (team[i].getRole() === 'Manager') {
            managerTeam(team[i]);

        }
        else if (team[i].getRole() === 'Engineer') {
            engineerTeam(team[i]);
        }
        else (team[i].getRole() === 'Intern')
        internTeam(team[i]);

    }

    return html.join('');

};

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profiles</title>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />
    <!--Google font-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital@1&display=swap" rel="stylesheet">
</head>

<body class="pb-5" style="font-family: 'Roboto Condensed', sans-serif;">
    <!-- Header -->
    <header class="p-3 mb-2 bg-primary">
        <h1 class="text-center text-white">My Team</h1>
    </header>
    <!-- Profile Cards Container -->
    <main>
        <br />
        <br />
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center">
            ${generateTeam(team)}
            </div>
        </div>
    </main>
</body>

</html>`;
};