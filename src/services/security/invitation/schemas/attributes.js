const schema = {
  "$id": "/system/schema/service.security.invitation.attributes",
  "title": "Service.Security.Invitation.Attributes",
  "type": "object",
  "properties": {
    "account_id": {
      "$ref": "/system/schema/database.document.id"
    },
    "active": {
      "type": "boolean",
    },
    "email": {
      "type": "string",
    },
    "force": {
      "type": "boolean",
    }
  },
  "additionalProperties": false,
};

export default schema;
