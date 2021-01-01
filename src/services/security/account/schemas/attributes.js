const schema = {
  "$id": "/system/schema/service.security.account.attributes",
  "title": "Service.Security.Account.Attributes",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
    },
    "address": {
      "type": "object",
      "properties": {
        "street" : {
          "type": "string",
        },
        "city": {
          "type": "string"
        },
        "state": {
          "type": "string",
        },
        "zip": {
          "type": "string",
        },
        "country": {
          "type": "string"
        }
      },
      "additionalProperties": false,
    }
  },
  "additionalProperties": false,
};

export default schema;
