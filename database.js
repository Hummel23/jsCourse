const filesystem = require('fs');

exports.save = (people) => {
    filesystem.writeFileSync('./data.json', JSON.stringify(people));
}

exports.load = () => {
    return JSON.parse(filesystem.readFileSync('./data.json', 'utf8'));
}

