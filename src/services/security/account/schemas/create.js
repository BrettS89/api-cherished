const schema = {
  "$id": "/system/schema/service.security.account.action.create",
  "title": "Service.Security.Account.Action.Create",
  "allOf": [
    { "$ref": "/system/schema/service.security.account.resource" },
    { "required": [
        "name"
      ]
    }
  ]
};

export default schema;
