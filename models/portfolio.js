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
    });
  
  
  Portfolio.sync().then(function(){
  Portfolio.create({
      image: "/Users/yimeng/Documents/Coding/UCB Boot camp/Homeworks/Portfolio/images/ThePsychicGame.png",
      title: "The Psychic Game",
      description: "The race between you and the computer",
      link: "https://littlefish-tech.github.io/Psychic-Game/"
    },
    {
      image: "/Users/yimeng/Documents/Coding/UCB Boot camp/Homeworks/Portfolio/images/ThePsychicGame.png",
      title: "Fun Giphy",
      description: "Let's explore the magical of Giphy",
      link: "https://littlefish-tech.github.io/GifTastic/"
    },
    {
      image: "/Users/yimeng/Documents/Coding/UCB Boot camp/Homeworks/Portfolio/images/ThePsychicGame.png",
      title: "Fun Giphy",
      description: "Let's explore the magical of Giphy",
      link: "https://littlefish-tech.github.io/GifTastic/"
    },
    {
      image: "/Users/yimeng/Documents/Coding/UCB Boot camp/Homeworks/Portfolio/images/ThePsychicGame.png",
      title: "Fun Giphy",
      description: "Let's explore the magical of Giphy",
      link: "https://littlefish-tech.github.io/GifTastic/"
    }
    )
  })
  return Portfolio;
}
  
