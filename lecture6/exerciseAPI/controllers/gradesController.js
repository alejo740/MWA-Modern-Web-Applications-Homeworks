const gradeModel = require('../models/grade');
const { validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');

const controller = {
    getGrades: (req, res) => {
        res.status(200).json(gradeModel.getGrades());
    },

    postGrades: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() });
        }

        const record = matchedData(req);

        gradeModel.insertGrade(record);
        res.status(200).json({ "message": "Successful" });
    },

    updateGrade: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() });
        }

        const record = matchedData(req);
        let q = gradeModel.getGradesById(record.id);

        if (q == null) {
            return res.status(422).json({ errors: "id doesn't exist" });
        }

        gradeModel.updateGrade(record);
        res.status(200).json({ "message": "done" });
    },

    deleteGrade: (req, res) => {
        const recordId = req.params.id;
        let q = gradeModel.getGradesById(recordId);

        if (q == null) {
            return res.status(422).json({ errors: "id doesn't exist" });
        }

        gradeModel.deleteGrade(recordId);
        res.status(200).json({ "message": "done" });
    }
}

module.exports = controller;