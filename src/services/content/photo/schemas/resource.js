const schema = {
  "$id": "/system/schema/service.content.photo.resource",
  "title": "Service.Content.Photo.Resource",
  "allOf": [
    { "$ref": "/system/schema/database.document.resource" },
    { "$ref": "/system/schema/service.content.photo.attributes" }
  ]
};

export default schema;
