const resource = {
  "$id": "/system/schema/service.security.user.resource",
  "title": "Service.Security.User.Resource",
  "allOf": [
    { "$ref": "/system/schema/database.document.resource" },
    { "$ref": "/system/schema/service.security.user.attributes" },
  ],
};

export default resource;
