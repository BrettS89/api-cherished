const schema = {
  "$id": "/system/schema/service.content.photo.attributes",
  "title": "Service.Content.Photo.Attributes",
  "type": "object",
  "properties": {
    "account_id": {
      "$ref": "/system/schema/database.document.id"
    },
    "album_id": {
      "$ref": "/system/schema/database.document.id"
    },
    "thumbnail": {
      "type": "string"
    },
    "url": {
      "type": "string"
    }
  },
  "additionalProperties": false
};

export default schema;
