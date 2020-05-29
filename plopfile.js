module.exports = function (plop) {
  plop.setGenerator("Atomic component", {
    prompts: [
      {
        type: "list",
        name: "directory",
        message: "Select UI component type",
        choices: ["atom", "molecule", "organism"],
        default: 0,
      },
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],
    actions: function (data) {
      const actions = [
        {
          type: "add",
          path: `src/ui/${data.directory}s/{{kebabCase name}}/{{pascalCase name}}.tsx`,
          templateFile: ".templates/Component.hbs",
        },
        {
          type: "add",
          path: `src/ui/${data.directory}s/{{kebabCase name}}/{{pascalCase name}}.types.ts`,
          templateFile: ".templates/Component.types.hbs",
        },
        {
          type: "add",
          path: `src/ui/${data.directory}s/{{kebabCase name}}/{{pascalCase name}}.module.css`,
          templateFile: ".templates/Component.module.hbs",
        },
        {
          type: "add",
          path: `src/ui/${data.directory}s/{{kebabCase name}}/{{pascalCase name}}.stories.tsx`,
          templateFile: ".templates/Component.stories.hbs",
        },
      ];

      return actions;
    },
  });
};
