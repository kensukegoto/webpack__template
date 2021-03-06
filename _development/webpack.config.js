module.exports = (mode = "development") => {
    
  return {
      mode: mode,
      entry: {
          "js/index": "./es6/index.js",
      },
      output:{
          filename: "[name].bundle.js",
      },
      module: {
          rules: [
          { 
              test: /\.js$/, 
              loader: "babel-loader", 
              include: [
                /es6/
              ]
          }
          ]
      },
      devtool: (mode === "development") ? "inline-source-map" : false
  }
}