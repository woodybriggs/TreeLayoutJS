var tree = {
  "name" : "root",
  "children" : [
    {
      "name" : "child 1",
      "children" : [
        {
          "name" : "child of 1 #1",
          "children" : []
        },
        {
          "name" : "child of 1 #2",
          "children" : []
        }
      ]
    },
    {
      "name" : "child 2",
      "children" : [
        {
          "name" : "child of 2 #1",
          "children" : []
        },
        {
          "name" : "child of 2 #2",
          "children" : []
        }
      ]
    }
  ]
}

function postOrder(root) {

  if (root.children == null) return;

  root.children.forEach(postOrder);

  console.log(root.name);

}

postOrder(tree);
