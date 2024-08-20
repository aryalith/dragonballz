const Character = require("../models/character.model");

const getCharacters = async (req, res) => {
    try {
        //http://localhost:3000/characters/all?pag=5&limit=10
        let pag = parseInt(req.query.pag)
        let limit = parseInt(req.query.limit)
        // if (isNaN(pag) || isNaN(limit)) {
        //     if (isNaN(pag)) {
        //         pag = 1;
        //     }
        //     if (isNaN(limit)) {
        //         limit = 10;
        //     }
        // }

        pag = !isNaN(pag) ? pag : 1;
        limit = !isNaN(limit) ? limit : 10;
        limit = limit > 10 ? 10 : limit < 1 ? 5 : limit;
        console.log(pag, limit);


        const numCharacters = await Character.countDocuments()

        let numPage = Math.ceil(numCharacters / limit)

        if (pag > numPage) {
            pag = numPage;
        }

        if (pag < 1) {
            pag = 1;
        }

        const allCharacters = await Character.find().skip((pag - 1) * limit).limit(limit)
        res.json({
            previewPage: pag === 1 ? null : pag - 1,
            nextPage: numPage >= pag + 1 ? pag + 1 : null,
            quantityPage: allCharacters.length,
            data: allCharacters

        })

        console.log(numPage);
        //const allCharacters = await Character.find()
        //res.json(allCharacters)
    } catch (error) {

    }
}

module.exports = { getCharacters }