const generateTeam = team => {

    const managerTeam = manager => {
        return `
        <div class="card m-auto shadow-sm p-3 mb-2 bg-body rounded" style="width: 300px">
                    <div class="card-header p-3 mb-2 bg-secondary text-white">
                        <p class="h3">${manager.getName()}</p>
                        <p class="h4">${manager.getRole()}</p>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <span class="font-weight-bold">ID: </span>
                                ${manager.getId()}
                            </li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">Email: </span>
                                <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                            </li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">Office number: </span>
                                ${manager.getOfficeNumber()}
                            </li>
                        </ul>
                    </div>
                </div>`;
    };

    const engineerTeam = engineer => {
        return `
        <div class="card m-auto shadow-sm p-3 mb-2 bg-body rounded" style="width: 300px">
                    <div class="card-header p-3 mb-2 bg-secondary text-white">
                        <p class="h3">${engineer.getName()}</p>
                        <p class="h4">${engineer.getRole()}</p>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <span class="font-weight-bold">ID: </span>
                                ${engineer.getId()}
                            </li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">Email: </span>
                                <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                            </li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">GitHub: </span>
                                <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a><
                            </li>
                        </ul>
                    </div>
                </div>`;
    };

    const internTeam = intern => {
        return `
        <div class="card m-auto shadow-sm p-3 mb-2 bg-body rounded" style="width: 300px">
                    <div class="card-header p-3 mb-2 bg-secondary text-white">
                        <p class="h3">${intern.getName()}</p>
                        <p class="h4">${intern.getRole()}</p>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <span class="font-weight-bold">ID: </span>
                                ${intern.getId()}
                            </li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">Email: </span>
                                <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
                            </li>
                            <li class="list-group-item">
                                <span class="font-weight-bold">School: </span>
                                ${intern.getSchool()}
                            </li>
                        </ul>
                    </div>
                </div>`;
    };

    const html = [];

    html.push(team.forEach(employee => {
        if (employee.getRole === 'manager') {
            return managerTeam(manager);
        } else if (employee.getRole === 'engineer') {
            return engineerTeam(engineer);
        } else if (internTeam === 'intern') {
            return internTeam(intern);
        } else {
            console.error('Error!');
        }
    }
    ));

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