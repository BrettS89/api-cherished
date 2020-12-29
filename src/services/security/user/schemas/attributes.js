const schema = {
  "$id": "/system/schema/service.security.user.attributes",
  "title": "Service.Security.User.Attributes",
  "type": "object",
  "properties": {
    "account_id": {
      "$ref": "/system/schema/database.document.id"
    },
    "email": {
      "type": "string",
      "description": "email of a user"
    },
    "password": {
      "type": "string",
      "description": "password of a user"
    }
  },
  "additionalProperties": false
};

export default schema;
