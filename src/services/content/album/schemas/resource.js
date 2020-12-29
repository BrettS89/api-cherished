const schema = {
  "$id": "/system/schema/service.content.album.resource",
  "title": "Service.Content.Album.Resource",
  "allOf": [
    { "$ref": "/system/schema/database.document.resource" },
    { "$ref": "/system/schema/service.content.album.attributes" }
  ]
};

export default schema;
