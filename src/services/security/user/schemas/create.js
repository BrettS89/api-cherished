const create = {
  "$id": "/system/schema/service.security.user.action.create",
  "title": "Service.Security.User.Action.Create",
  "allOf": [
    { "$ref": "/system/schema/service.security.user.resource" },
    {
      "required": [
        "email",
        "password",
      ]
    }
  ]
};

export default create;

