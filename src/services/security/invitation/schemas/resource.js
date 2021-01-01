const schema = {
  "$id": "/system/schema/service.security.invitation.resource",
  "title": "Service.Security.Invitation.Resource",
  "allOf": [
    { "$ref": "/system/schema/database.document.resource" },
    { "$ref": "/system/schema/service.security.invitation.attributes" }
  ],
};

export default schema;
