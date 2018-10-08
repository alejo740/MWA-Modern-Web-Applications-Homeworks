class GradeModel {
    constructor() {
        this.data = [];
        this.id = 0;
        this.name = "";
        this.course = "";
        this.grade = 0;
        this.insertGrade({
            name: "Edwin",
            course: "MWA",
            grade: 97.5
        })
    }

    getGrades() {
        return this.data;
    }

    insertGrade(obj) {
        obj.id = this.data.length + 1;
        this.data.push(obj);
    }

    updateGrade(obj) {
        let grade = this.data.find(x => x.id == obj.id);
        grade.name = obj.name;
        grade.course = obj.course;
        grade.grade = obj.grade;
    }

    deleteGrade(id) {
        let grade = this.data.find(x => x.id == id);
        let index = this.data.indexOf(grade);
        return this.data.splice(index, 1);
    }

    getGradesById(id) {
        return this.data.find(x => x.id == id);
    }
}

module.exports = new GradeModel();