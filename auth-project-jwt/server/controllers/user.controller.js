exports.publicAccess = (req, res) => {
    res.status(200).send("Public Content");
}

exports.adminAccess = (req, res) => {
    res.status(200).send("Admin Content");
}

exports.userAccess = (req, res) => {
    res.status(200).send("User Content");
}