module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {
      // Giving the Contact model a name of type STRING
      name: DataTypes.STRING
    });
  
    Contact.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Contact.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return Contact;
  };
  