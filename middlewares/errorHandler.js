const errorHandleer = (err, req, res) => {
    console.error(err);
    res.status(500).json({ message: err });
}
module.exports={errorHandleer}