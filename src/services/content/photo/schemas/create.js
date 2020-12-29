const schema = {
  "$id": "/system/schema/service.content.photo.action.create",
  "title": "Service.Content.Photo.Action.Create",
  "allOf": [
    { "$ref": "/system/schema/service.content.photo.resource" },
    { "required": [
        "account_id",
        "album_id",
        "thumbnail",
        "url"
      ]
    }
  ]
};

export default schema;
