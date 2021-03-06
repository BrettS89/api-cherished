const schema = {
  "$id": "/system/schema/service.security.account.resource",
  "title": "Service.Security.Account.Resource",
  "allOf": [
    { "ref": "/system/schema/database.document.resource" },
    { "$ref": "/system/schema/service.security.account.attributes" },
  ],
};

export default schema;
