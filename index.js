const binarySearch = (arr, target) => {
    //set integer pointing to high and low
    //while high and low do not overlap...
    //find midpoint between high and low
    //compare the target to midpoint
    //if target = midpoint, return mid index
    //if it is higher, move low pointer to midpoint +1
    //if it is lower, move high pointer to midpoint -1
    //return negative one if not present
}

class TreeNode {
    constructor(val, left, right, level){
        this.val = val
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor(){
        this.root = null
    }
    insert(val, currentNode = this.root){
        
        //instantiate the node
        const node = new TreeNode(val)
        //If there is not a root node, set it
        //current node is now equal to this node
        if(!this.root)this.root = node;
        //if passed val is less than the current node's val, send it to the left
        else if (val < currentNode.val){
            //if there ism't a node here....set it
            if(!currentNode.left)currentNode.left = node
            //else we are going to set current node to equal this node on the left and come back
            else this.insert(val, currentNode.left)
            //if passed val is greater than the current node's val, send it to the left
        } else{
            //if it's not here, set it
            if(!currentNode.right)currentNode.right = node
            //or current node is equal to this guy and send it back
            else this.insert(val, currentNode.right)
        }
    }
    search(val){
        let curr = this.root
        while(curr){
            if(val<curr.length){
                curr = curr.left
            }else if(val > curr.val){
                curr = curr.right
            }else return true
        }
        return false
    }
    preOrderTraversal(currentNode = this.root,val){
        console.log(currentNode.val)

        if(currentNode.left) this.preOrderTraversal(currentNode.left)
        if(currentNode.right)this.preOrderTraversal(currentNode.right)
    }
    inOrderTraversal(currentNode = this.root,val) {
   
        if(currentNode){
          this.inOrderTraversal(currentNode.left);
          //do something
         
          console.log(currentNode.val);
          this.inOrderTraversal(currentNode.right)
        }
      
      }
    
    
      postOrderTraversal(currentNode = this.root,val) {
        if(currentNode.left) this.postOrderTraversal(currentNode.left);
       if(currentNode.right)this.postOrderTraversal(currentNode.right)
       //do something
       
       console.log(currentNode.val);
      }

      breadthFirstTraversal() {
        let que = [this.root];
        while(que.length){
         let el = que.shift();
         //do something
         console.log(el.val)
         if(el.left)que.push(el.left);
         if(el.right)que.push(el.right);
        }
       }

       depthFirstTraversal(){
        let stack = [this.root]
        while (stack.length){
            let el = stack.pop()
            //do something
            console.log(el.val)
            if(el.left)stack.push(el.left)
            if(el.right)stack.push(el.right)
        }
       }
}


const bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
console.log(bst)
console.log('Truthy search:',bst.search(4))
console.log('Falsey search:',bst.search(5))





bst2 = new BinarySearchTree();
let val = bst2.insert(4);
bst2.insert(2);
bst2.insert(6);
bst2.insert(1);
bst2.insert(3);
bst2.insert(5);
bst2.insert(7);


//      4
//    /   \
//   2     6
//  / \   / \
// 1   3 5   7


console.log("**********************************")
console.log("Pre Order Traversal")
bst2.preOrderTraversal()
console.log("**********************************")
console.log("In Order Taversal")
bst2.inOrderTraversal()
console.log("**********************************")
console.log("Post Order Traversal" )
bst2.postOrderTraversal()
console.log("**********************************")
console.log("Breadth first Traversal" )
bst2.breadthFirstTraversal()
console.log("**********************************")
console.log("Depth first Traversal" )
bst2.depthFirstTraversal()



