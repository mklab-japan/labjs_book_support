// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "5-screen-canvas-demo",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "5 Screen Canvas demo",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "rect",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": "100",
          "height": "100",
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#d6341a"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "stimulus",
      "timeout": "1000"
    }
  ]
})

// Let's go!
study.run()