const staffModel = () => {
    return {
        staffTitle : "Mean Full Stack Staff",
        staffCount : 15,
        emps : [
            { name: "Ali Reda", job: "frontend" },
            { name: "Waleed Mohammed", job: "backtend", address: "mansoura" },
            { name: "FAthy Farouk", job: "AI-dev" },
        ]
    };
}

module.exports = staffModel;