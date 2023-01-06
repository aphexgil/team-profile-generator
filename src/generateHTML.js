function generateHTML(employees){

    let HTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profiles</title>
    </head>
    <body>
        <header>
            <h1>Our Team</h1>
        </header>
        <main>
            <div class="container">`

    for(var i=0; i<employees.length; i++){
        if(i%3==0){
            if(i>0){
                HTML += `</div>`;
            }
            HTML += `<div class="row justify-content-center">`;
        }
        HTML += `<div class="col-3 employee-card">
        <div class="card-header">
            <h3>${employees[i].getName()}</h3>
            <h4>${employees[i].getRole()}</h4>
        </div>
        <div class="card-body">
            <ul>
                <li>ID: ${employees[i].getId()}</li>
                <li>Email: <a href="mailto:${employees[i].getEmail()}">${employees[i].getEmail()}</a></li>
                `;
        if(employees[i].getRole()=='Manager'){
            HTML += `<li>Office Number: ${employees[i].getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>`;
        }else if(employees[i].getRole()=='Engineer'){
            HTML += `<li>Github: <a href="https://github.com/${employees[i].getGithub()}">${employees[i].getGithub()}</a></li>
                    </ul>
                </div>
            </div>`;
        }else if(employees[i].getRole()=='Intern'){
            HTML += `<li>School: ${employees[i].getSchool()}</li>
                    </ul>
                </div>
            </div>`;
        }
    }

    HTML += `</div>
        </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

    </body>
    </html>`;

    return HTML;
}

exports.generateHTML = generateHTML;