

class Node {
    constructor(val){
        this.val = val
        //pointers
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(val){
        this.root = new Node(val);
        this.count = 0

    }

    size(){
        return this.count

    }

    insert(val){
        this.count++
        let newNode = new Node(val)

        const search = node => {
            if (val < node.val){
                if(!node.left){
                    node.left = newNode
                }else {
                    search(node.left)
                }

            }else if(val > node.val){
                if(!node.right){
                    node.right = newNode
                }else{
                    search(node.right)
                }
            }
        }
        search(this.root)

    }
    min(){
        let curr = this.root

        while (curr.left){
            curr = curr.left
        }
        //returns the smallest node
        return curr
    }
    max(){
        let curr = this.root

        while (curr.right){
            curr = curr.right
        }
        //returns the smallest node
        return curr

    }
    contains(val){
        let curr = this.root

        while(curr){
            if(val === curr.val){
                return true
            }
            if(val < curr.val){
                curr = curr.left
            }else{
                curr = curr.right
            }
        }
        return false
    }
    //depth first -- branch by branch
    
    //in-order
    inOrder(){

    }
    
    //pre-order
    preOrder(){

    }
    
     //post order
    postOrder(){

    }
    //breadthFirst level by level
    //queue
    breadthFirst(){

    }
   
}

let bst = new BST(1)
bst.insert(2)
bst.insert(0)
bst.insert(3)
bst.insert(4)
bst.insert(47)
bst.insert(20)
bst.insert(0)
bst.insert(0)
bst.insert(-1)
console.log(bst.max())
console.log(bst.min())
console.log(bst.contains(202))