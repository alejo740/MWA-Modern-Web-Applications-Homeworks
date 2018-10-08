{
    var express = require('express');
    const controller = require('../controllers/gradesController.js');
    const { check } = require('express-validator/check');
    const { sanitize } = require('express-validator/filter');  
    const router = express.Router();

    const validationRulesForPOST = [
        check('name').exists(),
        check('course').exists(),
        check('grade', 'grade param is missing!').exists(),
        check('name', 'name must be at least one character').isLength({ min: 1 }),
        check('course', 'course must be atleast one character').isLength({ min: 1 }),
        check('grade', 'grade must be at least one character').isLength({ min: 1 }),
        sanitize('id').toInt(),
        sanitize('grade').toFloat()
    ];

    const validationRulesForPUT = validationRulesForPOST.slice();
    validationRulesForPUT.push(check('id').exists());
    validationRulesForPUT.push(sanitize('id').toInt());

    router.get('/', controller.getGrades);
    router.post('/', validationRulesForPOST, controller.postGrades);
    router.put('/', validationRulesForPUT, controller.updateGrade);
    router.delete('/:id', controller.deleteGrade);

    module.exports = router;
}