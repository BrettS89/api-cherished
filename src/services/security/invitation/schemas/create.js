const schema = {
  "$id": "/system/schema/service.security.invitation.action.create",
  "title": "Service.Security.Invitation.Action.Create",
  "allOf": [
    { "$ref": "/system/schema/service.security.invitation.resource" },
    { "required": [
        "account_id",
        "email",
      ]
    }
  ]
};

export default schema;
