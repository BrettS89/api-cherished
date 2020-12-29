const schema = {
  "$id": "/system/schema/service.content.album.action.create",
  "title": "Service.Content.Album.Action.Create",
  "allOf": [
    { "$ref": "/system/schema/service.content.album.resource" },
    { "requred": [
        "account_id",
        "name"
      ]
    }
  ]
};

export default schema;
