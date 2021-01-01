const schema = {
  "$id": "/system/schema/service.content.album.attributes",
  "title": "Service.Content.Album.Attributes",
  "type": "object",
  "properties": {
    "account_id" : {
      "$ref": "/system/schema/database.document.id"
    },
    "name": {
      "type": "string"
    }
  },
  "additionalProperties": false
};

export default schema;
