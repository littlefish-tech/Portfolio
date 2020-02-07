module.exports = function(sequelize, DataTypes) {
    var Portfolio = sequelize.define("Portfolio", {
      
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
    }
    );
  
    
      // Table created
 
 
    sequelize.sync({force: true}).then(function() {

  Portfolio.create({
      id: 1,
      image: "/Users/yimeng/Documents/Coding/UCB Boot camp/Homeworks/Portfolio/images/ThePsychicGame.png",
      title: "The Psychic Game",
      description: "The race between you and the computer",
      link: "https://littlefish-tech.github.io/Psychic-Game/"
    },
    {
      id: 2,
      image: "/Users/yimeng/Documents/Coding/UCB Boot camp/Homeworks/Portfolio/images/ThePsychicGame.png",
      title: "Fun Giphy",
      description: "Let's explore the magical of Giphy",
      link: "https://littlefish-tech.github.io/GifTastic/"
    },
    {
      id: 3,
      image: "/Users/yimeng/Documents/Coding/UCB Boot camp/Homeworks/Portfolio/images/ThePsychicGame.png",
      title: "Fun Giphy",
      description: "Let's explore the magical of Giphy",
      link: "https://littlefish-tech.github.io/GifTastic/"
    },
    {
      id: 4,
      image: "/Users/yimeng/Documents/Coding/UCB Boot camp/Homeworks/Portfolio/images/ThePsychicGame.png",
      title: "Fun Giphy",
      description: "Let's explore the magical of Giphy",
      link: "https://littlefish-tech.github.io/GifTastic/"
    });
  });
  return Portfolio;
};
  
