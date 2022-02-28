const uuid = require('uuid');
const fs = require('fs');
const path = require('path');

class Proposal {
    constructor (name, bedroomNumber, floor) {
        this.name = name;
        this.bedroomNumber = bedroomNumber;
        this.floor = floor;
        this.id = 1;
    }

    toJSON(){
        return {
            name: this.name,
            bedroomNumber: this.bedroomNumber,
            floor: this.floor,
            id: this.id,
        };
    }

    async save () {
        const proposals = await Proposal.getAll();
        proposals.push(this.toJSON());

        return new Promise( (resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'units.json'),
                JSON.stringify(proposals),
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                }
            );
        });
    }

    static getAll() {
        return new Promise( (resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'units.json'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(JSON.parse(content));
                    }
                }
            );
        });

    }
}

module.exports = Proposal;