const Database = require("./../models/database");

/**
 * Create a new product
 * @param {*} req
 * @param {*} res
 * @returns
 */

exports.listProducts = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const pageSize = Number(req.query.pageSize) || 30;

  const skipRows = (page - 1) * pageSize; //calculating how many items to skip.

  try {
    const products = await Database.find().skip(skipRows).limit(pageSize);

    return res.status(200).json({ message: "list of products", products });
  } catch (error) {
    return res.status(400).json({ message: "Error happened" });
  }
};

exports.searchProducts = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const pageSize = Number(req.query.pageSize) || 30;
  const name = req.query.name;
  //const skipRows = (page - 1) * pageSize; //calculating how many items to skip.

  try {
    const products = await Database.find({
      title: { $regex: ".*" + name + ".*", $options: "i" },
    });

    return res.status(200).json({ message: "list of products", products });
  } catch (error) {
    return res.status(400).json({ message: "Error happened" });
  }
};
