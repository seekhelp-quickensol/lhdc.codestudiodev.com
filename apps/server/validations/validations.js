const { body, validationResult } = require("express-validator");


const podcastValidationRules = [
  body("podcast_name")
    .trim()
    .notEmpty().withMessage("Magazine name is required")
    .isLength({ min: 3, max: 100 })
    .withMessage("Magazine name must be between 3 and 100 characters"),

  body("publish_date")
    .optional({ checkFalsy: true })
    .isISO8601().withMessage("Publish date must be a valid date (YYYY-MM-DD)"),

  body("description")
    .trim()
    .notEmpty().withMessage("Description is required")
    .isLength({ min: 10 })
    .withMessage("Description must be between 10 characters"),

  body("duration")
    .trim()
    .notEmpty().withMessage("Duration is required")
    .withMessage("Duration must be a positive integer"),
];

const magazineValidationRules = [
  body("magazine_name")
    .trim()
    .notEmpty().withMessage("Magazine name is required")
    .isLength({ min: 3, max: 100 })
    .withMessage("Magazine name must be between 3 and 100 characters"),

  body("category_id")
    .notEmpty().withMessage("Category is required")
    .isInt({ min: 1 }).withMessage("Category must be a valid ID"),

  body("publish_date")
    .optional({ checkFalsy: true })
    .isISO8601().withMessage("Publish date must be a valid date (YYYY-MM-DD)"),

  body("short_description")
    .trim()
    .notEmpty().withMessage("Short description is required"),

  body("description")
    .trim()
    .notEmpty().withMessage("Description is required"),

  body("duration")
    .notEmpty().withMessage("Duration is required")
];

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validateId = (req, res, next) => {
  const { id } = req.params;
  if (!id || isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  next();
};

const departmentValidationRules = [
  body("department_name")
    .trim()
    .notEmpty()
    .withMessage("Department name is required"),
];
const categoryValidationRules = [
  body("category_name")
    .trim()
    .notEmpty()
    .withMessage("Category name is required"),
];



// Master Validations
const designationValidationRules = [
  body("designation_name")
    .trim()
    .notEmpty()
    .withMessage("Designation name is required"),
];


// Master Validations
const statusValidationRules = [
  body("service_name")
    .trim()
    .notEmpty()
    .withMessage("Service name is required"),

  body("status_name")
    .trim()
    .notEmpty()
    .withMessage("Status name is required"),
];

const cityValidationRules = [
  body("state_id")
    .trim()
    .notEmpty()
    .withMessage("State ID is required"),

  body("city_name")
    .trim()
    .notEmpty()
    .withMessage("City name is required"),

];


const locationValidationRules = [
  body("state_id")
    .trim()
    .notEmpty()
    .withMessage("State ID is required"),

  body("city_id")
    .trim()
    .notEmpty()
    .withMessage("City name is required"),
  body("location_name")
    .trim()
    .notEmpty()
    .withMessage("City name is required"),

];
const bannerValidationRules = [
  body("banner_name")
    .trim()
    .notEmpty()
    .withMessage("Banner name is required"),



];
const reportedLeadValidationRules = [
  body("reported_lead_name")
    .trim()
    .notEmpty()
    .withMessage("Reported lead name is required"),



];
const propertyTypeValidationRules = [
  body("property_type")
    .trim()
    .notEmpty()
    .withMessage("Property type is required"),



];
const propertyVariantValidationRules = [
  body("property_variant")
    .trim()
    .notEmpty()
    .withMessage("Property variant is required"),



];
const propertyAmenitiesValidationRules = [
  body("property_amenitie")
    .trim()
    .notEmpty()
    .withMessage("Property amenitie is required"),

];

const rewardPointsValidationRules = [

  body("no_of_leads")
    .trim()
    .notEmpty()
    .withMessage("No. of lead is required"),
  body("credit_points")
    .trim()
    .notEmpty()
    .withMessage("Credit points is required"),

];

const specificationValidationRules = [
  body("specification_name")
    .trim()
    .notEmpty()
    .withMessage("Specification name is required"),
]
const verificationStatusValidationRules = [
  body("status_name")
    .trim()
    .notEmpty()
    .withMessage("Verification status name is required"),
]
const adminUserValidationRules = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("name is required"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("email is required"),
  body("designation_id")
    .trim()
    .notEmpty()
    .withMessage("designation_id is required"),
  body("department_id")
    .trim()
    .notEmpty()
    .withMessage("department_id is required"),
  body("contact")
    .trim()
    .notEmpty()
    .withMessage("contact is required"),
  
]


const brokerValidationRules = [
  body("broker_name")
    .trim()
    .notEmpty()
    .withMessage("Broker name is required"),
  body("broker_firm")
    .trim()
    .notEmpty()
    .withMessage("Broker firm is required"),
  body("broker_email")
    .trim()
    .notEmpty()
    .withMessage("Broker email is required"),
  body("broker_mobile_no")
    .notEmpty()
    .withMessage("Broker mobile no is required"),
  body("broker_alternate_no")
    .notEmpty()
    .withMessage("Alternate number is required"),
  body("state_id")
    .notEmpty()
    .withMessage("State ID is required"),
  body("city_id")
    .notEmpty()
    .withMessage("City ID is required"),
]

const subscriptionValidationRules = [

  body("package_name")
    .trim()
    .notEmpty()
    .withMessage("Package name is required"),
  body("reward_points")
    .trim()
    .notEmpty()
    .withMessage("Reward point is required"),
  body("no_leads")
    .trim()
    .notEmpty()
    .withMessage("No of lead is required"),
  body("amount")
    .trim()
    .notEmpty()
    .withMessage("Amount is required"),
  body("discount_amount")
    .trim()
    .notEmpty()
    .withMessage("Discount Amount is required"),
  body("tags")
    .trim()
    .notEmpty()
    .withMessage("Tags is required"),

  body("subheading_1")
    .trim()
    .notEmpty()
    .withMessage("Subheading 1 is required"),
  body("subheading_2")
    .trim()
    .notEmpty()
    .withMessage("Subheading 2 is required"),
  body("subheading_3")
    .trim()
    .notEmpty()
    .withMessage("Subheading 3  is required"),
  body("subheading_4")
    .trim()
    .notEmpty()
    .withMessage("Subheading 4 is required"),
  body("subheading_5")
    .trim()
    .notEmpty()
    .withMessage("Subheading 5 is required"),
]

const leadValidationRules = [

  body("property_type_id")
    .notEmpty()
    .withMessage("Property type is required"),

  body("property_code")
    .trim()
    .notEmpty()
    .withMessage("Property code is required"),

  body("date")
    .trim()
    .notEmpty()
    .withMessage("Date is required"),

  // body("amenities")
  //   .isArray({ min: 1 })
  //   .withMessage("At least one amenity is required"),

  body("possession_status")
    .notEmpty()
    .withMessage("Possession status is required"),

  body("owner_agent")
    .notEmpty()
    .withMessage("Owner/Agent is required"),

  body("owner_name")
    .trim()
    .notEmpty()
    .withMessage("Owner name is required"),

  body("link")
    .trim()
    .notEmpty()
    .withMessage("Property link is required"),

  body("owner_mobile_no")
    .trim()
    .notEmpty()
    .withMessage("Mobile number is required"),

  body("owner_alternate_no")
    .trim()
    .notEmpty()
    .withMessage("Alternate number is required"),

  body("state_id")
    .notEmpty()
    .withMessage("State is required"),

  body("city_id")
    .notEmpty()
    .withMessage("City is required"),

  body("location_id")
    .notEmpty()
    .withMessage("Location is required"),

  body("address")
    .trim()
    .notEmpty()
    .withMessage("Actual address is required"),

  body("portal")
    .notEmpty()
    .withMessage("Portal is required"),

  body("property_variant_id")
    .notEmpty()
    .withMessage("Property variant is required"),

  body("carpet_area")
    .trim()
    .notEmpty()
    .withMessage("Carpet area is required"),

  body("price_rent")
    .trim()
    .notEmpty()
    .withMessage("Price/Rent is required"),

  body("deposit")
    .trim()
    .notEmpty()
    .withMessage("Deposit is required"),
];

const uploadLeadsValidationRules = [

  body("state_id")
    .notEmpty()
    .withMessage("State is required"),
  body("city_id")
    .notEmpty()
    .withMessage("City is required"),
  body("property_type_id")
    .notEmpty()
    .withMessage("Property type is required"),

]
const pushNotificationValidationRules = [

  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required"),
  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required"),
  body("customer_type")
    .trim()
    .notEmpty()
    .withMessage("Customer type is required"),

]
const projectManagementValidationRules = [

  body("project_title")
    .trim()
    .notEmpty()
    .withMessage("Title is required"),
  body("rera_number")
    .trim()
    .notEmpty()
    .withMessage("RERA number is required"),
  body("builder_name")
    .trim()
    .notEmpty()
    .withMessage("Customer type is required"),
  body("builder_mobile")
    .trim()
    .notEmpty()
    .withMessage("Mobile no. is required"),
  body("property_type_id")
    .trim()
    .notEmpty()
    .withMessage("Customer type is required"),
  body("property_variant_ids")
    .trim()
    .notEmpty()
    .withMessage("Customer variant is required"),
  body("state_id")
    .trim()
    .notEmpty()
    .withMessage("State id is required"),
  body("city_id")
    .trim()
    .notEmpty()
    .withMessage("City id is required"),
  body("location_id")
    .trim()
    .notEmpty()
    .withMessage("City id is required"),

  body("map_location")
    .trim()
    .notEmpty()
    .withMessage("Map location is required"),
  body("total_units")
    .trim()
    .notEmpty()
    .withMessage("Total units is required"),
  body("project_size")
    .trim()
    .notEmpty()
    .withMessage("Project size is required"),
  body("launch_date")
    .trim()
    .notEmpty()
    .withMessage("Launch date is required"),
  body("buildup_area")
    .trim()
    .notEmpty()
    .withMessage("Build-up is required"),
  body("carpet_area")
    .trim()
    .notEmpty()
    .withMessage("Carpet area is required"),
  body("price_max")
    .trim()
    .notEmpty()
    .withMessage("Price range is required"),
  body("price_min")
    .trim()
    .notEmpty()
    .withMessage("Price range is required"),
  body("specification_id")
    .trim()
    .notEmpty()
    .withMessage("Specification id is required"),
  body("property_amenities_ids")
    .trim()
    .notEmpty()
    .withMessage("Amenities id is required"),

]

const adsRequestManagementValidationRules = [
  body("broker_name").trim()
    .notEmpty()
    .withMessage("Broker name is required"),
  body("broker_mobile").trim()
    .notEmpty()
    .withMessage("Broker mobile number is required"),
  body("broker_email").trim()
    .notEmpty()
    .withMessage("Broker email is required"),
  body("state_id").trim()
    .notEmpty()
    .withMessage("State is required"),
  body("city_id").trim()
    .notEmpty()
    .withMessage("City is required"),
  body("location_id").trim()
    .notEmpty()
    .withMessage("Location is required"),
  body("property_type_id").trim()
    .notEmpty()
    .withMessage("Property type is required"),
  body("property_variant_id").trim()
    .notEmpty()
    .withMessage("Property variant is required"),
  body("expected_price_rent").trim()
    .notEmpty()
    .withMessage("Expected price rent is required"),
  body("price_max").trim()
    .notEmpty()
    .withMessage("Budget range  is required"),
  body("price_min").trim()
    .notEmpty()
    .withMessage("Budget range  is required"),
  body("contact_method").trim()
    .notEmpty()
    .withMessage("Contact method is required"),
  body("carpet_area").trim()
    .notEmpty()
    .withMessage("Carpet area is required"),
  body("description").trim()
    .notEmpty()
    .withMessage("Description is required"),
  body("platforms").trim()
    .notEmpty()
    .withMessage("Platforms is required"),
  body("additional_notes").trim()
    .notEmpty()
    .withMessage("Additional notes is required"),

]

const pressReleaseValidationRules = [
  body("title")
    .trim()
    .notEmpty().withMessage("Title is required")
    .isLength({ min: 3, max: 200 })
    .withMessage("Title must be between 3 and 200 characters"),

  body("meta_url")
    .trim()
    .notEmpty().withMessage("Meta URL is required")
    .isLength({ min: 3, max: 500 })
    .withMessage("Meta URL must be less than 500 characters"),

  body("meta_keyword")
    .trim()
    .notEmpty().withMessage("Meta keyword is required")
    .isLength({ max: 255 })
    .withMessage("Meta keyword must be less than 255 characters"),

  body("author")
    .trim()
    .notEmpty().withMessage("Author is required")
    .isLength({ max: 100 })
    .withMessage("Author must be less than 100 characters"),

  body("tag")
    .trim()
    .notEmpty().withMessage("Tag is required")
    .isLength({ max: 255 })
    .withMessage("Tag must be less than 255 characters"),

  body("meta_description")
    .optional({ checkFalsy: true })
    .isLength({ max: 500 })
    .withMessage("Meta description must be less than 500 characters"),

  body("short_description")
    .trim()
    .notEmpty().withMessage("Short description is required")
    .isLength({ min: 10, max: 500 })
    .withMessage("Short description must be between 10 and 500 characters"),

  body("press_release_content")
    .trim()
    .notEmpty().withMessage("Press release content is required")
    .isLength({ min: 20 })
    .withMessage("Press release content must be at least 20 characters"),

  body("status")
    .optional()
    .isIn([0, 1, "0", "1"])
    .withMessage("Status must be 0 or 1"),
];

const faqValidationRules = [
  body("question")
    .trim()
    .notEmpty().withMessage("Question is required")
    .isLength({ min: 3, max: 200 })
    .withMessage("Question must be between 3 and 200 characters"),

  body("answer")
    .trim()
    .notEmpty().withMessage("Answer is required")
    .isLength({ min: 5, max: 500 })
    .withMessage("Answer must be between 5 and 500 characters"),

  body("status")
    .optional()
    .isIn([0, 1, "0", "1"])
    .withMessage("Status must be 0 or 1"),
];

const contactUsValidationRules = [
  body("name")
    .trim()
    .notEmpty().withMessage("Full Name is required")
    .isLength({ min: 3, max: 100 })
    .withMessage("Name must be between 3 and 100 characters"),

  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email address")
    .isLength({ max: 150 }).withMessage("Email must be less than 150 characters"),

  body("phone")
    .trim()
    .notEmpty().withMessage("Phone number is required")
    .matches(/^[0-9+\-()\s]{7,20}$/)
    .withMessage("Invalid phone number"),

  body("message")
    .trim()
    .notEmpty().withMessage("Message is required")
    .isLength({ min: 5, max: 1000 })
    .withMessage("Message must be between 5 and 1000 characters"),

  body("status")
    .optional()
    .isIn([0, 1, "0", "1"])
    .withMessage("Status must be 0 (resolved) or 1 (new)"),
];

const ourTeamValidationRules = [
  body("name")
    .trim()
    .notEmpty().withMessage("Name is required")
    .isLength({ max: 100 }).withMessage("Name must be less than 100 characters"),

  body("designation_id")
    .optional({ checkFalsy: true })
    .isInt({ min: 1 }).withMessage("Designation must be a valid ID"),

  body("status")
    .optional()
    .isIn([0, 1, "0", "1"]).withMessage("Status must be 0 or 1"),
];


const successStoryValidationRules = [
  body("name")
    .trim()
    .notEmpty().withMessage("Name is required")
    .isLength({ max: 100 }).withMessage("Name must be less than 100 characters"),

  body("organization")
    .optional({ checkFalsy: true })
    .isLength({ max: 200 }).withMessage("Organization must be less than 20 characters"),

  body("content")
    .trim()
    .notEmpty().withMessage("Content is required"),

  body("status")
    .optional()
    .isIn([0, 1, "0", "1"]).withMessage("Status must be 0 or 1"),
];



module.exports = {
  validateId,
  validateRequest,
  departmentValidationRules,
  categoryValidationRules,
  magazineValidationRules,
  podcastValidationRules,
  
  designationValidationRules,
  statusValidationRules,

  cityValidationRules,
  locationValidationRules,
  bannerValidationRules,
  reportedLeadValidationRules,
  propertyTypeValidationRules,
  propertyVariantValidationRules,
  propertyAmenitiesValidationRules,
  rewardPointsValidationRules,
  specificationValidationRules,
  verificationStatusValidationRules,
  adminUserValidationRules,
  brokerValidationRules,
  subscriptionValidationRules,
  leadValidationRules,
  uploadLeadsValidationRules,
  pushNotificationValidationRules,
  projectManagementValidationRules,
  adsRequestManagementValidationRules,
  pressReleaseValidationRules,
  faqValidationRules,
  contactUsValidationRules,
  ourTeamValidationRules,
  successStoryValidationRules

};



