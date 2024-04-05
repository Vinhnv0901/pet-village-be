const { New } = require("../models");

//**GET */
const getNews = async (req, res) => {
  try {
    const papers = await New.find({});

    res.status(200).json(papers);
  } catch (error) {
    res.status(500).json({ massage: error.massage });
  }
};

const getNew = async (req, res) => {
  //how get id of item
  try {
    const { id } = req.params;

    const paper = await New.findById(id);

    res.status(200).json(paper);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//**Post */

const createNew = async (req, res) => {
  try {
    console.log("create a paper", req.body);
    const paper = await New.create(req.body);
    console.log("create a paper");
    res.status(200).json(paper);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//**Update */

const updateNew = async (req, res) => {
  try {
    const { id } = req.params;
    const paper = await New.findByIdAndUpdate(id, req.body);

    if (!paper) {
      return res.status(404).json({ message: "Paper not found" });
    }
    //recheck updated items
    const updatedPaper = await New.findById(id);

    res.status(200).json(updatedPaper);

    res.status(200).json(paper);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//**Delete */
const deleteNew = async (req, res) => {
  try {
    const { id } = req.params;
    const paper = await New.findByIdAndDelete(id);

    if (!paper) {
      return res.status(404).json({ message: "Paper not found" });
    }

    res.status(200).json({ message: "Paper deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getNews,
  getNew,
  createNew,
  updateNew,
  deleteNew,
};

///số lượng bán được của một sản phẩn
///số phản phẩm còn lại
///cập nhật sau một lần có giao dịch
