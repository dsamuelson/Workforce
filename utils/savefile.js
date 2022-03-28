const fs = require('fs');

// write file to /dist/README.md and if it can't an error is thrown

const saveFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'html created! Please see the /dist folder to see the file.'
            });
        });
        // write a CSS file just for the media query
        fs.writeFile('./dist/style.css', '@media screen and (max-width: 900px) {main {height: revert!important;}}', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Files successfully created! Please see the /dist folder to see the file.'
            });
        })
    });
};

// export function to be used in the main file

module.exports = saveFile;