const id = {
  "$id": "/system/schema/database.document.id",
  "title": "Database.Document.ID",
  "oneOf": [
    {
      "type": "string",
      "pattern": "^[a-fA-F\\d]{24}$"
    },
    {
      "type": "object",
      "properties": {
        "_bsontype": {
          "const": "ObjectID"
        }
      }
    }
    
  ]
};

export default id;
