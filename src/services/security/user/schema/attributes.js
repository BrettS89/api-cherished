export default {
  "$id": "/securty/user",
  "title": "service.security.account.user",
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "description": "email of a user"
    },
    "password": {
      "type": "string",
      "description": "password of a user"
    }
  },
  "required": ["email", "password"],
  "additionalProperties": false
}
