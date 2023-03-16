//set Data Table
import Supplier from "./../models/supplierModel.js";

export const getAllSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findAll();
    res.json(supplier);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(supplier[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.create(req.body);

    res.status(201).json({ msg: "Sipplier created successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateSupplier = async (req, res) => {
  try {
    await Supplier.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteSupplier = async (req, res) => {
  try {
    await Supplier.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Supplier deleted successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
