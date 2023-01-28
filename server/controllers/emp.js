const Emp = require("../models/emp_controller");

exports.getAllEmp = (req, res) => {
    Emp.findAll()
        .then((emp) => {
            console.log({ emp });
            res.json(emp);
        })
        .catch((err) =>
            res
                .status(404)
                .json({ message: "no emp found", error: err.message })
        );
};

exports.postCreateEmp = (req, res) => {
    console.log("ghjk",req.body);
    Emp.create(req.body)
        .then((data) => {
            console.log({ data });
            res.json({ message: "emp added successfully", data });
        })
        .catch((err) =>
            res.status(400).json({
                message: "unable to add new emp",
                error: err.message,
            })
        );
};
exports.loginEmp = (req, res) => {
    console.log("ghjkhhdhdh",req.body);
    Emp.login(req.body)
        .then((data) => {
            console.log({ data });
            res.json({ message: "login successfully", data });
        })
        .catch((err) =>
            res.status(400).json({
                message: "unable to login",
                error: err.message,
            })
        );
};
exports.putUpdateEmp = (req, res) => {
    console.log("id: ", req.params.id);
    console.log("body: ", req.body);
    Emp.findByIdAndUpdate(req.params.id, req.body)
        .then((emp) => {
            console.log("edit", { emp });
            return res.json({ message: "updated successfully", emp });
        })
        .catch((err) =>
            res
                .status(400)
                .json({ error: "unable to update emp", message: err.message })
        );
};

exports.deleteEmp = (req, res) => {
    Emp.findByIdAndDelete(req.params.id, req.body).then((data) =>
        res
            .json({ message: "emp deleted successfully", data })
            .catch((err) =>
                res
                    .status(404)
                    .json({ error: "book not found", message: err.message })
            )
    )
    .catch((err) =>
            res
                .status(400)
                .json({ error: "unable to delete emp", message: err.message })
        );
};
