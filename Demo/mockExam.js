/* eslint-disable require-jsdoc */
"use strict";

/**
 * @param {string} value is a name of character
 * @returns {TreeNode} this is a constructor function
 */
  function TreeNode(value){
      this.value = value;
      this.children = [];
  }

  const financeManager = new TreeNode("Finance Manager");
  const hRManager = new TreeNode("HR Manager");
  const administrationVP = new TreeNode("Administration VP");
  const researchDirector = new TreeNode("Research Director");
  const investmentVP = new TreeNode("Investment VP");
  const president = new TreeNode("President");

  president.children.push(administrationVP, investmentVP);
  administrationVP.children.push(financeManager, hRManager );
  investmentVP.children.push(researchDirector);

  let count = 0;
  function countNodes(root){
      if(root.children.length === 0){
          return;
      }
      else{
          for (const node of root.children){
              count++;
            countNodes(node);
          }
      }
      return count;
  }
  console.log(countNodes(president));


//   function newProp(root){
//     if(root.children.length === 0){
//         return;
//     }else {
//         root.parent = true;
//         console.log(root);
//         for (const node of root.children){
//             newProp(node);
//         }
//     }
//   }
//   console.log(newProp(president));

//   let array = [];
//   function listAllLeaves(root){
//     if(root.children.length === 0){
//         array.push(root.value);
//         return;
//     }else {
//         for (const node of root.children){
//             listAllLeaves(node);
//         }
//     }
//     return array;
//   }
//   console.log(listAllLeaves(president));

  let arr = [];
  function allLeaves(root){
    let obj = {name: root.value, children: root.children.length};
    arr.push(obj);
    if(root.children.length === 0){
        return;
    }else {
        for (const node of root.children){
            allLeaves(node);
        }
    }
    return arr;
  }
  console.log(allLeaves(president));


