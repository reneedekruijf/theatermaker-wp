const settings = {
  "name": "theatermaker",
  "state": {
    "frontity": {
      "url": "http://theatermaker.local/",
      "title": "Sylke van de Calseijde Theatermaker",
      "description": ""
    }
  },
  "packages": [
    {
      "name": "theatermaker-theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://theatermaker.local/wp-json",
          "homepage": "/home"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
