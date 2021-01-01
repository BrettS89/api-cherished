const schema = {
  "$id": "/system/schema/database.document.resource.attributes",
  "title": "Database.Document.Resource.Attributes",
  "type": "object",
  "properties": {
    "_id": {
      "$ref": "/system/schema/database.document.id"
    },
    "created_at": {
      "type": "string",
      "format": "date-time"
    },
    "updated_at": {
      "type": "string",
      "format": "date-time"
    },
  }
}

export default schema;
