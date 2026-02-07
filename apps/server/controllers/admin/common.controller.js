const { prisma } = require("../../prisma/prisma");
// Helper to get Prisma model dynamically
const getPrismaModel = (tblName) => {
  if (!tblName) return null;

  const models = {
    admin: prisma.admin,
    user: prisma.user,
    tbl_designation_master: prisma.tbl_designation_master,
    tbl_status_master:prisma.tbl_status_master,

    tbl_department_master : prisma.tbl_department_master,
    tbl_city_master : prisma.tbl_city_master,
    tbl_location_master : prisma.tbl_location_master,
    tbl_banner_master : prisma.tbl_banner_master,

     blogcategory: prisma.blogCategory,
  blog: prisma.blog,
  tbl_press_release :prisma.tbl_press_release,
  tbl_faq:prisma.tbl_faq,
  tbl_contact_us:prisma.tbl_contact_us,
  tbl_our_team:prisma.tbl_our_team,
  tbl_success_story:prisma.tbl_success_story,
  
  };

  return models[tblName.toLowerCase()] ?? null;
};

// Soft Delete Item
const deleteItem = async (req, res) => {
  const { model, id } = req.params;

  try {
    const tbl = getPrismaModel(model);
    if (!tbl)
      return res.status(400).json({
        success: false,
        message: `Invalid model name '${model}'`,
        data: null,
      });

    const item = await tbl.findUnique({ where: { id: parseInt(id) } });
    if (!item) {
      return res.status(404).json({
        success: false,
        message: `${model} with ID ${id} not found`,
        data: null,
      });
    }

    await tbl.update({
      where: { id: parseInt(id) },
      data: { is_deleted: 1 },
    });

    return res.status(200).json({
      success: true,
      message: `Record deleted successfully`,
      data: null,
    });
  } catch (error) {
    console.error("Delete Item Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message || "Unknown error",
    });
  }
};

// Activate Item
const activateItem = async (req, res) => {
  const { model, id } = req.params;

  try {
    const tbl = getPrismaModel(model);
    if (!tbl)
      return res.status(400).json({
        success: false,
        message: `Invalid model name '${model}'`,
        data: null,
      });

    const item = await tbl.findUnique({ where: { id: parseInt(id) } });
    if (!item) {
      return res.status(404).json({
        success: false,
        message: `${model} with ID ${id} not found`,
        data: null,
      });
    }

    await tbl.update({
      where: { id: parseInt(id) },
      data: { status: 1 },
    });

    return res.status(200).json({
      success: true,
      message: `Record activated successfully`,
      data: null,
    });
  } catch (error) {
    console.error("ActivateItem Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message || "Unknown error",
    });
  }
};

// Deactivate Item
const deactivateItem = async (req, res) => {
  const { model, id } = req.params;

  try {
    const tbl = getPrismaModel(model);
    if (!tbl)
      return res.status(400).json({
        success: false,
        message: `Invalid model name '${model}'`,
        data: null,
      });

    const item = await tbl.findUnique({ where: { id: parseInt(id) } });
    if (!item) {
      return res.status(404).json({
        success: false,
        message: `${model} with ID ${id} not found`,
        data: null,
      });
    }

    await tbl.update({
      where: { id: parseInt(id) },
      data: { status: 0 },
    });

    return res.status(200).json({
      success: true,
      message: `Record deactivated successfully`,
      data: null,
    });
  } catch (error) {
    console.error("DeactivateItem Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message || "Unknown error",
    });
  }
};


module.exports = {
  deleteItem,
  activateItem,
  deactivateItem,
};